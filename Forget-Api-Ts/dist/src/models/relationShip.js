"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("./");
function relationShip() {
    _1.Category.hasMany(_1.Product, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
    _1.Product.belongsTo(_1.Category, {
        foreignKey: 'categoryId'
    });
}
exports.default = relationShip;
