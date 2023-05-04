import { DBDIALECT, DBNAME, DBPASSWORD, DBUSER, HOST } from '@/utils/constants'
import { Sequelize } from 'sequelize'

const sequelize: Sequelize = new Sequelize(DBNAME, DBUSER, DBPASSWORD, {
  host: HOST,
  dialect: DBDIALECT,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
})

export default sequelize
