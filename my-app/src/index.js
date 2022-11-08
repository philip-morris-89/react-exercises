// Create a new index.js file within the src folder and render the App component using the ReactDOM.render method.

import ReactDOM from 'react-dom'
import { App } from './App'

const helloWorldApp = <App />
const root = document.querySelector('#root')

ReactDOM.render(helloWorldApp, root)
