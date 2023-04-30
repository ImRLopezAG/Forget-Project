import { instance } from '@/api/service'
import debounce from 'just-debounce-it'
import { useEffect, useRef, useState } from 'react'

interface Return {
  errorMessage: string
  hasError: boolean
}
interface Props {
  username: string
}

export function useLogin ({ username }: Props): Return {
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [hasError, setHasError] = useState<boolean>(false)
  const isFirstInput = useRef<boolean>(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = username === ''
      return
    }

    if (username === '') {
      setErrorMessage('this field is required')
      setHasError(true)
      return
    }

    if (username.match(/^\d+$/)) {
      setErrorMessage('the username must not be a number')
      setHasError(true)
      return
    }

    if (username.length < 3) {
      setErrorMessage('the username must be at least 3 characters long')
      setHasError(true)
      return
    }

    if (username.match(/[^a-zA-Z0-9]/)) {
      setErrorMessage('the username must not contain special characters')
      setHasError(true)
      return
    }

    if (username.match(/\s/)) {
      setErrorMessage('the username must not contain spaces')
      setHasError(true)
      return
    }

    setErrorMessage('')
    setHasError(false)
  }, [username])

  useEffect(
    () =>
      debounce(async () => {
        if (isFirstInput.current) {
          isFirstInput.current = username === ''
          return
        }

        if (!hasError) {
          instance
            .get(`/user/username/${username}`)
            .then(() => {
              setErrorMessage('')
              setHasError(false)
            })
            .catch(() => {
              setErrorMessage('invalid username')
              setHasError(true)
            })
        }
      }, 800)(),
    [username]
  )

  return { hasError, errorMessage }
}
