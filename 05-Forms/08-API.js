/*
    ? Making API calls:
    > Interacting with an API that lives outside of our app is a very common thing we need to do in React.
    * Requesting information from an API:
    > Get data: fetch() or Axios
    > Save it to state

    * Infinite Loop:
    - fetch() lives on the top level of our component, so any time the component renders, it is going to call fetch() which in turns setStarWarsData which is updating our state causing React to re-render the component, running fetch() again ...
*/

import React from 'react';

export default function App() {
  const [starWarsData, setStarWarsData] = React.useState({});

  //! console.log("Component rendered") //// Infinite loop

  // 1. GET the data (fetch)
  // 2. Save the data to state

  fetch('https://swapi.dev/api/people/1')
    .then((res) => res.json())
    // .then((data) => setStarWarsData(data)); //// Infinite loop in the background
    .then((data) => console.log(data));

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}
