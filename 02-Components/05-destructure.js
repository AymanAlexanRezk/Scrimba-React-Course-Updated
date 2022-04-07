import React from 'react';
import Contact from './Contact';

function App() {
  return (
    <div className="contacts">
      <Contact
        img="./images/felix.png"
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
    </div>
  );
}

// export default App

function Contact(props) {
  /*
      > Recommended: [No Destructuring!]
      - If we decide to declare other variables here inside of the component,
      - We avoid being confused which variables came in as props and which ones was declared.
  */
  return (
    <div className="contact-card">
      <img src={props.img} />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src="./images/phone-icon.png" />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src="./images/mail-icon.png" />
        <p>{props.email}</p>
      </div>
    </div>
  );
}
// export default Contact

//* Destructuring the received object to get its property names:
function Contact({ img, name, phone, email }) {
  return (
    <div className="contact-card">
      <img src={img} />
      <h3>{name}</h3>
      <div className="info-group">
        <img src="./images/phone-icon.png" />
        <p>{phone}</p>
      </div>
      <div className="info-group">
        <img src="./images/mail-icon.png" />
        <p>{email}</p>
      </div>
    </div>
  );
}
// export default Contact
