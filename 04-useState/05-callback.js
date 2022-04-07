/*
    ? Changing state with a callback function:
    > Receiving an event: onClick={() => setCount()}.
    - What is provided to setCount() is going to be the new version of state.
    - Our state setter function can either receive a replacement version of state OR a function that will receive the previous version of state to return a new state.
    onClick={() => setCount(prevCount => prevCount + 1)}

    function increment() {
        setCount(prevCount => prevCount + 1)
    }
  
    onClick={increment}
    > If you ever need the old value of state to help you determine the new value of state:
    - You should pass a callback function to your state setter function instead of using state directly.
    👉 This callback function will receive the old value of state as its parameter, which you can then use to determine [return] your new value of state.

    * What are the 2 options for what you can pass in to a state setter function (e.g. `setCount`).
    1️⃣ New value of state (setCount(42))
    2️⃣ Callback function - whatever the callback function returns === new value of state

    * When would you want to pass the first option to the state setter function?
    - Whenever you don't need the previous value of state to determine what the new value of state should be.

    * When would you want to pass the second option to the state setter function?
    - Whenever you DO need the previous value to determine the new value.
    - React will pass the old value as a parameter to the setter function.
    - Then we can use this old value as a reference to what count was at the time that this function is called.

    ! High level overview: why we need to pass a callback function to our setter function:
    > Under the hood, React is doing some relatively complex things to make sure that it can maintain state for us.
    - Ex: patching a punch of different state changes together.
    - If we were to run two state setter functions back-to-back, the way that React handles it may/mayn't run one of them before the other.

    !👌 Passing a callback function to our state setter function guarantee that the value that callback function receives is the most updated correct version of our state. 
*/

import React from 'react';

export default function App() {
  const [count, setCount] = React.useState(0);

  function add() {
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
  }

  function subtract() {
    // setCount(count - 1);
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="counter">
      <button className="counter--minus" onClick={subtract}>
        –
      </button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button className="counter--plus" onClick={add}>
        +
      </button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Add
      </button>
    </div>
  );
}
