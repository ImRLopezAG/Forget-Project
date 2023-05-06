import bcrypt from 'bcrypt'
import crypto from 'crypto'
import { DataTypes, Model } from 'sequelize'
import sequelize from '../database/database'

export class User extends Model {
  declare id: string
  declare firstName: string
  declare lastName: string
  declare email: string
  declare username: string
  declare password: string
  declare image: string
  toJSON (): Omit<this, 'password' | 'createdAt' | 'updatedAt'> {
    return {
      ...this.get(),
      password: undefined,
      createdAt: undefined,
      updatedAt: undefined
    }
  }
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: (): string => crypto.randomUUID(),
      unique: true
    },
    firstName: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(12),
      allowNull: false,
      validate: {
        min: 4,
        max: 12,
        notEmpty: true
      },
      unique: true
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true
      },
      unique: true
    }
  },
  {
    tableName: 'users',
    sequelize
  }
)

User.beforeCreate(async (user: User) => {
  user.password = await bcrypt.hash(user.password, 10)
})

User.beforeUpdate(async (user: User) => {
  user.password = await bcrypt.hash(user.password, 10)
})
