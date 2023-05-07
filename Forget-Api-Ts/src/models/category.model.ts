import { getModelForClass, prop } from '@typegoose/typegoose'
import { BaseEntity } from './base.entity'

export class Category extends BaseEntity {
  @prop()
  declare name: string
}

export const CategoryModel = getModelForClass(Category)
