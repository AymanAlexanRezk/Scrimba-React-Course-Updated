/*
    > They don't require any kind of clean up.
    - Changing the color of a part of the component, setting a new state, .. all are automatically cleaned up when this component unmounts.
    - Because it was a logic dealing with the component itself.
    > Some side effect won't be cleaned automatically:
    - Ex: creating a manual event listener [document.addEvenListener()] and using some kind of socket subscription.
    - These examples are outside the scope of this component. => //! A memory leak
*/

import React, { useState, useEffect } from 'react';
import randomcolor from 'randomcolor';

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setColor(randomcolor());
  }, [count]);

  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
    </div>
  );
}

export default App;
