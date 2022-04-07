/*
  ? React Forms | state object
  * Combining state into an object:
  > Having multiple pieces of state/handleChange function:
  - Not recommended, instead we combine these multiple pieces of state into an object.  
  - Use event parameters that we are receiving in our event handlers to determine which property of that state object we should be updating, Ex: event.target.name
  👌 Receive one setter function to update the correct piece of state in the object.

  > Giving each input a name property:
  - In React, this name property will have a special rule.
  - Make the name property so that it matches exactly the property name in the state object.
  - This allows to have access to event.target.name

  > ES6 computed properties:
  - Surround a dynamic string to use it as a property name for an object.
*/
import React from 'react';

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
      />
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
      />
    </form>
  );
}
