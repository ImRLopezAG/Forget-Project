import { Link, useRouteError } from 'react-router-dom'

export default function ErrorPage (): JSX.Element {
  const error: any = useRouteError()
  console.error(error)
  return (
    <div id='error-page' className='mx-auto w-full max-w-sm h-full flex flex-col justify-center'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className='mb-3'>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link
        className='bg-primary-500 hover:bg-primary-500-dark text-white font-bold py-2 px-4 rounded'
        to='/'
      >
        Go back to the home page
      </Link>
    </div>
  )
}
