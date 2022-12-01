import { useState } from 'react'
import { Clock } from './Clock'
import Container from './Container'
// import DisplayLanguage from './DisplayLanguage'
import { LanguageContext } from "./LanguageContext"
import { Welcome } from './Welcome'


export function App() {
  const [language, setLanguage] = useState('en')

  function handleChangeLanguage(event) {
    setLanguage(event.target.value)
  }

  return (
    <div>
      <LanguageContext.Provider value={language}>
        <Container title={<h1>My App</h1>}>
          <select value={language} onChange={handleChangeLanguage}>
            <option value="en">English</option>
            <option value="it">Italian</option>
          </select>
          <br/>
          <br/>
          <Welcome name="Filippo" />
          <Clock />
        </Container>
      </LanguageContext.Provider>
    </div>
  )
}