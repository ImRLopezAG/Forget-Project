import express, { Application, Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import multer from 'multer'
import swaggerUi from 'swagger-ui-express'
import { swaggerSetup } from './libs'
import { errorHandler } from './middleware'
import * as router from './routes'
import { imageStorage } from './utils/func/multer'
import { BASE } from './utils/constants'

const app: Application = express()

app.use(
  cors({
    origin: true,
    credentials: true
  })
)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))

app.use(multer({ storage: imageStorage }).single('imageFile'))
app.use(multer({ storage: imageStorage }).array('imageFile'))

app.use(morgan('dev'))

app.use(
  `${BASE}docs`,
  swaggerUi.serve,
  swaggerUi.setup(swaggerSetup, {
    customSiteTitle: 'Forget API Docs',
    customCss: '.swagger-ui .topbar { display: none }'
  })
)

app.get('/', (_req: Request, res: Response) => {
  res.redirect(`${BASE}Docs`)
})

app.use(`${BASE}auth`, router.auth)
app.use(`${BASE}category`, router.category)
app.use(`${BASE}user`, router.user)

app.use('*', errorHandler)

export default app
