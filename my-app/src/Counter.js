import { useState, useEffect } from "react";

export function Counter({initialValue = 0}) {
  const [counter, setCounter] = useState(initialValue);

  useEffect( () => {
    setInterval(() => {
      setCounter(() => counter + 1);
    }, 1000)
  }, [counter])

  // Mount and Unmount
  useEffect(() => {
    console.log("I have mounted");

    return () => {
      console.log('I am about to be un-mounted')
    }
  }, []);

  // Clean Up
  useEffect(() => {
    console.log(`Count: ${counter}`);

    return () => {
      console.log(`The count was: ${counter}`)
    }
  }, [counter]);

  return (
   <h1>{counter}</h1> 
  )
}