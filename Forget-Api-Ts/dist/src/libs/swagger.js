"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSetup = void 0;
const constants_1 = require("../utils/constants");
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Ts Api Template',
        version: '1.5',
        description: 'This is an API template made with express and typescript, to speed up your development, it contains repositories and generic services for the typical CRUD actions, based on a Sequelize model, we use it for data persistence',
        contact: {
            name: 'Angel Lopez',
            url: 'https://imrlopez.dev'
        }
    },
    servers: [
        {
            url: `http://localhost:${constants_1.PORT}`
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
};
const swaggerOptions = {
    swaggerDefinition,
    apis: ['src/docs/*.ts'],
    explorer: true,
    security: [{ Bearer: [] }]
};
exports.swaggerSetup = (0, swagger_jsdoc_1.default)(swaggerOptions);
