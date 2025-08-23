import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Nav from "../Nav/Nav";

function Contactus() {
      const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3c8o80b', 'template_7xz7kx4', form.current, {
        publicKey: 'M7aD5Qh4NW5vY7ryf',
      })
      .then(
        (result) => {
          console.log(result.text);
          alert ("success");
        },
        (error) => {
          console.log(error.text);
          alert ("Not Send")
        }
      );
  };

  return (
    <div>
      <Nav />
      <h1>Contact Us</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label><br></br>
        <input type="text" name="user_name" /><br></br><br></br>
        <label>Email</label><br></br>
        <input type="email" name="user_email" /><br></br><br></br>
        <label>Message</label><br></br>
        <textarea name="message" /><br></br><br></br>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contactus;
