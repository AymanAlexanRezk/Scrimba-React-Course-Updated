/*
    ? Controlled Components:
    - React might sometimes complains about having uncontrolled components.
    > When we are talking about maintaining state inside of a component, there is a common concept called the single source of truth.
    - The idea is that the state that you are maintaining in your component should be the single source of truth.
    - In uncontrolled forms, we have a similar concept, each of these inputs is holding its own state.
    - Two pieces of state:
    1️⃣ A state being held by the input box just in regular HTML.
    2️⃣ A state that is updating in every key-stroke held in our React code.

    - A good practice in React is to make it so that your React state is what derives the state that is visible inside each input box.
    👌 Simply, add a value property to each one of our form inputs and set its value to be the property name that hold this piece of data in our state object.
    👉 Visually, There is no difference.
    👉 Conceptually, the typed value inside the form input is no longer controlled by the input; but rather by React!
    
    👌 Every change we make will run the handleChange function,
    - Which then updates the correct piece of state,
    - Which cause React to re-render the form and set the value of its form input to be whatever state is.

    * textarea:
    > React made textarea to be much more similar to a text-based input.
    - It is also a self-closing element.
    - textarea doesn't need to have a type attribute because it is a sort of its own type.
*/
import React from 'react';

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
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
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <textarea
        value={formData.comments}
        placeholder="Comments"
        onChange={handleChange}
        name="comments"
      />
    </form>
  );
}
