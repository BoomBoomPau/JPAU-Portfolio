import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qy8hf9q",
        "react_site_portfolio",
        form.current,
        "dgSclqp7tlzL4VxTh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="container-contact">
      <form ref={form} onSubmit={sendEmail}>
        <div className="container-contact-row1">
          <div className="container-name">
            {" "}
            <label>Name</label>
            <input type="text" name="name" />
          </div>
          <div className="container-email">
            <label>Email</label>
            <input type="email" name="email" />
          </div>
        </div>
        <div className="container-message">
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
}
