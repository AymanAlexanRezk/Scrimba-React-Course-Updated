/*
    ? Submit:
    > In HTML5, a button inside of a form element has a type="submit" by default.
    - Clicking this button will trigger the form's onSubmit={handleSubmit} event handler.
    - Our formData is already updated and ready to be submitted.
    - In vanilla JS, clicking that submit button will refresh the page, put all form values as a part of a query string in the URL.
    - In React, take that event object that will get passed to handleSubmit(event) event handler and run event.preventDefault().
    - preventDefault won't refresh our page or re-render our app with all of our default values that was defined in the state. also our state object won't go in the URL.
*/

import React from 'react';

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    isFriendly: true,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // submitToApi(formData)
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <input
        type="checkbox"
        id="isFriendly"
        checked={formData.isFriendly}
        onChange={handleChange}
        name="isFriendly"
      />
      <label htmlFor="isFriendly">Are you friendly?</label>
      <br />
      <br />

      <button>Submit</button>
    </form>
  );
}
