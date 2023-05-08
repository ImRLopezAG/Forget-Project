import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'
import { swaggerSetup } from '../libs'

export const docs = Router()

docs.use('/', swaggerUi.serve)
docs.get(
  '/',
  swaggerUi.setup(swaggerSetup, {
    customSiteTitle: 'Forget API Docs',
    customCss: '.swagger-ui .topbar { display: none }'
  })
)
