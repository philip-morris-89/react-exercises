import { useGithubUser } from "./useGithubUser"

export function GithubUser({ username }) {
  const { data, loading, error } = useGithubUser(username)
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>There has been an error</h1>}
      {data && <h1>Github user: {data.login}</h1>}
    </div>
  )
}

  // ----------- Same example using async function -------------------------

  // async function fetchGutHubUser(username) {
  //   setLoading(true)
  //   setError(null)

  //   try {
  //     const response = await fetch(`https://api.github.com/users/${username}`)
  //     const json = await response.json()
  //     setData(json)
  //   } catch (error) {
  //     setError(error)
  //     setData(null)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  // useEffect(() => {
  //   fetchGutHubUser(username)
  // }, [username])