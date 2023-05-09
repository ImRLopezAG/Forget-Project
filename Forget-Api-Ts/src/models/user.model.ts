import { getModelForClass, pre, prop } from '@typegoose/typegoose'
import bcrypt from 'bcrypt'
import { UserRole } from '../utils/constants/enums'
import { BaseEntity } from './base.entity'

@pre<User>('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10)
  }
  next()
})
@pre<User>('findOneAndUpdate', async function (next) {
  const update: any = this.getUpdate()
  if (update.password) {
    update.password = await bcrypt.hash(update.password, 10)
  }
  next()
})
export class User extends BaseEntity {
  @prop({ required: true })
  declare firstName: string

  @prop({ required: true })
  declare lastName: string

  @prop({ required: true, unique: true, lowercase: true })
  declare email: string

  @prop({ required: true, unique: true, lowercase: true })
  declare username: string

  @prop({ required: true })
  declare password: string

  @prop()
  declare image: string

  @prop({ enum: UserRole, default: UserRole.USER })
  declare role: UserRole
}

export const UserModel = getModelForClass(User)
