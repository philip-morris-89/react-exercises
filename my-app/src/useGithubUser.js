import useSWR from 'swr'

export function useGithubUser(username) {
  const { data, error, mutate } = useSWR(username !== null ? `https://api.github.com/users/${username}` : null)

  function handleRefreshUsers() {
    mutate()
  }

  return {
    data,
    error,
    loading: !data && !error,
    refresh: handleRefreshUsers,
  }
}