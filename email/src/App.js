import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './App.css'; 

const ContactUs = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const { name, email, message } = data;

  const form = useRef(); // Create a reference for the form

  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hgrlteo', 'template_xzpt0aj', e.target, 'wAB59C0hNiSgetluO')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        }
      );

    // Reset the form after sending the email
    form.current.reset();
  };

  return (
    <div className="contact-form-container">
      <div>
      <h1>EMAIL JS FORM</h1>
      </div>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={changeHandler} />
        <label>Email</label>
        <input type="email" name="email" value={email} onChange={changeHandler} />
        <label>Message</label>
        <textarea name="message" value={message} onChange={changeHandler} />
        <button type="submit" className="submit-button">Send</button>
      </form>
    </div>
  );
};

export default ContactUs;
