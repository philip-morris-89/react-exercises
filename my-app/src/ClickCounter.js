import React, { useState } from "react";

export function ClickCounter ( {initialValue = 0, incrementBy = 1 }) {
  const [counter, setCounter] = useState(initialValue);

  function handleCounterIncrement() {
    setCounter(c => c + incrementBy);
  }

  function handleResetCounter() {
    setCounter(initialValue);
  }
  
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleCounterIncrement}>Increment</button>
      <button onClick={handleResetCounter}>Reset</button>
    </div>
  )
}


// Example using Class

// export class ClickCounter extends React.Component {
//   state = {
//     count: 0,
//   }

//   handleCounterIncrement = () => {
//     this.setState((state) => {
//       return {
//         count: state.count + (this.props.incrementBy ?? 1),
//       }
//     })
//   }

//   render() {
//     return(
//       <div>
//         <h1>Counter: {this.state.count}</h1>
//         <button onClick={this.handleCounterIncrement}>Increment</button>
//       </div>
//     )
//   }
// }