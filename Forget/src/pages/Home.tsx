import { useFetch } from '@/hooks/useFetch'
import { Base } from '@/utils/interface'

interface IUser extends Base {
  username: string
  email: string
}

export const Home: React.FC = () => {
  const { data, isLoading, error } = useFetch<IUser>({ entity: 'category' })
  console.log(data)
  return (
    <div>
      <h1>Home</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
    </div>
  )
}
