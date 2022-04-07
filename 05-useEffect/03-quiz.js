/*
    ? useEffect quiz:
    * What is a "side effect" in React? What are some examples?
    - Any code that affects an outside system.
    - local storage, API, web sockets, two states to keep in sync.

    * What is NOT a "side effect" in React? Examples?
    - Anything that React is in charge of.
    - Maintaining state, keeping the UI in sync with the data, render DOM elements.

    * When does React run your useEffect function? When does it NOT run the effect function?
    - As soon as the component loads (first render).
    - On every re-render of the component (assuming no dependencies array)
    - Will NOT run the effect when the values of the dependencies in the array stay the same between renders.

    * How would you explain what the "dependencies array" is?
    - Second parameter to the useEffect function.
    - A way for React to know whether it should re-run the effect function.
*/
import React from 'react';
// import memesData from "../memesData.js"

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });
  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(function () {
    fetch('https://api.imgflip.com/get_memes')
      .then((res) => res.json())
      .then((data) => setAllMemes(data));
    // .then(data => setAllMemes(data.data.memes)) //// We need to change in getMemeImage()
  }, []);  //! Watching for [data] => Infinite Loop

  function getMemeImage() {
    const memesArray = allMemes.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
