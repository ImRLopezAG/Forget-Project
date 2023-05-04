import { Category, Product } from './'

export default function relationShip (): void {
  Category.hasMany(Product, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  Product.belongsTo(Category, {
    foreignKey: 'categoryId'
  })
}
