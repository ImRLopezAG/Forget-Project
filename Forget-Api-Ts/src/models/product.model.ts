import crypto from 'crypto'
import { DataTypes, Model } from 'sequelize'
import sequelize from '../database/database'

export class Product extends Model {
  declare id: string
  declare name: string
  declare price: number
  declare description: string
  declare image: string
  declare categoryId: string
}

Product.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: (): string => crypto.randomUUID(),
      unique: true
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    categoryId: {
      type: DataTypes.UUID,
      allowNull: false
    }
  },
  {
    tableName: 'products',
    sequelize
  }
)
