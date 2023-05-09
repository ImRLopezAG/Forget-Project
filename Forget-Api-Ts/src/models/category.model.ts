import { getModelForClass, prop } from '@typegoose/typegoose'
import { BaseEntity } from './base.entity'

export class Category extends BaseEntity {
  @prop({ required: true, unique: true })
  declare name: string

  @prop({ required: false })
  declare description: string
}

export const CategoryModel = getModelForClass(Category)
