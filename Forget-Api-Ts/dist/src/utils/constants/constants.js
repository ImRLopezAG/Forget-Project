"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SECRET = exports.DBUSER = exports.DBPASSWORD = exports.HOST = exports.DBDIALECT = exports.DBNAME = exports.BASE = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.PORT = process.env.PORT;
exports.BASE = process.env.BASE;
exports.DBNAME = process.env.DB_NAME;
exports.DBDIALECT = process.env.DB_Provider;
exports.HOST = process.env.HOST;
exports.DBPASSWORD = process.env.DB_PASSWORD;
exports.DBUSER = process.env.DB_USER;
exports.SECRET = process.env.JWT_SECRET;
