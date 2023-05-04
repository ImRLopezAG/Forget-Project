"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const core_1 = require("../core");
const services_1 = require("../services");
const tsyringe_1 = require("tsyringe");
let UserController = class UserController extends core_1.GenericController {
    constructor(service) {
        super(service);
        this.service = service;
        this.GetByEmail = this.GetByEmail.bind(this);
        this.GetByUsername = this.GetByUsername.bind(this);
    }
    async GetByEmail(req, res, next) {
        try {
            const email = req.params.email;
            email !== null && email !== void 0 ? email : res.status(400).json({ message: 'The email is required' });
            const user = await this.service.GetByEmail(email);
            if (user != null) {
                return res.status(200).json(user);
            }
            else {
                return res.status(404).json({ message: `The user with email ${req.params.id} does not exist` });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                return next(error);
            }
            return res.status(500).json({ status: 500, message: 'Internal server error' });
        }
    }
    async GetByUsername(req, res, next) {
        try {
            const username = req.params.username;
            username !== null && username !== void 0 ? username : res.status(400).json({ message: 'The username is required' });
            const user = await this.service.GetByUserName(username);
            if (user != null) {
                return res.status(200).json(user);
            }
            else {
                return res.status(404).json({ message: `The user with username ${req.params.id} does not exist` });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                return next(error);
            }
            return res.status(500).json({ status: 500, message: 'Internal server error' });
        }
    }
};
UserController = __decorate([
    (0, tsyringe_1.autoInjectable)(),
    (0, tsyringe_1.scoped)(tsyringe_1.Lifecycle.ContainerScoped),
    __metadata("design:paramtypes", [services_1.UserService])
], UserController);
exports.UserController = UserController;
