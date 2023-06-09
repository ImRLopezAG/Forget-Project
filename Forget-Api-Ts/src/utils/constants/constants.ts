import dotenv from 'dotenv'

dotenv.config()

export const PORT = process.env.PORT as string
export const BASE = process.env.BASE as string
export const SECRET = process.env.JWT_SECRET as string
export const MONGODB_URI = process.env.MONGODB_URI as string
export const DB_NAME = process.env.DB_NAME as string
