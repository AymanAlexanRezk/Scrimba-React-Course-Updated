/*
    ? Correct way:
    - Add dependencies: [npm i react && npm i react-dom] React & ReactDOM
    - Import React from 'react' and ReactDOM from 'react-dom'.
    !👌 React is what defines JSX, so we need to import React in order to write JSX syntax.

    * Challenge:
    > Find out what happens if we try to append JSX to our div#root using .append() instead of ReactDOM.render():
    - See if you can guess what will show up in the browser before running the code
    // [object Object] which is a string representation of the regular JS object returned by JSX.
    - See if you can explain what actually shows up in the browser.
    ! The plain JS object returned by JSX isn't recognized by the browser!
    👌 Only React takes these kinds of objects and turns them into real DOM elements that the browser can interpret.
*/

import React from 'react';
import ReactDOM from 'react-dom';

const html = document.getElementById('root');

const element = (
  <div>
    <h1>My Website</h1>
    <p> We are available</p>
  </div>
);

// html.append(element); //! [object Object]
// html.append(JSON.stringify(element)); //! Show it in details

ReactDOM.render(element, document.getElementById('root'));

//* React 18 😘
ReactDOM
    .createRoot(document.getElementById('root'))
    .render(element);
