import { DisplayLanguage } from './DisplayLanguage'
import { LanguageContext } from "./LanguageContext"
import { useContext } from "react"
import { useNavigate } from 'react-router-dom'

const translation = {
  it: {
    "HELLO": "Ciao",
    "WORLD": "a tutti"
  },
  en: {
    "HELLO": "Hello",
    "WORLD": "World"
  }
}

export function Welcome(props) {
  const language = useContext(LanguageContext)
  const navigate = useNavigate()

  function handleLoginButtonClick() {
    navigate('/login')
  }

  return (
    <div className="welcome">
      <DisplayLanguage />
      {props.name && <h1>{translation[language]["HELLO"]}, {props.name}!</h1>}
      {!props.name && <h1>{translation[language]["HELLO"]} {translation[language]["WORLD"]}!</h1>}
      <button onClick={handleLoginButtonClick}>Enter the app</button>
    </div>
  )
}