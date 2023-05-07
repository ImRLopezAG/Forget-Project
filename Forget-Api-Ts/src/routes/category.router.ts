import { Router } from 'express'
import 'reflect-metadata'
import { container } from 'tsyringe'
import { CategoryController } from '../controllers'
import { CategoryModel } from '../models'
import { CategoryService } from '../services'

export const category = Router()

container.register('CategoryService', { useClass: CategoryService })
container.register('CategoryModel', { useValue: CategoryModel })

const controller: CategoryController = container.resolve(CategoryController)

category.get('/List', controller.GetAll)
category.get('/Get/:id', controller.Get)
category.post('/Create', controller.Create)
category.put('/Update/:id', controller.Update)
category.delete('/Delete/:id', controller.Delete)
