import React from 'react';

export function Sum({numbers=[1,2,3,4,5]}) {

  const initialValue = 0;
  const sumWithInitial = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
  
  return (
    <div>
      <h1>Sum {numbers[0]} + {numbers[1]} + {numbers[2]} + {numbers[3]} + {numbers[4]}: {sumWithInitial}</h1>
    </div>
  )
}