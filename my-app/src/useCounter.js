import { useState } from "react";

export function useCounter(initialValue = 0) {
  const[ counter, setCounter ] = useState(initialValue)

  function handleCounterIncrement() {
    setCounter((c) => c + 1)
  }

  function handleCounterDencrement() {
    setCounter((c) => c - 1)
  }

  function handleCounterReset() {
    setCounter(initialValue)
  }

  return {
    counter: counter,
    onIncrement: handleCounterIncrement,
    onDencrement: handleCounterDencrement,
    onReset: handleCounterReset,
  }
}