import React from 'react';
/*
  ! A common misconception that React beginners tend to fall into:
  > ++stateVar OR stateVar++.
  👉 In the philosophy of React, this is strictly forbidden because we never modify state directly.
  - count++ => count = count + 1
  - The entire reason we have setCount() function is to simply provide a new updated value.
  - This setCount() that we can run, and whatever value we provide is going to be the newer version of state.

  * Running the function immediately after generating state won't work:
  - setCount(count + 1); //// We can't simply do[change] state, Instead 👇
  > We are given a function that allows us to make these changes so that React can handle those changes accordingly.
  - Takes a value as a new version of the state [when something specific happen on the page].

*/
export default function App() {
  const [count, setCount] = React.useState(0); //// state, setState naming convention.

  function handleCountUp() {
    // console.log('Counting Up');
    // setCount(++count); //! Not working => count variable is constant.
    setCount(count + 1); //! Not following best practices
  }

  function handleCountDown() {
    // console.log('Counting Down');
    // setCount(--count); //// We shouldn't change state directly.
    setCount(count - 1); //! Not following best practices
  }

  return (
    <div className="counter">
      <button className="counter--minus" onClick={handleCountDown}>
        –
      </button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button className="counter--plus" onClick={handleCountUp}>
        +
      </button>
    </div>
  );
}

