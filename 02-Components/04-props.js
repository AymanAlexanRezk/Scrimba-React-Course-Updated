/*
    ? Props:
    * What do props help us accomplish?
    > Make our component more reusable, keeping our code as dry as possible.
    - Just like parameters being passed into a function, props being passed into a component help us make that component more reusable.
    - When we pass props into a component, it could be:
    1) Data that get displayed as a part of that component.
    2) Metadata to configure to act a certain way.

    > How do you pass a prop into a component?
    <Navbar title=".." />

    > How do I receive props in a component?
    function Navbar(props) {
        console.log(props.title)
        return (
            <header>
                ...
            </header>
        )
    }

    > What data type is `props` when the component receives it?
    - An object!

    * Passing in non-string props:
    - The concept of props is very similar to the concept of attributes in HTML.
    - With HTML, we always pass in a string as a data type.
    - However, we're not limited by that in React, because this is JavaScript, we can pass any JavaScript data type to our components as props.

    > We can jump back and fourth between JS and JSX by using curly braces,
    - The same thing works with our props.

    >  Making use of ES6 template string syntax in JSX => {`${}`}
    - Backticks alone doesn't make sense in JSX, we must surround them with a JS curly braces so that we can evaluate this JS expression.
    ! JS -> return (
      -> JSX ->{JS} -> JSX
    )
*/

<Joke
  punchline="This is a punchline"
  isPun={true}
  upVotes={10}
  downVotes={2}
  comments={[{ author: '', body: '', title: '' }]}
/>;

function App() {
  //* Separating the logic
  const date = new Date();
  const hours = date.getHours() % 12;
  // return <h1>It is currently about {new Date().getHours() % 12} o'clock!</h1>;
  return <h1>It is currently about {hours} o'clock!</h1>;
}
