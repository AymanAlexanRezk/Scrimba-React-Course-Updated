/*
    ? Monolithic 👉 Parent/Child React Components:
    > Issues:
    - It is not ideal to have the entire HTML markup in one React component.

    > The concept of Composability in action:
    👉 Parent Child Components:
    👌 Allows us to set aside some of our UI to be managed separately.

    > import CustomComponent from './CustomComponent':
    - './CustomComponent' indicates a file located in our root project folder (Not a dependency package)
*/

import React from 'react';
import ReactDOM from 'react-dom';

function Header() {
  return (
    <header>
      <nav>
        <img src="./react-logo.png" width="40px" />
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
    </>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2022 Ayman development. All rights reserved.</p>
    </footer>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById('root'));

//// @index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));