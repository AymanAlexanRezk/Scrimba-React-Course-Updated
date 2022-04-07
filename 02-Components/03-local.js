/*
    ? Set up a local React environment with Create React App:
    > Webpack knows how to use Babel to transpile our React code into regular JS.
    - React uses a syntax that isn't understood by the browser.
    - In-browser Babel transpiler isn't a good long-term solution especially for production.

    >$ nvm install lts //// --lts for Linux/macOS
    >$ npx create-react-app my-app
    >$ cd my-app && npm start

    * Loading styles/images in CRA:
    🔗 https://create-react-app.dev/docs/adding-images-fonts-and-files/
    🔗 https://create-react-app.dev/docs/using-the-public-folder/
    1️⃣ Styles @src/style.css => import "./style.css"; //// Utilized by Webpack's style loader.
    - Style loader allows us to import styles [a string that represent the CSS file] directly into index.js
    2️⃣ @Navbar.js component: <img src="../images/logo.png" />
    => import logo from "../images/logo.png"; //// Bundling reference to create absolute path
    Then <img src={logo} /> //// Instead of hard coded path
    - The main issue is that when we build our app, it is going to build in a way that doesn't have a ton of different files/folders inside our source directory, instead, webpack is going to bundle everything up into one giant .js file.
    - Using relative path, this is going to break when things get bundled up.
    - Anytime we include an image in our app, we need to import the image from that relative path, then we replace the source with our imported image.
    - When CRA is bundling our app, it has a reference to where that image file exists relative to the current file and it can create a better absolute path.

    * Layout folder:
    > Mental model to outline the layout of the project[design]:
    - Helpful especially when we start thinking in terms of flexbox or grid used for the layout.
*/