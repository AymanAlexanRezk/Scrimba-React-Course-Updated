/*
    ? Array .map():
    > It takes a regular data and turns it into JSX elements that can be displayed on the screen.
  
    > JSX returns a regular JS object.
    👉 The properties/shape of this object get determined by React in order to describe the element that React eventually will be turning into a real DOM node that shows up on the screen.

    > React renders arrays:
    👌 React's special feature:
    - If we provide an array into which we are rendering from a component, React will know how to essentially map over that array and turn it into element.
    - We can tell React if we want this array to be paragraphs, headers, lists, ..
    👉 React can render an array of JSX elements.

    ? Notes:
    > Loading images from .map():
    - Put your images folder @public folder.

    > Any time we use .map() on data to create JSX => KEY IS NEEDED.
    - Set the key to something unique for each item in the list.
    - Ex, key={item.id}, Data bases is creating that as a unique property for us.

    > What does the `.map()` array method do?
    - Returns a brand new array. Whatever gets returned from the callback function provided is placed at the same index in the new array.
    - Usually we take the items from the original array and modify them in some way.

    > What do we usually use `.map()` for in React?
    - Convert an array of raw data, usually array of objects, into an array of JSX elements that can be displayed on the page.

    > Why is using `.map()` better than just creating the components
    - Manually by typing them out? It makes our code more "self-sustaining" and dry.
    - Not requiring additional changes whenever the data changes.
    - Similar to using array.length in loops, to track any inserted data to the array so that we do loop over any new data automatically.
    - Mapping over our data, if the data ever changes, our page will automatically updates.
*/

//* Given an array of strings, return an array where the first letter of each string is capitalized
const names = ['alice', 'bob', 'charlie', 'danielle']; //* ["Alice", "Bob", ..]
const capitalized = names.map((name) => name[0].toUpperCase() + name.slice(1));
console.log(capitalized);

const pokemon = ['Bulbar', 'Charminger', 'Squirrel']; //* ["<p>Bulbar</p>", ..]
const paragraphs = pokemon.map((mon) => `<p>${mon}</p>`); //👁️ Regular JS `${}`
console.log(paragraphs);

//* React render arrays:
import React from 'react';

export default function App() {
  const strColors = [
    'Red',
    'Orange',
    'Yellow',
    'Green',
    'Blue',
    'Indigo',
    'Violet',
  ];

  const jsxColors = [
    <h3>Red</h3>,
    <h3>Orange</h3>,
    <h3>Yellow</h3>,
    <h3>Green</h3>,
    <h3>Blue</h3>,
    <h3>Indigo</h3>,
    <h3>Violet</h3>,
  ];

  return (
    <div>
      {strColors} //// RedOrangeYellowGreenBlueIndigoViolet
      {jsxColors}
    </div>
  );
}
