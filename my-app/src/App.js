import React from 'react'
import Counter from './Counter'

export class App extends React.Component {
  render() {
    return (
      <div>
        <Counter initialValue={50} incrementAmount={50} timeout={500}/>
      </div>
    )
  }
}