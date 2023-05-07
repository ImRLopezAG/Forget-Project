import { injectable } from 'tsyringe'
import { GenericService } from '../core'
import { ICategoryService } from '../interfaces/services'
import { Category, CategoryModel } from '../models'

@injectable()
export class CategoryService extends GenericService<Category> implements ICategoryService {
  constructor () {
    super(CategoryModel)
  }
}
