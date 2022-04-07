import React from 'react';
import boxes from './boxes';
import Box from './Box';
/*
    ? Passing data to components:
    - Understanding the way data flows in React helps in architecturing our app in a way that we can share state amongst only the component/s that need it.

    * Raise the state UP:
    > So that two sibling components will have access to a state that's declared in their parent component.
    - If our state ends up raising up multiple levels above the component that needs it, React does offer the Context as a solution or we can use Redux.
    - It wouldn't be a great idea to initialize state on top of your components if we don't have components along the entire tree that needs it.
    ! Keep state as local as you can.

    ? Local state:
    > Initialize a new state in each child component and set its initial value to the incoming prop.
    - This allows each child component to update its own state.

    * Derived state:
    🔗 https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
    > Structure the app so that state is only held in the App component.
    - Creating state in child component and initializing that state based on the incoming props might make sense; However general consensus is that there is a better way to do this.
    > Derived state [multiple sources of truth!]:
    - When the Box has the ability to update its own state, it wasn't updating the state on the App component; It was only updating its local state that has derived based on the incoming props.
*/
function App() {
  const [squares, setSquares] = React.useState(boxes);

  const squareElements = squares.map((square) => (
    <Box key={square.id} on={square.on} />
  ));

  return <main>{squareElements}</main>;
}

////  @Box.js
export default function Box(props) {
  const [on, setOn] = React.useState(props.on);

  const styles = {
    backgroundColor: on ? '#222222' : 'transparent',
  };

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  return <div style={styles} className="box" onClick={toggle}></div>;
}
