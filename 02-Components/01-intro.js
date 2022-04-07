/*
    ? React Custom Components:
    > React adapted the concept of function which allows us to write and execute code over and over.
    - We can then have functions that once executed will return our UIs/elements.
    👌 A function that [returns React elements] is considered [in React] a component.

    * Conventions to follow for writing a correct React custom component:
    1️⃣ Use PascalCase instead of camelCase for naming your React custom components
    2️⃣ Wrap your React custom component in angle brackets instead of calling it as in regular JS.
    👌 It will look like an [self closing] HTML element.
    😎 This is how we call our React component, creating an instance of the component by rendering it.
▶️
*/
import React from 'react';
import ReactDOM from 'react-dom';

/*
function myFunc() {
  return (
    <div>
      <h1>React is wonderful!</h1>
      <ul>
        <li>Composable</li>
        <li>Declarative</li>
      </ul>
    </div>
  );
}

// This code will work!
ReactDOM.render(myFunc(), document.getElementById('root'));
*/

function myFunc() {
  return (
    <div>
      <h1>React is wonderful!</h1>
      <ul>
        <li>Composable</li>
        <li>Declarative</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<myFunc />, document.getElementById('root'));
