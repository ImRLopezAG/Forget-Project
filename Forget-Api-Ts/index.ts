/* eslint-disable @typescript-eslint/no-unused-vars */
import app from './src/app'
import sequelize from './src/database/database'
import { Category, Product, User } from './src/models'
import relationShip from './src/models/relationShip'
import { PORT } from './src/utils/constants'

const category = new Category()
const user = new User()
const product = new Product()

relationShip()
sequelize
  .sync(/* { alter: true } */)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    console.log(err.message)
  })
