import { useRef } from "react";

export function CardDetails ({ initialData }) {
  initialData = {
    model: 'Lamborghini',
    year: '1989',
    color: 'Orange',
  }

  const formRef = useRef();

  function handleInput() {
    formRef.current.reset();
  }

  return (
    <div>
      <form ref={formRef} onChange={handleInput}>
        <input defaultValue={initialData.model} />
        <br />
        <br />
        <input defaultValue={initialData.year} />
        <br />
        <br />
        <input defaultValue={initialData.color} />
      </form>
    </div>
  )
}