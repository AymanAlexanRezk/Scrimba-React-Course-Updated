import React from 'react';
/*
    > && : Conditional Rendering
    - Truthy -> render the right side.
    - Falsy -> not rendering anything.
*/
export default function Joke(props) {
  return (
    <div>
      {/* 👉 Conditional Rendering */}
      <h3 style={{ display: props.setup ? 'block' : 'none' }}>
        Setup: {props.setup}
      </h3>

      {/* Only render h3 element if props.setup is truthy */}
      {props.setup && <h3>Setup: {props.setup}</h3>}

      <p>Punchline: {props.punchline}</p>

      <p>Punchline: {`../images/${props.img}`} </p>
      <hr />
    </div>
  );
}
