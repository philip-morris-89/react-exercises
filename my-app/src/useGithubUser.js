import { useState, useEffect } from "react";

export function useGithubUser(username) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchGutHubUser(username) {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`https://api.github.com/users/${username}`)
      const json = await response.json()
      if (response.status !== 200) {
        setError(new Error())
      }
      setData(json)
    } catch (error) {
      setError(error)
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGutHubUser(username)
  }, [username])

  return { data, loading, error, onFetchUser: fetchGutHubUser}

}