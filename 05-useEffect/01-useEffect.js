/*
    ? Intro to useEffect:
    * React's primary tasks:
    1️⃣ Work with the DOM/browser to render UI to the page. JSX
    2️⃣ Manage state for us between render cycles.
    - i.e. state values are "remembered" from one render to the next. useState() Hook
    3️⃣ Keep the UI updated whenever state changes occur.

    * What can't React handle on its own?
    > (Out)side effects.
    - localStorage.
    - API/database interactions.
    - Subscriptions (e.g. Web sockets).
    - Syncing 2 different internal states together.
    - Basically anything that REACT isn't in charge of.

    * useEffect() [the effect hook]:
    - A tool that React has given us (developers) to use sort of like a blank canvas that allows us to interact outside of the React ecosystem (props, state, UI render).
    - A tool that allows us to synchronize React state with those (Out)side systems (localsStorage, API. ..)
    - The modern advice isn't to think/use useEffect() as a combination of lifecycle methods, but rather to work on retraining your approach to understanding side effects in React.
    - 🔗 https://overreacted.io/a-complete-guide-to-useeffect/

    * Class Components are mainly used for:
    - state && lifecycle methods

    * How to think of the useEffect hook:
    > useEffect is a simpler way to think about component's lifecycle methods.
    - It considered a replacement for the 3 lifecycle methods: DidMount, DiUpdate, DidUnmount
    > Think of useEffect a little differently than trying to remember which life cycle method it replaces and how to make it replace those.
    - Instead of worrying about lifecycle methods, we should start to think of useEffect more like its name indicates.
    - It is a hook that allows us to produce side effect in our component.

    * What are side effects:
    > Think of anything that reaches outside of component to do something:
    - Network request, manual DOM manipulation, manual event listener, timeout/intervals.
    - The main job of all of these side effects doesn't specifically have to do with managing state or displaying contents to the screen.
    > Because useEffect doesn't know what exactly we gonna add to our component,
    - It provides us a callback function that we can use for implementing our logic.
*/
