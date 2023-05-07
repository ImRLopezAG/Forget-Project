import { Ref, getModelForClass, prop } from '@typegoose/typegoose'
import { BaseEntity } from './base.entity'
import { Category } from './category.model'

export class Product extends BaseEntity {
  @prop()
  declare name: string

  @prop({ default: 0 })
  declare price: number

  @prop()
  declare description: string

  @prop()
  declare image: string

  @prop({ ref: () => Category })
  declare categories: Array<Ref<Category>>
}

export const ProductModel = getModelForClass(Product)
