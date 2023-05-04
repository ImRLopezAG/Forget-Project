"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../utils/constants");
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize(constants_1.DBNAME, constants_1.DBUSER, constants_1.DBPASSWORD, {
    host: constants_1.HOST,
    dialect: constants_1.DBDIALECT,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});
exports.default = sequelize;
