/*
    ? React Fragment:
    - In React, the components we create can only return a single parent element.
    - We couldn't return two sibling elements, instead we need to warp them in a parent element.
    > Instead of polluting the DOM tree with a punch of extra div(s) to satisfy the requirements that React has to return a single element;
    - Fragment helps us wrap our returned elements in something that doesn't end up creating a new node in the DOM tree.
    - Fragment changes the parent-child relationships between these components resulting in a punch of sibling components.
    - [Not suitable for flexbox, grids, CSS relative positioning where parent-child relationships is important to maintain]
    ---------------------------------------------------------
    <></> shorthand doesn't need import {Fragment} from React
*/

import React from 'react';
// import React, { Fragment } from 'react';
import Child from './Child';

function App() {
  return (
    <React.Fragment>
      <Child />
    </React.Fragment>
  );
}

export default App;
