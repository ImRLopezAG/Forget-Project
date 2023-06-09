import { NextFunction, Request, Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { UserModel } from '../models'
import { SECRET } from '../utils/constants'

interface ValidateUser {
  username: string
  email: string
}

const services = UserModel
export const validateUser = async (req: Request, res: Response, next: NextFunction): Promise<Response | any> => {
  const { username, email }: ValidateUser = req.body
  const regexInvalidUserName = /[a-zA-Z0-9]/g
  const regexInvalidEmail = /\S+@\S+\.\S+/

  if (!regexInvalidUserName.test(username)) {
    return res.status(400).json({ error: 'Username is invalid' })
  }

  if (!regexInvalidEmail.test(email)) {
    return res.status(400).json({ error: 'Email is invalid' })
  }

  if (username === undefined || email === undefined) {
    return res.status(400).json({ status: 400, message: 'The property username or email is required' })
  }

  const userByUsername = await services.findOne({ username }).exec()
  if (userByUsername?.username === username) {
    return res.status(400).json({ status: 400, message: 'Username already in use' })
  }

  const userByEmail = await services.findOne({ email }).exec()
  if (userByEmail?.email === email) {
    return res.status(400).json({ status: 400, message: 'Email already in use' })
  }

  return next()
}

export const validateUpdateUser = async (req: Request, res: Response, next: NextFunction): Promise<Response | any> => {
  const authHeader = req.headers.authorization
  const regexInvalidUserName = /[a-zA-Z0-9]/g
  const regexInvalidEmail = /\S+@\S+\.\S+/

  if (authHeader?.split(' ')[0] !== 'Bearer') {
    return res.status(401).json({ error: 'Access denied, you need to login' })
  }
  const token = authHeader.split(' ')[1]
  const { username, email }: ValidateUser = req.body
  const { id } = req.params
  if (token === undefined) return res.status(401).json({ status: 401, message: 'Access denied, you need to login' })
  try {
    const payload = jwt.verify(token, SECRET) as JwtPayload
    const user = await services.findById(payload.uid)
    const entity = await services.findById(id)

    if (user?.id !== entity?.id) {
      return res.status(401).json({ status: 400, message: 'The user is not the owner of the resource' })
    }

    if (username !== undefined && user?.username !== username) {
      if (!regexInvalidUserName.test(username)) {
        return res.status(400).json({ error: 'Username is invalid' })
      }
      const searchUser = await services.findOne({ username })
      if (searchUser?.username === username) {
        return res.status(400).json({ status: 400, message: 'Username already in use' })
      }
    }

    if (email !== undefined && user?.email !== email) {
      if (!regexInvalidEmail.test(email)) {
        return res.status(400).json({ error: 'Email is invalid' })
      }
      const searchEmail = await services.findOne({ email })
      if (searchEmail?.email === email) {
        return res.status(400).json({ error: 'Email already in use' })
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).send('Internal server error')
    }
    return res.status(401).send('Unauthorized')
  }
  return next()
}
