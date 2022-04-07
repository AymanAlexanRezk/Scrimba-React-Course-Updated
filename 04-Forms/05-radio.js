/*
    ? Radio Buttons:
    > In React, radio buttons are a combination of checkboxes and text inputs.
    1️⃣ Add a piece of state to hold information, employment: ""
    - Radio buttons similar to inputs will have some kind of text value to them.
    - When the user clicks one of these options, its value is set in our state.
    2️⃣ Add a name property to each one of these inputs, name="employment". that should match the property that we are saving in state.
    - This will associate inputs with the correct piece of state and,
    - Allows only one option to be clicked.
    > Giving the same name to all of radio buttons:
    - In HTML, thats the way that we make it so that only one of these radio buttons can be selected at any given time.
    - Intuitively make sense because we're only updating one property of employment based on which one is selected.
    > Each one of these inputs will have its own unique value which will get saved as the value in state when a specific input is selected.
    3️⃣ Listen for change events, onChange={handleChange}
    - Using the same handleChange function.
    4️⃣ Controlling radio buttons:
    - Radio buttons are different than checkboxes, value={formData.}
    - Because we need to specify what value the state should take on if the radio button is selected or checked.
    - That means we can't do controlled components in the same way that we did with other inputs by setting the value to whatever the current value of state is.
    - That doesn't mean we can't control these components.
    > Radio buttons are controlled in the same way that checkboxes are controlled.
    - checked = {formData.employment} //// Bug (This is where radio buttons differ).
    - There will be no matching for selection, checked and the state.
    - When we are controlling the check property, we don't simply say checked={formData.employment} because unlike a checkbox, this isn't a boolean value.
    - But we can make it a boolean value by checking if the formData.employment === "unemployed" which is the value of the specific checked box.
    👉 Now, React is in charge of controlling this input rather than the input having its own HTML state.
    > Walk-through:
    - Initially, the value of formData.employment is an empty string.
    - Clicking unemployed, It runs the onChange() for handleChange which setFormData name=> value defined in our specific input element.
    - Then when we change state, React re-render the form, checks to see if the current formData.employment === "unemployed".
    - The chosen input will have a truthy boolean value.
    - Only one of these can be  selected at any given time.
*/

import React from 'react';

export default function Form() {
  const [formData, setFormData] = React.useState({
    employment: '',
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

  return (
    <form>
      <fieldset>
        <legend>Current employment status</legend>
        <input
          type="radio"
          id="unemployed"
          name="employment"
          value="unemployed"
          // checked={formData.employment} //// Bug
          checked={formData.employment === 'unemployed'}
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />

        <input
          type="radio"
          id="part-time"
          name="employment"
          value="part-time"
          checked={formData.employment === 'part-time'}
          onChange={handleChange}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />

        <input
          type="radio"
          id="full-time"
          name="employment"
          value="full-time"
          checked={formData.employment === 'full-time'}
          onChange={handleChange}
        />
        <label htmlFor="full-time">Full-time</label>
        <br />
      </fieldset>
    </form>
  );
}
