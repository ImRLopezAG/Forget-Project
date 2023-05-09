import { connect } from 'mongoose'
import { DB_NAME, MONGODB_URI } from '../utils/constants'

export const connectDatabase = async (): Promise<void> => {
  try {
    await connect(MONGODB_URI, {
      dbName: DB_NAME
    })
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error)
  }
}
