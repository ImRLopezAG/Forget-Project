"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const express_1 = require("express");
const auth_controller_1 = require("../auth/auth.controller");
exports.auth = (0, express_1.Router)();
exports.auth.post('/Login', auth_controller_1.authenticate);
