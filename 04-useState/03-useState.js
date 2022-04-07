/*
    ? React Hooks:
    > Hook into state and lifecycle methods of components without using classes.
    - React.useState() //// A method as a part of 'react' library, used to declare some state.
    - useState() will allow us to hook into the component so that React can automatically update the UI by displaying what has changed.

    > Prematurely optimizing React apps can ends up costing more than what we gain:
    - useMemo and useCallback can provide some optimization to React.
    - React already is very fast, so build your app without worrying about these optimization and then reach for them as tools in case you find that you're suffering a performance issues.

    * Old scenario:
    - Use functional components first, and use class components if you need to access state or lifecycle methods.
    - Now, we don't need class components for state or almost all of the lifecycle methods.
    - Instead, we can use functional components across the board.

    * Adv. of React Hooks:
    - Improves the readability and organization of components.
    - Ability to create custom hooks to reuse code across our app.

    * useState() => [initial value of state, f()]:
    - Our state can be simple primitive or ... (Not only an object).
    - Using array destructuring, we can store our initial state value in a custom named variable.
    - Array destructuring opposed to object destructuring, don't know what we're going to call items in useState(). [they don't know what kind of state].
    - In case of object destructuring, we have to use the property names of the object.
*/

import React, { useState } from 'react'; //// Destructure the React.useState()

function App() {
  // const answer = useState();  //// Takes a default value for the state variable.
  // console.log(answer); //* [null, ƒ()]

  // const answer = useState('Yes');
  // console.log(answer); //* ["Yes", ƒ()]

  //* Using array destructuring to avoid dealing with index.
  const [answer] = useState('Yes');

  return (
    <div>
      <h1>Is state important to know? Yes</h1>
      {/* <h3>Is state important to know? {answer[0]}</h3> */}
      <h3>Is state important to know? {answer}</h3>
    </div>
  );
}

export default App;
