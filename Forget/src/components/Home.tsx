import { Base } from '@/constant/interface'
import { useFetch } from '@/hooks/useFetch'

interface IUser extends Base {
  username: string
  email: string
}

export const Home: React.FC = () => {
  const { data, isLoading, error } = useFetch<IUser>({ entity: 'user' })
  return (
    <div>
      <h1>Home</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {Array.isArray(data)
        ? (
          <ul>
            {data.map((user) => (
              <li key={user.id}>
                {user.username} - {user.email}
              </li>
            ))}
          </ul>
          )
        : (
          <p>{data?.username} - {data?.email}</p>
          )}
    </div>
  )
}
