/*
    ? Mapping Components:
    > Instead of hard coding our data directly into our components,..
    - We can get data from outside, map over it and render a new component for each piece of data.
*/

{
  colors.map((color) => <h3 key={color}>{color}</h3>);
}

import React from 'react';
import Card from './components/Card';
// data(Array of objects): export default [{setup: "", punchline:""}, {}]
import data from './data';

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    );
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
  if (props.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.location === 'Online') {
    badgeText = 'ONLINE';
  }

  return (
    <div className="card">
      {/* Conditional Rendering */}
      {/*  {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>} */}
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`../images/${props.img}`} className="card--image" />
      <div className="card--stats">
        <img src="../images/star.png" className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
