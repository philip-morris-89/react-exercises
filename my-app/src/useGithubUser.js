import { useEffect, useState } from "react";

export function useGithubUser(username) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    setError(null)
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if(response.status !== 200) {
          setError(new Error("User not found"))
        }
        return response.json()
      })
      .then((json) => {
        setData(json)
      })
      .catch(error => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [username])

  return { data, loading, error }
}