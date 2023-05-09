/* eslint-disable @typescript-eslint/naming-convention */
import { pre, prop } from '@typegoose/typegoose'
import { randomUUID } from 'crypto'
import { Document } from 'mongoose'

@pre<BaseEntity>('findOneAndUpdate', function (next) {
  const update: any = this.getUpdate()
  update.updatedAt = new Date().toISOString()
  next()
})
export abstract class BaseEntity extends Document {
  @prop({ required: true, default: () => randomUUID() })
  public _id!: string

  @prop({ default: () => new Date().toISOString() })
  declare createdAt: Date

  @prop({ default: () => new Date().toISOString() })
  declare updatedAt: Date

  toJSON (): object {
    const obj = this.toObject()
    const { createdAt, updatedAt, password, __v, ...rest } = obj
    return rest
  }
}
