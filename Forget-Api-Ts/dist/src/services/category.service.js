"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const core_1 = require("../core");
const models_1 = require("../models");
class CategoryService extends core_1.GenericService {
    constructor() {
        super(models_1.Category);
    }
}
exports.CategoryService = CategoryService;
