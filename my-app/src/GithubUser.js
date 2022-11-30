import React, { useEffect, useState } from "react";

export function GithubUser({ username }) {

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

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>There has been an error</h1>}
      {data && <h1>Github user: {data.login}</h1>}
    </div>
  )

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
}