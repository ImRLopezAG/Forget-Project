import { Link, useRouteError } from 'react-router-dom'

export default function ErrorPage(): JSX.Element {
  const error: any = useRouteError()
  console.error(error)
  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
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
