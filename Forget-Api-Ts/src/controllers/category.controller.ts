import { GenericController } from '../core'
import { ICategoryController } from '../interfaces/controllers/ICategoryController'
import { Category } from '../models'
import { CategoryService } from '../services'
import { Lifecycle, injectable, scoped } from 'tsyringe'

@injectable()
@scoped(Lifecycle.ContainerScoped)
export class EntityController extends GenericController<Category, CategoryService> implements ICategoryController {
  protected service: CategoryService
  constructor (service: CategoryService) {
    super(service)
    this.service = service
  }
}
