import React from 'react';

export function Welcome(props) {
  return (
    <div className="welcome">
      { props.name && <h1>Hello, {props.name}</h1>}
      { !props.name && <h1>Hello, World!</h1>}
    </div>
  )
}