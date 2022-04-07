/*
    ? Array .map():
    > It takes a regular data and turns it into JSX elements that can be rendered on the screen.
    > What do we usually use `.map()` for in React?
    - Convert an array of raw data, usually array of objects, into an array of JSX elements that can be displayed on the page.
    > Why is using `.map()` better than just creating the components
    - Mapping over our data, if the data ever changes, our page will automatically updates.

    ? Mapping Components:
    > Instead of hard coding our data directly into our components,..
    - We can get data from outside, map over it and render a new component for each piece of data.
*/

import React from 'react';
import Card from './Card';

const data = [
  { name: 'Ayman', id: 1 },
  { name: 'Robert', id: 2 },
  { name: 'John', id: 3 },
];

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} id={item.id} name={item.name} />;
  });

  return <>{cards}</>;
}

import React from 'react';

export default function Card(props) {
  return (
    <div>
      <h2>Family Names: </h2>
      <p>{props.name}</p>
    </div>
  );
}
