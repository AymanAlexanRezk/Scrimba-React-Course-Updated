/*
    ? The useEffect cleanup:
    > Unmounting the WindowTracker component doesn't automatically remove that event listener.
    - We need to cleanup the effect that we have created in our useEffect.
    - We have a function as a first parameter to useEffect, but currently we aren't returning anything from it.
    - When React runs our useEffect function, it will receive/return another function that it can use to cleanup any side effect that we might have created.
    - In reality, it has no idea what the side effects are that we created, so what we put in the body of our cleanup function should be something that we write to cleanup our own side effects.
    - We use removeEventListener method in which we need to pass the exact same function that we provided when we added it.
    - So, move it outside the event listener.
    > Walk-through:
    - Our App component is deciding when the WindowTracker should be rendered.
    - As soon as we toggle on it, it renders to the screen and sets the window width state based on the current window.innerWidth at the instance that this component gets rendered.
    - useEffect will only run after the DOM has been painted, It will register our useEffect which has no dependencies.
    - It register our event listener on the resize event of the window.
    - Any time we resize, it is reacting to the event listener that we setup.
    - Then when we toggle off WindowTracker, React recognizes that this component has reached the end of its lifecycle and it is about to be removed from the DOM.
    - It takes the return function that is received from us when it first setup our useEffect and just run it.
    - In fact, it runs it kind of blindly, it doesn't know what that function contains but we (developers) are expected to successfully cleanup after our side effects.
*/
import React from 'react';

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function watchWidth() {
      console.log('Setting up...');
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', watchWidth);

    return function () {
      console.log('Cleaning up...');
      window.removeEventListener('resize', watchWidth);
    };
  }, []);

  return <h1>Window width: {windowWidth}</h1>;
}

function WindowTracker() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener('resize', function () {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return <h1>Window width: {windowWidth}</h1>;
}
