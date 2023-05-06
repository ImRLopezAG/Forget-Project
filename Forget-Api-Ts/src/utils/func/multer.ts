import multer from 'multer'
import { randomUUID as uuid } from 'crypto'

export const imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images')
  },
  filename: (req, file, cb) => {
    cb(null, `${uuid()}-${file.originalname}`)
  }
})
