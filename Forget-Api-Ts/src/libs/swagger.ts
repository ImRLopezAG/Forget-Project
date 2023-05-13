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
    },
    schemas: {
      Authentication: {
        type: 'object',
        properties: {
          message: {
            type: 'string'
          },
          token: {
            type: 'string'
          }
        },
        example: {
          message: 'Login successful',
          token: 'your token'
        }
      },
      UserLogin: {
        type: 'object',
        required: ['username', 'password'],
        properties: {
          username: {
            type: 'string',
            description: 'User username'
          },
          password: {
            type: 'string',
            description: 'User password'
          }
        },
        example: {
          username: 'johnDoe',
          password: 'password'
        }
      },
      SaveUser: {
        type: 'object',
        properties: {
          firstName: {
            type: 'string'
          },
          lastName: {
            type: 'string'
          },
          image: {
            type: 'string'
          },
          username: {
            type: 'string'
          },
          email: {
            type: 'string'
          },
          password: {
            type: 'string'
          },
          role: {
            type: 'string'
          }
        },
        example: {
          firstName: 'John',
          lastName: 'Doe',
          image: 'example.jpg',
          username: 'John',
          email: 'john@example.com',
          password: '123456abc',
          role: 'user'
        }
      },
      User: {
        type: 'object',
        properties: {
          id: {
            type: 'string'
          },
          username: {
            type: 'string'
          },
          email: {
            type: 'string'
          },
          firstName: {
            type: 'string'
          },
          lastName: {
            type: 'string'
          },
          password: {
            type: 'string'
          },
          image: {
            type: 'string'
          },
          role: {
            type: 'string',
            enum: ['USER', 'ADMIN']
          }
        }
      },
      SaveProduct: {
        type: 'object',
        properties: {
          name: {
            type: 'string'
          },
          price: {
            type: 'number'
          },
          description: {
            type: 'string'
          },
          image: {
            type: 'string'
          },
          categories: {
            type: 'array',
            items: {
              type: 'string'
            }
          }
        },
        example: {
          name: 'Product Name',
          price: 9.99,
          description: 'Product description',
          image: 'example.jpg',
          categories: ['category1', 'category2']
        }
      },
      Product: {
        type: 'object',
        properties: {
          id: {
            type: 'string'
          },
          name: {
            type: 'string'
          },
          price: {
            type: 'number'
          },
          description: {
            type: 'string'
          },
          image: {
            type: 'string'
          },
          category: {
            type: 'string'
          }
        }
      },
      SaveCategory: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'Category name'
          },
          description: {
            type: 'string',
            description: 'Category description'
          }
        },
        example: {
          name: 'shoes',
          description: 'shoes description'
        }
      },
      Category: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Category id'
          },
          name: {
            type: 'string',
            description: 'Category name'
          },
          description: {
            type: 'string',
            description: 'Category description'
          }
        },
        example: {
          name: 'Category name',
          description: 'Category description'
        }
      }
    }
  },
  tags: [
    {
      name: 'Authentication',
      description: 'Authentication management'
    },
    {
      name: 'User',
      description: 'User management'
    },
    {
      name: 'Product',
      description: 'Product management'
    },
    {
      name: 'Category',
      description: 'Category management'
    }
  ],
  paths: {
    '/api/auth/login': {
      post: {
        tags: ['Authentication'],
        summary: 'Login',
        description: 'Login',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/UserLogin'
              }
            }
          }
        },
        responses: {
          200: {
            description: 'Login successful',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Authentication'
                }
              }
            }
          },
          400: {
            description: 'Bad request'
          },
          500: {
            description: 'Internal server error'
          }
        }
      }
    },
    '/api/user/list': {
      get: {
        tags: ['User'],
        summary: 'Get all users',
        description: 'Get all users',
        responses: {
          200: {
            description: 'Get all users',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/User'
                  }
                }
              }
            }
          },
          401: {
            description: 'Unauthorized'
          },
          404: {
            description: 'Not found'
          }
        }
      }
    },
    '/api/user/get/{id}': {
      get: {
        tags: ['User'],
        summary: 'Get a user',
        description: 'Get a user',
        parameters: [
          {
            in: 'path',
            name: 'id',
            schema: {
              type: 'string'
            },
            required: true,
            description: 'User id'
          }
        ],
        responses: {
          200: {
            description: 'Get a user',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/User'
                }
              }
            }
          },
          401: {
            description: 'Unauthorized'
          },
          404: {
            description: 'Not found'
          },
          500: {
            description: 'Internal server error'
          }
        }
      }
    },
    '/api/user/email/{email}': {
      get: {
        tags: ['User'],
        summary: 'Get user by email',
        description: 'Get a user by their email address',
        parameters: [
          {
            in: 'path',
            name: 'email',
            schema: {
              type: 'string'
            },
            required: true,
            description: "User's email address"
          }
        ],
        responses: {
          200: {
            description: 'Get a user by email',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/User'
                }
              }
            }
          },
          401: {
            description: 'Unauthorized'
          },
          404: {
            description: 'User not found'
          },
          500: {
            description: 'Internal server error'
          }
        }
      }
    },
    '/api/user/username/{username}': {
      get: {
        tags: ['User'],
        summary: 'Get user by username',
        description: 'Get a user by their username',
        parameters: [
          {
            in: 'path',
            name: 'username',
            schema: {
              type: 'string'
            },
            required: true,
            description: "User's username"
          }
        ],
        responses: {
          200: {
            description: 'Get a user by username',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/User'
                }
              }
            }
          },
          401: {
            description: 'Unauthorized'
          },
          404: {
            description: 'User not found'
          },
          500: {
            description: 'Internal server error'
          }
        }
      }
    },
    '/api/user/create': {
      post: {
        tags: ['Authentication'],
        summary: 'Create a user',
        description: 'Create a user',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SaveUser'
              }
            }
          }
        },
        responses: {
          201: {
            description: 'Create a user'
          },
          400: {
            description: 'Bad request'
          },
          401: {
            description: 'Unauthorized'
          },
          500: {
            description: 'Internal server error'
          }
        }
      }
    },
    '/api/user/update/{id}': {
      put: {
        tags: ['User'],
        summary: 'Update a user',
        description:
          'You need to login to update a user and you can only update your own user',
        security: [
          {
            Bearer: []
          }
        ],
        parameters: [
          {
            in: 'path',
            name: 'id',
            schema: {
              type: 'string'
            },
            required: true,
            description: 'User id'
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SaveUser'
              }
            }
          }
        },
        responses: {
          200: {
            description: 'User updated successfully',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/User'
                }
              }
            }
          },
          400: {
            description: 'Invalid request body or parameter'
          },
          401: {
            description: 'Unauthorized'
          },
          404: {
            description: 'User not found'
          },
          500: {
            description: 'Internal server error'
          }
        }
      }
    },
    '/api/user/delete/{id}': {
      delete: {
        tags: ['User'],
        summary: 'Delete a user',
        description: 'Delete a user',
        parameters: [
          {
            in: 'path',
            name: 'id',
            schema: {
              type: 'string'
            },
            required: true,
            description: 'User id'
          }
        ],
        responses: {
          204: {
            description: 'Delete a user'
          },
          401: {
            description: 'Unauthorized'
          },
          404: {
            description: 'Not found'
          },
          500: {
            description: 'Internal server error'
          }
        }
      }
    },
    '/api/product/list': {
      get: {
        tags: ['Product'],
        summary: 'Get all products',
        description: 'Get all products',
        responses: {
          200: {
            description: 'Get all products',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Product'
                  }
                }
              }
            }
          },
          401: {
            description: 'Unauthorized'
          },
          404: {
            description: 'Not found'
          }
        }
      }
    },
    '/api/product/Get/{id}': {
      get: {
        tags: ['Product'],
        summary: 'Get a product',
        description: 'Get a product by its ID',
        parameters: [
          {
            in: 'path',
            name: 'id',
            schema: {
              type: 'string'
            },
            required: true,
            description: 'Product ID'
          }
        ],
        responses: {
          200: {
            description: 'Get a product',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Product'
                }
              }
            }
          },
          401: {
            description: 'Unauthorized'
          },
          404: {
            description: 'Not found'
          },
          500: {
            description: 'Internal server error'
          }
        }
      }
    },
    '/api/product/create': {
      post: {
        tags: ['Product'],
        summary: 'Create a product',
        description: 'Create a new product',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SaveProduct'
              }
            }
          }
        },
        responses: {
          201: {
            description: 'Create a product'
          },
          400: {
            description: 'Bad request'
          },
          401: {
            description: 'Unauthorized'
          },
          500: {
            description: 'Internal server error'
          }
        }
      }
    },
    '/api/product/update/{id}': {
      put: {
        tags: ['Product'],
        summary: 'Update a product',
        description: 'Update a product by its ID',
        parameters: [
          {
            in: 'path',
            name: 'id',
            schema: {
              type: 'string'
            },
            required: true,
            description: 'Product ID'
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SaveProduct'
              }
            }
          }
        },
        responses: {
          200: {
            description: 'Product updated successfully',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Product'
                }
              }
            }
          },
          400: {
            description: 'Invalid request body or parameter'
          },
          401: {
            description: 'Unauthorized'
          },
          404: {
            description: 'Product not found'
          },
          500: {
            description: 'Internal server error'
          }
        }
      }
    },
    '/api/product/delete/{id}': {
      delete: {
        tags: ['Product'],
        summary: 'Delete a product',
        description: 'Delete a product by its ID',
        parameters: [
          {
            in: 'path',
            name: 'id',
            schema: {
              type: 'string'
            },
            required: true,
            description: 'Product ID'
          }
        ],
        responses: {
          204: {
            description: 'Delete a product'
          },
          401: {
            description: 'Unauthorized'
          },
          404: {
            description: 'Not found'
          },
          500: {
            description: 'Internal server error'
          }
        }
      }
    },
    '/api/Category/list': {
      get: {
        tags: ['Category'],
        summary: 'Get all entities',
        description: 'Get all entities',
        responses: {
          200: {
            description: 'Get all entities',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Category'
                  }
                }
              }
            }
          },
          401: {
            description: 'Unauthorized'
          },
          404: {
            description: 'Not found'
          }
        }
      }
    },
    '/api/Category/Get/{id}': {
      get: {
        tags: ['Category'],
        summary: 'Get an Category',
        description: 'Get an Category',
        parameters: [
          {
            in: 'path',
            name: 'id',
            schema: {
              type: 'string'
            },
            required: true,
            description: 'Category id'
          }
        ],
        responses: {
          200: {
            description: 'Get an Category'
          },
          401: {
            description: 'Unauthorized'
          },
          404: {
            description: 'Not found'
          },
          500: {
            description: 'Internal server error'
          }
        }
      }
    },
    '/api/Category/create': {
      post: {
        tags: ['Category'],
        summary: 'Create an Category',
        description: 'Create an Category, the name must be unique',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SaveCategory'
              }
            }
          }
        },
        responses: {
          201: {
            description: 'Create an Category'
          },
          400: {
            description: 'Bad request'
          },
          401: {
            description: 'Unauthorized'
          },
          500: {
            description: 'Internal server error'
          }
        }
      }
    },
    '/api/Category/update/{id}': {
      put: {
        tags: ['Category'],
        summary: 'Update an Category',
        description: 'Update an Category',
        parameters: [
          {
            in: 'path',
            name: 'id',
            schema: {
              type: 'string'
            },
            required: true,
            description: 'Category id'
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SaveCategory'
              }
            }
          }
        },
        responses: {
          200: {
            description: 'Update an Category'
          },
          401: {
            description: 'Unauthorized'
          },
          404: {
            description: 'Not found'
          },
          500: {
            description: 'Internal server error'
          }
        }
      }
    },
    '/api/Category/delete/{id}': {
      delete: {
        tags: ['Category'],
        summary: 'Delete an Category',
        description: 'Delete an Category',
        parameters: [
          {
            in: 'path',
            name: 'id',
            schema: {
              type: 'string'
            },
            required: true,
            description: 'Category id'
          }
        ],
        responses: {
          204: {
            description: 'Delete an Category'
          },
          401: {
            description: 'Unauthorized'
          },
          404: {
            description: 'Not found'
          },
          500: {
            description: 'Internal server error'
          }
        }
      }
    }
  }
}

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ['./src/routes/*.router.ts'],
  explorer: true,
  security: [{ Bearer: [] }]
}

export const swaggerSetup = swaggerJSDoc(swaggerOptions)
