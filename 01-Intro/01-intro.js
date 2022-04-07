/*
    ? Building static React (Easy way):
    - CDNs development files at index.html <head>, then Babel(In browser Babel transpiler).
    ! By pulling react-dom library, we have access to the global variable ReactDOM.
    - ReactDOM is case sensitive: the last three letters 'DOM' are uppercase.
    ! Utilizing Babel in writing JSX directly in our index.js file through type="text/babel"
    - ReactDOM.render(what, where) used to render something to the screen.
    > Online Playground: 🔗 https://codesandbox.io/s/new

    ? JSX: "JavaScript XML" - [object-nature of React elements]
    > It provide a declarative approach for the regular vanilla JavaScript code.
    - React utilize these plain JS objects returned by JSX to create actual elements.

    ? Single parent element:
    > In JSX, we need to make sure that we are only returning a single parent element.
    - Make sure your sibling elements have a parent wrapper: div, nav, main, footer, ...
*/

//👁️ The difference between JSX and regular dom elements:
//// Imperative regular dom elements:
const h1 = document.createElement('h1');
h1.textContent = 'Hello world';
h1.className = 'header';
console.log(h1); //// DOM element <h1 class="header">

//// What React is [Declaratively] creating with JSX: Regular JS object
const element = <h1 className="header">This is JSX</h1>;
console.log(element);

const plainJsObj = {
  type: 'h1',
  key: null,
  ref: null,
  props: {
    className: 'header',
    children: 'This is JSX',
  },
  _owner: null,
  _store: {},
};

ReactDOM.render(element, document.getElementById('root'));
