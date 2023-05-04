"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const models_1 = require("../models");
const constants_1 = require("../utils/constants");
const bcrypt_1 = __importDefault(require("bcrypt"));
const crypto_1 = __importDefault(require("crypto"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticate = async (req, res, next) => {
    const { username, password } = req.body;
    if (username === undefined || password === undefined) {
        return res
            .status(400)
            .json({
            error: `The property ${username === undefined ? 'username' : 'password'} is required`
        });
    }
    await models_1.User.findOne({
        where: { username }
    })
        .then(async (user) => {
        if (user === null) {
            return res.status(400).json({ error: 'The user  is incorrect' });
        }
        await bcrypt_1.default.compare(password, user.password).then((match) => {
            if (!match) {
                return res.status(400).json({ error: 'The password is incorrect' });
            }
            const token = jsonwebtoken_1.default.sign({
                sub: user.username,
                email: user.email,
                uid: user.id
            }, constants_1.SECRET, {
                expiresIn: '1h',
                issuer: 'my app',
                audience: 'my users',
                jwtid: crypto_1.default.randomBytes(16).toString('hex')
            });
            req.uid = user.id;
            return res
                .status(200)
                .header('Authorization', token)
                .json({ message: 'Login successful', token });
        });
    })
        .catch((err) => {
        if (err instanceof Error) {
            console.log(err.message);
            return next(err);
        }
        return res.status(500).json({ error: 'Internal server error' });
    });
};
exports.authenticate = authenticate;
