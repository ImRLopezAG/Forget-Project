import 'reflect-metadata'
import { Router } from 'express'
import { container } from 'tsyringe'
import { ProductController } from '../controllers'

export const product = Router()

const controller: ProductController = container.resolve(ProductController)

product.get('/List', controller.GetAll)
product.get('/Get/:id', controller.Get)
product.post('/Create', controller.Create)
product.put('/Update/:id', controller.Update)
product.delete('/Delete/:id', controller.Delete)
