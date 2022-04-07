/*
    ? Window Tracker:
    > Conditionally rendering WindowTracker: mount/unmount
    - Unmounting WindowTracker will completely remove it from the DOM.
    - Mounting it back will re-run/update the value of window.innerWidth

    > Adding an event listener to window that listens for resize event:
    - Whenever the window is resized, we can set some local state to our WindowTracker to display the correct window width at any given width without having to mount/unmount it.
    - We can't add window events on <h1> element for example
    - We need to do manual imperative DOM manipulation, kind of interacting with a system outside of our WindowTracker component, because we will actually interact with the window itself.

    > Our WindowTracker component is only mounting when its parent is allowing it to render conditionally,
    - Once rendered, an event listener is created immediately any time the resize event happens.
    - That event listener is registered with the DOM itself, so if we toggle off our component and try to resize the window, we get a warning.
    // Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
    - WindowTracker is no longer a part of the DOM, but the browser itself is still listening for the resize event and trying to set the window width of unmounted component.
*/
import React from 'react';
import WindowTracker from './WindowTracker';

export default function App() {
  const [show, setShow] = React.useState(true);

  function toggle() {
    setShow((prevShow) => !prevShow);
  }

  return (
    <div className="container">
      <button onClick={toggle}>Toggle WindowTracker</button>
      {/* Only display `<WindowTracker>` if `show` is `true` */}
      {show && <WindowTracker />}
    </div>
  );
}

function WindowTracker() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener('resize', function () {
      // console.log("Resized")
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return <h1>Window width: {windowWidth}</h1>;
}
