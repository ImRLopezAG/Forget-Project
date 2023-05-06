export interface Base {
  id: string | undefined
}

export interface IError {
  hasError: boolean
  errorMessage: string
}

export interface SavUser extends Base {
  firstName: string
  lastName: string
  userName: string
  image: string | null
  phoneNumber: string
  email: string
  password: string
  confirmPassword: string
  role: number
  imageFile: File
}
export interface User extends Base {
  firstName: string
  lastName: string
  userName: string
  email: string
  emailConfirmed: boolean
  role: string
  image: string
}
