/*
    ? useEffect() syntax and default behavior:
    > useEffect( callback, [dependencies array])
    1️⃣ The callback function: required parameter
    - A callback function [side effects code - fetch() request].
    > Difference:
    - The code inside this callback function is guaranteed to run only after React renders the UI.

    2️⃣ useEffect() dependencies array: optional parameter
    > Triggering renders and state changes:
    - Add button is to trigger a manual re-render.
    - Clicking the Add button => updates the state (count 0 -> 1)
    - console.log('Component rendered') will show on the console.
    - Skip down the useEffect() to render out the UI and display the correct count.
    - Lastly, our effect which runs after every render => console.log('Effect ran').
    - Dependencies array, the second parameter is almost always included.
    > This array that we pass as a second parameter to useEffect Will contain values that if they change from one render to the next will cause this effect to run:
    - It limits the number of times that this side effect will run or rather, Rather it determines when this effect will run instead of running after every single render.
    > Passing an empty array tells React "I want to run this function on the very 1st render of my component" But then there are no dependencies to watch and trigger this effect to run again.
    - So it ends up being it runs once when the component 1st loads.
    - In action, pass empty array and click Add button.
    - Refresh your app => Component rendered then Effect ran.
    - Adding to count will only then log Component rendered, and no longer running the effect.
    > If we want to run this effect everytime count changes:
    - We should make sure that your effect knows that count was one of the dependencies that signal to the effect to run again.
    - 1st render [count] => 0, 2nd render [count] => [1] //// [0] compared to [1] => effect run
    - If any item in this array is different, it knows to rerun this function.
    > Hard coding to [0]:
    - Every render it will be also [0], i.e. no change => Our effect will run only once.
    > Called dependency array:
    - useEffect() depends on these values to know whether or not it should rerun our effect.
*/
import React from 'react';

export default function App() {
  const [starWarsData, setStarWarsData] = React.useState({});
  const [count, setCount] = React.useState(1);

  console.log('Component rendered');
  /*
  > Still we have infinite loop, we still need to provide a second parameter.
  React.useEffect(function () {
    fetch('https://swapi.dev/api/people/1')
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  });
*/
  React.useEffect(
    function () {
      // console.log('Effect ran');
      fetch(`https://swapi.dev/api/people/${count}`)
        .then((res) => res.json())
        // .then((data) => console.log(data));
        .then((data) => setStarWarsData(data));
    },
    [count] //// Empty array will only fetch the URL that ends with /people/1
  );

  function handleCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <h2>The count is {count}</h2>
      <button onClick={handleCount}>Get Next Character</button>
    </div>
  );
}
