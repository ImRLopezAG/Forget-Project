"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateUser = exports.validateUser = void 0;
const services_1 = require("../services");
const constants_1 = require("../utils/constants");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const services = new services_1.UserService();
const validateUser = async (req, res, next) => {
    const { username, email } = req.body;
    if (username === undefined || email === undefined) {
        return res.status(400).json({ status: 400, message: 'The property username or email is required' });
    }
    const userByUsername = await services.GetByUserName(username);
    if ((userByUsername === null || userByUsername === void 0 ? void 0 : userByUsername.username) === username) {
        return res.status(400).json({ status: 400, message: 'Username already in use' });
    }
    const userByEmail = await services.GetByEmail(email);
    if ((userByEmail === null || userByEmail === void 0 ? void 0 : userByEmail.email) === email) {
        return res.status(400).json({ status: 400, message: 'Email already in use' });
    }
    return next();
};
exports.validateUser = validateUser;
const validateUpdateUser = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if ((authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(' ')[0]) !== 'Bearer') {
        return res.status(401).json({ error: 'Access denied, you need to login' });
    }
    const token = authHeader.split(' ')[1];
    const { username, email } = req.body;
    const { id } = req.params;
    if (token === undefined)
        return res.status(401).json({ status: 401, message: 'Access denied, you need to login' });
    try {
        const payload = jsonwebtoken_1.default.verify(token, constants_1.SECRET);
        const user = await services.Get(payload.uid);
        const entity = await services.Get(id);
        if ((user === null || user === void 0 ? void 0 : user.id) !== (entity === null || entity === void 0 ? void 0 : entity.id)) {
            return res.status(401).json({ status: 400, message: 'The user is not the owner of the resource' });
        }
        if (username !== undefined && (user === null || user === void 0 ? void 0 : user.username) !== username) {
            const searchUser = await services.GetByUserName(username);
            if ((searchUser === null || searchUser === void 0 ? void 0 : searchUser.username) === username) {
                return res.status(400).json({ status: 400, message: 'Username already in use' });
            }
        }
        if (username !== undefined && (user === null || user === void 0 ? void 0 : user.email) !== email) {
            const searchEmail = await services.GetByEmail(email);
            if ((searchEmail === null || searchEmail === void 0 ? void 0 : searchEmail.email) === email) {
                return res.status(400).json({ error: 'Email already in use' });
            }
        }
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).send('Internal server error');
        }
        return res.status(401).send('Unauthorized');
    }
    return next();
};
exports.validateUpdateUser = validateUpdateUser;
