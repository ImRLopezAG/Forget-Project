/* eslint-disable @typescript-eslint/no-unused-vars */
import app from './src/app'
import { connectDatabase } from './src/database/database'
import { CategoryModel, ProductModel, UserModel } from './src/models'
import { PORT } from './src/utils/constants'

connectDatabase()
  .then(() => {
    const category = new CategoryModel()
    const user = new UserModel()
    const product = new ProductModel()

    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    console.log(err.message)
  })
