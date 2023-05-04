import crypto from 'crypto'
import { DataTypes, Model } from 'sequelize'
import sequelize from '../database/database'

export class Category extends Model {
  declare id: string
  declare name: string
}

Category.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: () => crypto.randomUUID()
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    tableName: 'categories'
  }
)
