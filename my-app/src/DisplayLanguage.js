import React from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
  en: {
    SAY_HELLO: "Hello, World! "
  },
  it: {
    SAY_HELLO: "Ciao, Mamma!"
  },
}

class DisplayLanguage extends React.Component {
  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {(language) => {
            return (
              <div><h1>{Strings[language].SAY_HELLO}</h1></div>
            )
          }}
        </LanguageContext.Consumer>
      </div>
    )
  }
}

export default DisplayLanguage;