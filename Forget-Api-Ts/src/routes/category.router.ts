import 'reflect-metadata'
import { Router } from 'express'
import { container } from 'tsyringe'
import { CategoryController } from '../controllers'

export const category = Router()

const controller: CategoryController = container.resolve(CategoryController)

category.get('/List', controller.GetAll)
category.get('/Get/:id', controller.Get)
category.post('/Create', controller.Create)
category.put('/Update/:id', controller.Update)
category.delete('/Delete/:id', controller.Delete)
