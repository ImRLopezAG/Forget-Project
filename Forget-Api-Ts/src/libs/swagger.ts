import swaggerJSDoc, { OAS3Definition, OAS3Options } from 'swagger-jsdoc'
import { PORT } from '../utils/constants'

const swaggerDefinition: OAS3Definition = {
  openapi: '3.0.0',
  info: {
    title: 'Forget API',
    version: '1.0',
    description:
      'This is a REST API application made with Express. It retrieves data from Forget DB and returns it in JSON format.',
    contact: {
      name: 'Angel Lopez',
      url: 'https://imrlopez.dev'
    }
  },
  servers: [
    {
      url: `${PORT.startsWith('https') ? PORT : `http://localhost:${PORT}`}`
    }
  ],
  components: {
    securitySchemes: {
      Bearer: {
        type: 'http',
        scheme: 'Bearer',
        in: 'header',
        description: 'JWT Authorization header using the Bearer scheme.',
        bearerFormat: 'JWT'
      }
    }
  }
}

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ['./src/docs/*.ts'],
  explorer: true,
  security: [{ Bearer: [] }]
}

export const swaggerSetup = swaggerJSDoc(swaggerOptions)
