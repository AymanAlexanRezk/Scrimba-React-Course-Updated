import React from 'react';
import boxes from './boxes';
/*
    ? Style JS objects in React:
    > style={{ backgroundColor: backgroundColor }}
    - The 1st curly braces doesn't represent an object.
    - It allows us to put JavaScript inside of JSX.
    - Since we need to represent our style as an object, we're going to put a second set of curly braces.
    - This inner set of curly brace represents a JavaScript.
    - We can define our JavaScript object outside the JSX markup in a separate JS variable.
    > camelCased style objects:
    - background-color isn't valid key name in JavaScript object
*/
export default function App(props) {
  const [squares, setSquares] = React.useState(boxes);

  const backgroundColor = props.darkMode ? '#222222' : '#cccccc';

  const styles = {
    // backgroundColor: props.darkMode ? '#222222' : '#cccccc',
    backgroundColor: backgroundColor,
  };

  const squareElements = squares.map((square) => (
    <div>
      <div
        style={{ backgroundColor: '#cccccc' }}
        className="box"
        key={square.id}
      ></div>
      <div
        style={{ backgroundColor: backgroundColor }}
        className="box"
        key={square.id}
      ></div>
      <div style={styles} className="box" key={square.id}></div>
    </div>
  ));
  return <main>{squareElements}</main>;
}
