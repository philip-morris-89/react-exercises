import React from 'react';
import Container from './Container';
import { LanguageContext } from './LanguageContext';
import DisplayLanguage from './DisplayLanguage';
import Clock from './Clock';

export class App extends React.Component {

  state = {
    language: 'en',
  }

  handleLanguageChange = (event) => {
    this.setState({
      language: event.target.value
    })
  }

  render() {
    return (
      <div>
        <LanguageContext.Provider value={this.state.language}>
          <Container title={<h1>Context 01</h1>}>
            <select value={this.state.language} onChange={this.handleLanguageChange}>
              <option value="en">English</option>
              <option value="it">Italian</option>
            </select>
            <DisplayLanguage />
            <Clock />
          </Container>
        </LanguageContext.Provider>
      </div>
    )
  }
}