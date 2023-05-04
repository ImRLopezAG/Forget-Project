"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const core_1 = require("../core");
const models_1 = require("../models");
class ProductService extends core_1.GenericService {
    constructor() {
        super(models_1.Product);
    }
}
exports.ProductService = ProductService;
