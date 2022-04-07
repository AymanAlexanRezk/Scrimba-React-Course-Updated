/*
    ? Select & Options:
    > In regular HTML,
    - To grab the value of the selected option, we will look for a property called selected.
    > In React, select is similar to some of the other input elements.
    1️⃣ Add favColor: "" to the state.
    2️⃣ Add a value property on the select tag itself.
    - Similar to text inputs which will mere what we have in the state.
    - Its value will be formData.favColor
    3️⃣ Reuse the same onChange handler also on the select tag itself..
    - Make sure to add name="favColor" that mere our name to exactly equal to the property we're saving in the state.
    - Doing this is needed for handleChange to work correctly.
    > The state is initialized as an empty string for favColor.
    - We don't have an option that represents that empty string value.
    - Provide a new option with a value of an empty string,
    - <option value=""> --choose-- </option>
*/

import React from 'react';

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    favColor: '',
  });
  console.log(formData.favColor);

  function handleChange(event) {
    console.log(event);
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
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
      <br />

      <label htmlFor="favColor">What is your favorite color?</label>
      <br />
      <select
        id="favColor"
        value={formData.favColor}
        onChange={handleChange}
        name="favColor"
      >
        <option value="">-- Choose --</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select>
    </form>
  );
}
