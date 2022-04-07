/*
    ? Implementing checkbox:
    > checkbox holds a boolean value.
    - checked property that will be either true or false based on whether the user has checked it or not.
    > How to link the label with its specific input:
    1️⃣ Nest the input directly inside of the children of the labels.
    - If the label gets checked, it will automatically propagate that click down to the input.
    2️⃣ Keep the label as its own separate element.
    - Point that label using htmlFor attribute to the id of an input so that it can be associated with one another.
    > Maintain a checkbox form input in state:
    - Because it is a checkbox, we're not maintaining a string.
    - Add a piece of state, isFriendly: true
    - To associate our state with our checkbox, we are not going to use a value property,
    - Instead we are going to use a checked={} property and its value should be boolean.
    > But still we can't uncheck the box:
    😎 Our handleChange function is looking only at event.target.value WHILE a checkbox is do care for a checked property: event.target.checked
    👉 Instead of creating a completely separate handleChange function for our checkbox; 
    ➡️ We will modify our handleChange function.
    👌 Best practice is not to put the entire event.target.value in event.target.name inside of our setFormData().
    - A much better way is to destructure event.target and pull out the values we need.
    - When we are handling a checkbox, there is a few more things we need to pass in: type, checked.
    ! When we are setting our form data, setFormData(),
    - We want everything else to be the same,
    - However, the piece of state that we want to update if it is a checkbox (isFriendly) shouldn't take on value but rather should take on the value of checked.
    - So, a useCase of ternary operator appears here!
*/
import React from 'react';

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    isFriendly: true,
  });

  function handleChange(event) {
    // const { name, value } = event.target; //// Destructuring event.target
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        // [event.target.name]: event.target.value,
        // [name]: value
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

      <input
        type="checkbox"
        id="isFriendly"
        checked={formData.isFriendly}
        onChange={handleChange}
        name="isFriendly"
      />
      <label htmlFor="isFriendly">Are you friendly?</label>
      <br />
    </form>
  );
}
