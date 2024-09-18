
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const MailBox = () => {
    const form = useRef();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = "service_qgba34s";
    const templateID = "template_dn6d5gp";
    const publicKey = "AJCqa3MG5d7qvWKBi";

    const templateParams = {
      from_name: name,
      from_email: mail,
      message: message,
      to_name: "Ranjana",
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      () => {
        setName("");
        setMail("");
        setMessage("");
        console.log("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
  };
  return (
    <div className="sm:w-1/3">
    <form ref={form} onSubmit={handleSubmit} className="form-box">
      <h1 className="text-lg font-bold">Drop me a mail.</h1>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="name*"
        onChange={(e) => setName(e.target.value)}
        className="input-field"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="email*"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
        className="input-field"
        required
      />

      <textarea
        name="message"
        value={message}
        placeholder="Enter your message*"
        onChange={(e) => setMessage(e.target.value)}
        className="input-field"
        required
      />
      <button type="submit" className="sub-btn text-white">
        Send
      </button>
    </form>
  </div>
  )
}

export default MailBox