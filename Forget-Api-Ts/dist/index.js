"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
const app_1 = __importDefault(require("./src/app"));
const database_1 = __importDefault(require("./src/database/database"));
const models_1 = require("./src/models");
const relationShip_1 = __importDefault(require("./src/models/relationShip"));
const constants_1 = require("./src/utils/constants");
const category = new models_1.Category();
const user = new models_1.User();
const product = new models_1.Product();
(0, relationShip_1.default)();
database_1.default
    .sync( /* { alter: true } */)
    .then(() => {
    app_1.default.listen(constants_1.PORT || 3000, () => {
        console.log(`Server started on http://localhost:${constants_1.PORT}`);
    });
})
    .catch((err) => {
    console.log(err.message);
});
