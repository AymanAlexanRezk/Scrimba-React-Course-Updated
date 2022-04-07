/*
    ? Passing state as props:
    - Any time React creates an instance of App component @index.js <App />, it will run App() function.
    - Whenever state changes, it will re-render the component where the state exists and any child component that may rely on state to be working correctly.
    - Changing state from 0 to 1 => App component re-render, passing the new updated state [count] value to its children component which will re-render and show that updated [count] value.
    - Very quickly update what we see on the screen just by rendering those components.
*/

import React from 'react';
import Count from './Count';

export default function App() {
  const [count, setCount] = React.useState(0);

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function subtract() {
    setCount((prevCount) => prevCount - 1);
  }

  console.log('App component rendered');

  return (
    <div className="counter">
      <button className="counter--minus" onClick={subtract}>
        –
      </button>
      <Count number={count} />
      <button className="counter--plus" onClick={add}>
        +
      </button>
    </div>
  );
}

/* //// Count.js
import React from 'react';

export default function Count(props) {
  console.log('Count component rendered');

  return (
    <div className="counter--count">
      <h1>{props.number}</h1>
    </div>
  );
}
*/
