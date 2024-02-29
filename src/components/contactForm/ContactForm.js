import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  isDuplicate
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
        required
      />
      {isDuplicate && <p>Name already exists.</p>}
      <label htmlFor="phone">Phone:</label>
      <input
        id="phone"
        value={phone}
        type="tel"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};
