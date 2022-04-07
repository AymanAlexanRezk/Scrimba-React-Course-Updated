/*
    ? Props:
    - Refers to the properties being passed into a component in order for it to work correctly, similar to how a function receives parameters: "from above".
    - A component receiving props is not allowed to modify those props.
    👌 Props are "immutable".

    ? State:
    - Refers to values that are managed by the component, similar to variables declared inside a function.
    - Any time you have changing values that should be saved/displayed, you will likely be using state.

    * How we can update a variable that will then replace what we have on the screen:
    - React is declarative, we update data and React will automatically reacts to the change and update the UI to display what has changed.
    - React state allows us to hook into the component ad update the UI based on any changes that happen to data saved in state.
    - Keep in mind that React doesn't watch for local variable changes.

    * How would you describe the concept of "state"?
    > Values that a component can maintain between render cycles.
    - A way for React to remember saved values from within a component.
    - This is similar to declaring variables from within a component, with a few added bonuses (which we'll get to later).

    * When would you want to use props instead of state?
    - Anytime you want to pass data into a component so that component can determine what will get displayed on the screen.

    * When would you want to use state instead of props?
    - State is kind of like when inside the body of the function you declare new variable to be used to help accomplish some tasks inside of the function.
    - Anytime you want a component to maintain some values from within the component. (And "remember" those values even when React re-renders the component).

    * What does "immutable" mean? Are props immutable? Is state immutable?
    - Unchanging. Props are immutable. State is mutable.
    - We shouldn't change props. [props aren't literally immutable]

    * Props like code:
    function addTwoNumbers(a, b) {
        a = 42 //// Not good
        return a + b
    }

    console.log(addTwoNumbers(1, 2))

    // Component itself:
    function Navbar(props) {
        props.coverImage = "something else" //// Not good
    }

    // We can change the passed value 
    <Navbar coverImage="some-image2" />
*/

import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [things, setThings] = React.useState(['Thing 1', 'Thing 2']);

  function addItem() {
    const newThingText = `Thing ${things.length + 1}`;
    setThings((prevState) => [...prevState, newThingText]);
  }

  const thingsElements = things.map((thing) => <p key={thing}>{thing}</p>);

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
