"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const crypto_1 = __importDefault(require("crypto"));
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../database/database"));
class User extends sequelize_1.Model {
    toJSON() {
        return Object.assign({}, this.get(), { password: undefined });
    }
}
exports.User = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: () => crypto_1.default.randomUUID(),
        unique: true
    },
    username: {
        type: sequelize_1.DataTypes.STRING(12),
        allowNull: false,
        validate: {
            min: 4,
            max: 12,
            notEmpty: true
        },
        unique: true
    },
    password: {
        type: sequelize_1.DataTypes.STRING(128),
        allowNull: false
    },
    email: {
        type: sequelize_1.DataTypes.STRING(128),
        allowNull: false,
        validate: {
            isEmail: true,
            notEmpty: true
        },
        unique: true
    }
}, {
    tableName: 'users',
    sequelize: database_1.default
});
User.beforeCreate(async (user) => {
    user.password = await bcrypt_1.default.hash(user.password, 10);
});
User.beforeUpdate(async (user) => {
    user.password = await bcrypt_1.default.hash(user.password, 10);
});
