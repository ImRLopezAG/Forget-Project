import { prop } from '@typegoose/typegoose'
import { randomUUID } from 'crypto'
import { Document } from 'mongoose'

export abstract class BaseEntity extends Document {
  @prop({ required: true, default: () => randomUUID() })
  public _id!: string

  @prop({ default: () => new Date().toISOString() })
  declare createdAt: Date

  @prop({ default: () => new Date().toISOString() })
  declare updatedAt: Date

  toJson (): Omit<this, 'createdAt' | 'updatedAt'> {
    return Object.assign({}, this, {
      createdAt: undefined,
      updatedAt: undefined
    })
  }
}
