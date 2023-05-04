import { GenericService } from '../core'
import { ICategoryService } from '../interfaces/services'
import { Category } from '../models'

export class CategoryService extends GenericService<Category> implements ICategoryService {
  constructor () {
    super(Category)
  }
}
