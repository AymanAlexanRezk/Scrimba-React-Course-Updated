import React, { useState, useEffect } from 'react';
import randomcolor from 'randomcolor'; //// A function that returns a hex value
/*
    > Infinite loop:
    - Each time our component renders, it is calling useEffect function that is setting the state of the color which in turns is causing a re-rendEr .. useEFFECT .. RE-RENDER ..
    > In componentDidUpdate:
    - We have the option to grab the previous state/props and compare them to the current state/props in order to manually decide if something should run.
    - useEffect has a very easy way to determine whether or not this effect should apply.
*/
function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('');
  // const [color, setColor] = useState(randomcolor())

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  useEffect(() => {
    // setColor(randomcolor()) //// Infinite loop (The color is always changing)
    setColor(randomcolor());
    // Looking for changes in count variables to run the effect.
  }, [count]);

  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
