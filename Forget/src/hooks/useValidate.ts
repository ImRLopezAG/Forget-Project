import { IError } from '@/utils/interface'
import { useEffect, useRef, useState } from 'react'

interface Props {
  username: string
}
interface Return {
  userError: IError
  isFirstInput: React.MutableRefObject<boolean>
  handleError: (errorMessage: string) => void
}

export function useValidate ({ username }: Props): Return {
  const [hasError, setHasError] = useState<IError>({
    hasError: false,
    errorMessage: ''
  })
  const isFirstInput = useRef<boolean>(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = username === ''
      return
    }

    if (username === '') {
      setHasError({
        hasError: true,
        errorMessage: 'username is required'
      })
      return
    }

    if (username.match(/^\d+$/)) {
      setHasError({
        hasError: true,
        errorMessage: 'username must not be a number'
      })
      return
    }

    if (username.length < 3) {
      setHasError({
        hasError: true,
        errorMessage: 'username must be at least 3 characters'
      })
      return
    }

    if (username.match(/[^a-zA-Z0-9]/)) {
      setHasError({
        hasError: true,
        errorMessage: 'username must not contain special characters'
      })
      return
    }

    if (username.match(/\s/)) {
      setHasError({
        hasError: true,
        errorMessage: 'username must not contain spaces'
      })
      return
    }

    setHasError({
      hasError: false,
      errorMessage: ''
    })
  }, [username])

  const handleError = (errorMessage: string): void => {
    setHasError({
      hasError: true,
      errorMessage
    })
  }

  return {
    isFirstInput,
    userError: hasError,
    handleError
  }
}
