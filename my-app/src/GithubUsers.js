import useSWR from 'swr'

export function GithubUsers() {
  const { data, error } = useSWR(`https://api.github.com/users`)

  return (
    <div>
      {!data && !error && <h3>Loading...</h3>}
      {error && <h3>An error has occured</h3>}
      {data && !error && <ul>
        {data.map( user => (
          <li key={user.login}>{user.login}</li>
        ))}
        </ul>}
    </div>
  )
}