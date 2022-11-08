// Extract the -Your age is- message into a new component called Age and
// render it within the Welcome component.
// Pass to the Age component the age prop that Welcome is receiving from the App component.

import ReactDOM from 'react-dom'
import { App } from './App'

const root = document.querySelector('#root')

ReactDOM.render(<App />, root)
