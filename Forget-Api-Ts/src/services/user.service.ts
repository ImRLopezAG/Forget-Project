import { GenericService } from '../core'
import { IUserService } from '../interfaces/services'
import { User, UserModel } from '../models'

export class UserService extends GenericService<User> implements IUserService {
  constructor () {
    super(UserModel)
  }

  async GetByUserName (username: string): Promise<User | null> {
    try {
      const user = await UserModel.findOne({ username }).exec()
      return user
    } catch (error) {
      if (error instanceof Error) {
        throw error
      }
      throw new Error('Error while getting user by username')
    }
  }

  async GetByEmail (email: string): Promise<User | null> {
    try {
      const user = await UserModel.findOne({ email }).exec()
      return user
    } catch (error) {
      if (error instanceof Error) {
        throw error
      }
      throw new Error('Error while getting user by email')
    }
  }
}
