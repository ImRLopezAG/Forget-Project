"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtValidation = void 0;
const constants_1 = require("../utils/constants");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtValidation = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if ((authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(' ')[0]) !== 'Bearer') {
        return res.status(401).json({ error: 'Access denied, you need to login' });
    }
    const token = authHeader.split(' ')[1];
    if (!token || token.trim() === '') {
        return res.status(401).json({ error: 'Access denied, you need to login' });
    }
    try {
        const payload = jsonwebtoken_1.default.verify(token, constants_1.SECRET);
        req.uid = payload.sub;
        next();
    }
    catch (error) {
        console.log(error);
        if (error instanceof Error) {
            return res.status(500).send('Internal server error');
        }
        return res.status(401).send('Unauthorized');
    }
};
exports.jwtValidation = jwtValidation;
