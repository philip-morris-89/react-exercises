import { useMemo } from "react"

export function FilteredList ({ users }) {
  users = [
    {
      name: 'Phil',
      id: 1,
      age: 33,
    },
    {
      name: 'Mark',
      id: 2,
      age: 18,
    },
    {
      name: 'Seb',
      id: 3,
      age: 16,
    },
    {
      name: 'Michael',
      id: 4,
      age: 50,
    },
  ]

  const adults = useMemo(() => users.filter(user => user.age >= 18))
  const renderAdults = adults.map(user => <li key={user.id}>{user.name}</li>)

  return (
    <ul>{renderAdults}</ul>
  )
}