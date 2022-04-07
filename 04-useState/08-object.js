import React from 'react';
/*
    > Using object inside React.useState() VS this.setState()
    - In class based React, this.setState() automatically figure out how to combine old object with the new property that we're trying to replace with.
    - React.useState() is no longer does this, we need to make sure that our setter function did the combination of the previous state together with the small change using object spread notation.
    > Having different parts of state that aren't connected:
    - Instead of trying to match all of them together into an object, we can create multiple versions of state by using another useState() for these different parts.
    - So, no need for using spread or Object.assign() to make sure that our entire state object is kept intact.
*/
export default function App() {
  const [contact, setContact] = React.useState({
    firstName: 'John',
    lastName: 'Doe',
    phone: '+1 (719) 555-1212',
    email: 'itsmyrealname@example.com',
    isFavorite: true,
  });

  let starIcon = contact.isFavorite ? 'star-filled.png' : 'star-empty.png';

  function toggleFavorite() {
    setContact((prevContact) => {
      return {
        ...prevContact, //// All properties
        isFavorite: !prevContact.isFavorite, //// Overriding isFavorite
      };
    });

    //! Implicit return of object: wrap your object in parenthesis
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
          <img
            src={`../images/${starIcon}`}
            className="card--favorite"
            onClick={toggleFavorite}
          />

          {/* Or */}
          <img
            src={`../images/${
              contact.isFavorite ? 'star-filled.png' : 'star-empty.png'
            }`}
            className="card--favorite"
            onClick={toggleFavorite}
          />
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
