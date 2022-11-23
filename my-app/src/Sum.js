import React from 'react';

export function Sum({numbers}) {

  const initialValue = 0;
  const sumWithInitial = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
  
  return (
    <div>
      <h1>{sumWithInitial}</h1>
    </div>
  )
}