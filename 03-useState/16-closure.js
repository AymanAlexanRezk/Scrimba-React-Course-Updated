import React from 'react';
import boxes from './boxes';

/* 
    > Passing square.id immediately instead of id;
    - This creates a closure where each instance of our Box will have its own toggle property and it will remember its own id.
*/

function App() {
  const [squares, setSquares] = React.useState(boxes);

  function toggle(id) {
    setSquares((prevSquares) => {
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  const squareElements = squares.map((square) => (
    <div>
      {/* <Box key={square.id} id={square.id} on={square.on} toggle={toggle} /> */}
      <Box key={square.id} on={square.on} toggle={() => toggle(square.id)} />
    </div>
  ));

  return <main>{squareElements}</main>;
}

//* @Box.js:
export default function Box(props) {
  const styles = {
    backgroundColor: props.on ? '#222222' : 'transparent',
  };

  return (
    <div
      style={styles}
      className="box"
      onClick={props.toggle} //// Closure
      // onClick={() => props.toggle(props.id)}
    ></div>
  );
}

//* Primitive approach:
setSquares((prevSquares) => {
  const newSquares = [];
  for (let i = 0; i < prevSquares.length; i++) {
    const currentSquare = prevSquares[i];
    if (currentSquare.id === id) {
      const updatedSquare = {
        ...currentSquare,
        on: !currentSquare.on,
      };
      newSquares.push(updatedSquare);
    } else {
      newSquares.push(currentSquare);
    }
  }
  return newSquares;
});
