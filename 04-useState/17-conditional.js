import React from 'react';
/*
    * What is "conditional rendering"?
    > A way to determine whether or not something should get displayed OR what among many choices should get displayed.
    - When we want to only sometimes display something on the page based on a condition of some sort

    * When would you use &&?
    > When you want to either display something or NOT display it.
    - What we put before the && operator is the condition.
    - If that condition is true/truthy, then the JSX element on the right side is displayed.

    * When would you use a ternary?
    > When you need to choose between one of 2 options to display. [Concise: display or not]

    * What if you need to decide between > 2 options on what to display? [Complex Conditions]
    > Use an `if...else if... else` conditional or a `switch` statement

    ! The && and ternary operator can happen directly inline inside of the return of elements of our function ... JS Expressions
    ! if, else if, else .. switch-case: have to happen outside of the return of the function.
*/

export default function Joke(props) {
  //* Create a piece of state to conditionally rendering some UI.
  const [isShown, setIsShown] = React.useState(false);
  const [messages] = React.useState(['a', 'b']);

  function toggleShown() {
    //* Click the button => state change => React will re-render the whole component.
    setIsShown((prevShown) => !prevShown);
  }
  return (
    <div>
      {/* Only show a paragraph if props.setup is truthy; skip if not*/}
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <p>{props.punchline}</p>}
      <button onClick={toggleShown}>Show Punchline</button>
      {/* Show OR Hide based using ternary: */}
      <button onClick={toggleShown}>
        {isShown ? 'Hide' : 'Show'} Punchline
      </button>
      <hr />
      <p>
        {messages.length && (
          <h1>You have {messages.length} unread messages!</h1>
        )}
      </p>

      {messages.length === 0 ? (
        <h1>You're all caught up!</h1>
      ) : (
        <h1>
          You have {messages.length} unread
          {messages.length > 1 ? 'messages' : 'message'}
        </h1>
      )}
    </div>
  );
}
