/*
    ? Pass an object as props:
    👉 data={object} [Then you can destruct props: let {data} = props] 👉 props.data. => data.
    - We don't have to add a new prop/s to our component everytime we want some data from it.
    - Instead of passing each of these props of our data down individually, we give that component the entire object received from the outside.

    > Instead of hard coding our data directly into our components,..
    - We can get data from outside, map over it and render a new component for each piece of data.
*/

import React from 'react';
import Card from './components/Card';
import data from './data';

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div>
      <section className="cards-list">{cards}</section>
    </div>
  );
}

import React from 'react';

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.item.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`../images/${props.item.coverImg}`} className="card--image" />
      <div className="card--stats">
        <img src="../images/star.png" className="card--star" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  );
}
