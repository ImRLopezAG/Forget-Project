import { Category, Product } from '@/models'

export default function relationShip (): void {
  Category.hasMany(Product, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  Product.belongsTo(Category, {
    foreignKey: 'categoryId'
  })
}
