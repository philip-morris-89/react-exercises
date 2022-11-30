import { useCounter } from "./useCounter"

export function HookCounter({ initialValue = 0 }) {
  const { counter, onIncrement, onDencrement, onReset } = useCounter(initialValue)
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDencrement}>Dencrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  )
}