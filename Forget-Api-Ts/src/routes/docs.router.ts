import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'
import { SwaggerTheme } from 'swagger-themes'
import { swaggerSetup } from '../libs'

export const docs = Router()
const theme = new SwaggerTheme('v3').getBuffer('dark')

docs.use('/', swaggerUi.serve)
docs.get(
  '/',
  swaggerUi.setup(swaggerSetup, {
    customSiteTitle: 'Forget API Docs',
    customCss: `.swagger-ui .topbar { display: none } ${theme}`
  })
)
