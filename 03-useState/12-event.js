/*
    ? Setting state from child component:
    > How could we give a child component the ability to make changes to the state that lives in its parent component.

    ! Custom component has custom properties:
    <Star isFilled={} onClick={} />   //// Not working
    - onClick doesn't magically register it as an event listener.
    - The onClick attribute needs to exist on native DOM element that begins with lower case letters, because these are what will actually get created into real DOM element by React.
    - However, Star with capital S isn't a real DOM element.
    - Instead, what's happening is React is looking at the Star component to render its image which has the ability to receive an onClick listener.
    - What we could do is still pass onClick, realizing that onClick is just a custom prop that happens to be called the same name as the event listener.
    - In fact, often times this onClick will be changed to handleClick just to make it obvious that it is not a native event listener.
    - And then, in our Star component, we can add a real onClick event listener that takes a value of the function that comes from props.handleClick
    - In this case, App component is passing toggleFavorite function to the child <Star /> component allowing it to run it whenever a certain event like the click event happens.
    - Its important that the context in which toggleFavorite function exists is still in the parent component, which means that it can change the state that lives inside the parent.
    - A function that can change state should be at the component that have this piece of state, then we can pass this function to a child component as props.
    1️⃣ Creating a toggleFavorite function,
    2️⃣ Passing it to a custom component in a custom prop called handleClick,
    3️⃣ Receiving it in the child component registering a real event listener onClick whose functional value is the function that we receive through props.handleClick.

    > Passing state setter function down to children components is crucial in React.
    - That's due to the fact that the way that React's hierarchy is setup when it passes data.
*/

import React from 'react';
import Star from './Star';

function App() {
  const [contact, setContact] = React.useState({
    firstName: 'John',
    lastName: 'Doe',
    phone: '+1 (719) 555-1212',
    email: 'itsmyrealname@example.com',
    isFavorite: true,
  });

  function toggleFavorite() {
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite,
    }));
  }

  return (
    <main>
      <article className="card">
        <img src="./images/user.png" className="card--image" />
        <div className="card--info">
          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}

export default function Star(props) {
  const starIcon = props.isFilled ? 'star-filled.png' : 'star-empty.png';
  return (
    <img
      src={`../images/${starIcon}`}
      className="card--favorite"
      onClick={props.handleClick}
    />
  );
}
