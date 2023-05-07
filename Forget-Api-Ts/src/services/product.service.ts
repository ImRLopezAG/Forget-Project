import { GenericService } from '../core'
import { IProductService } from '../interfaces/services'
import { Product, ProductModel } from '../models'

export class ProductService extends GenericService<Product> implements IProductService {
  constructor () {
    super(ProductModel)
  }
}
