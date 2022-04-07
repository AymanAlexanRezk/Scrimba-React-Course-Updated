import React from 'react';
import boxes from './boxes';
/*
    ? Unified state:
    * Better practice than using derived state:
    > Instead of putting state and a setter inside of each of our boxes,
    - We're going to make use of the state that already exists in App component.
    - Create a function called toggle inside of App component and pass it down to each box instances.
    - Anytime one of the box components gets clicked, it will run this toggle function telling the App component to change state.
    - React will re-render the App component and all boxes component.
    > Our toggle function in App component should know which box ran its code,
    - We need to figure out which of the items in the array triggered that.
    - Our goal is to give the toggle function the ability to know which box was clicked.
    > We can pass id parameter to our toggle function in the App component,
    - We can add this id as a custom property to our props object received by box component.
    - Then, in our box component, instead of just blindly running props.toggle, we can run our own function which then runs props.toggle()
      {(event) => props.toggle(props.id)}
    - Now, we can use this approach to update the correct square in our setSquares() function.
    > .map() returns a new array without modifying the original one.
    - Every time we click on one of our squares, it is running the click event handler defined in Box component which is running the toggle function that is received through props taking prop.id as its parameter.
    - That toggle function takes that id to run setsquare to determine what the new square should looks like.
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
      <Box key={square.id} id={square.id} on={square.on} toggle={toggle} />
    </div>
  ));

  return <main>{squareElements}</main>;
}

//* @Box.js:
export default function Box(props) {
  const styles = {
    backgroundColor: props.on ? '#222222' : 'transparent',
  };

  return <div style={styles} className="box" onClick={props.toggle}></div>;
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
