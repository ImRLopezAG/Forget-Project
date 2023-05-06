import { Sequelize } from 'sequelize'
import { DBDIALECT, DBNAME, DBPASSWORD, DBUSER, HOST } from '../utils/constants'

const sequelize: Sequelize = new Sequelize(DBNAME, DBUSER, DBPASSWORD, {
  host: HOST,
  dialect: DBDIALECT,
  port: 7246,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
})

export default sequelize
