import React, { useState } from "react";

const SendEmailForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const emailAddress = "gmsudhan3@gmail.com"; // Replace with the recipient's email address
    const subject = "New message from your website"; // Change the email subject as needed

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=Name: ${name}%0D%0APhone: ${phone}%0D%0AMessage: ${message}`;

    window.location.href = mailtoLink;
  };

  return (
    <form className="email-form" onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label className="form-label">
          Name:
          <input
            className="form-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label className="form-label">
          Phone:
          <input
            className="form-input"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
      </div>
      <div className="form-group">
        <label className="form-label">
          Message:
          <textarea
            className="form-textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </div>
      <button className="submit-button" type="submit">
        Send Email
      </button>
    </form>
  );
};

export default SendEmailForm;
