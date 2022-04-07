/*
  ? React Forms | Intro
  * Instead of waiting until the very end of the process and filling up the form, when the form is submitted and then gathering the data..
  > In React, we create a state and every key-stroke change or check-box/radio-button change..
  - We update state and therefor we are watching these inputs on every key-stroke/change that is made to our form.
  - Then when the time to submit comes, there is no more work to be done as all data are gathered, then we simply submit to API and passing the state that we have been tracking all along.

  * Maintaining up-to-date state for every change that happens in any form input:
  >(1) We need some state to hold the current data that is typed into our input.
  >(2) Listen for any changes that happens to this input.

  * Browser's event object:
  - Away from the parameter that we can receive as a part of our event listener function;
  - Event object is what will gets passed by the browser which has a lot of beneficial properties.
  ▶ {(event) => handleChange(parameter)}

  > event.target:
  - The HTML element that triggered this event, 
  - <input type="text" placeholder="First Name" />
  - It looks like HTML, but in reality it is just the DOM object that triggered this event.
  - That DOM object has properties that we care a lot about, EX: value
*/
import React from 'react';

export default function Form() {
  const [firstName, setFirstName] = React.useState('');
  console.log(firstName);

  function handleChange(event) {
    // console.log(event);
    // console.log(event.target);
    setFirstName(event.target.value);
  }

  return (
    <form>
      <input type="text" placeholder="First Name" onChange={handleChange} />
    </form>
  );
}
