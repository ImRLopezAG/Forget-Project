import { GenericController } from '../core'
import { IProductController } from '../interfaces/controllers'
import { Product } from '../models'
import { ProductService } from '../services'
import { Lifecycle, injectable, scoped } from 'tsyringe'

@injectable()
@scoped(Lifecycle.ContainerScoped)
export class EntityController extends GenericController<Product, ProductService> implements IProductController {
  protected service: ProductService
  constructor (service: ProductService) {
    super(service)
    this.service = service
  }
}
