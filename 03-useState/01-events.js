/*
    ? Event Listeners:
    https://reactjs.org/docs/events.html#mouse-events

    > HTML:
    <button onclick="myFunction()">Click Me</button>

    > Plain JS[DOM manipulation]: onclick => onClick
    <button onClick="myFunction()">Click Me</button>
    .addEventListener('click', function(){})

    > React:
    <button onClick={handleClick}>Click me</button>
    - We are accessing the DOM properties of the [JSX element] object that's being created.
    - onClick is directly accessing the equivalent properties in JS.
*/

import React from 'react';

export default function App() {
  //* ✅Best Practice:
  function handleClick() {
    console.log('I was clicked!');
  }

  return (
    <div className="container">
      <img src="https://picsum.photos/640/360" />

      <button onClick={() => console.log('I was clicked!')}>Click me</button>
      {/* ❌ <button onClick={handleClick()}>Click me</button> */}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

////////////////////////////
const url = handleRandomImage(); //// You can put it <p>{url}</p>

function handleRandomImage() {
  const { memes } = memesData.data;
  return memes[Math.floor(Math.random() * memes.length + 1)].url;
}
