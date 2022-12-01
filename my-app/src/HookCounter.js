import { useCounter } from "./useCounter"

export function HookCounter({ initialValue = 0 }) {
  const { counter, onIncrement, onDecrement, onReset } = useCounter(initialValue)

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <br/>
      <br/>
      <button onClick={onReset}>Reset</button>
    </div>
  )
}