"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const core_1 = require("../core");
const models_1 = require("../models");
class UserService extends core_1.GenericService {
    constructor() {
        super(models_1.User);
    }
    async GetByUserName(username) {
        try {
            const user = await models_1.User.findOne({ where: { username } });
            return user;
        }
        catch (error) {
            if (error instanceof Error) {
                throw error;
            }
            throw new Error('Error while getting user by username');
        }
    }
    async GetByEmail(email) {
        try {
            const user = await models_1.User.findOne({ where: { email } });
            return user;
        }
        catch (error) {
            if (error instanceof Error) {
                throw error;
            }
            throw new Error('Error while getting user by username');
        }
    }
}
exports.UserService = UserService;
