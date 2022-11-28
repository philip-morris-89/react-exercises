import React from "react";
// import CounterDisplay from "./CounterDisplay";

export function Counter({initialValue = 0}) {
  return ( 
    <div>
      <h1>{initialValue}</h1>
      {/* <CounterDisplay counter={this.state.count} /> */}
    </div>
  )
}


// class Counter extends React.Component {
//   state = {
//     count: this.props.initialValue ?? 0,
//   }

//   componentDidMount() {
//     setInterval(() => {
//       this.setState((state) => {
//         return {
//           count: state.count + (this.props.incrementAmount ?? 1),
//         }
//       })
//     }, this.props.timeout ?? 1000)
//   }

//   render() {
//     return (
//       <div>
//         <CounterDisplay counter={this.state.count} />
//       </div>
//     )
//   }
// }

// export default Counter;