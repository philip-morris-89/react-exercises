import React from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
  en: {
    CURRENT_TIME: "Current time is: "
  },
  it: {
    CURRENT_TIME: "L'ora attuale è: "
  },
}

class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  constructor(props) {
    super(props)
    setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }

  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {(language) => {
            return (
              <div>{Strings[language].CURRENT_TIME} {this.state.date.toLocaleTimeString()}</div>
            )
          }}
        </LanguageContext.Consumer>
      </div>
    )
  }
}

export default Clock;