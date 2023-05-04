/* eslint-disable @typescript-eslint/no-unused-vars */
import app from '@/app'
import sequelize from '@/database/database'
import { Category, Product, User } from '@/models'
import relationShip from '@/models/relationShip'
import { PORT } from '@/utils/constants'

const category = new Category()
const user = new User()
const product = new Product()

relationShip()
sequelize
  .sync(/* { alter: true } */)
  .then(() => {
    app.listen(PORT || 3000, () => {
      console.log(`Server started on http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    console.log(err.message)
  })
