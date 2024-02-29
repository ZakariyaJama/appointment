import React from "react";

export const ContactPicker = ({ contacts, contact, setContact }) => {
  return (
    <select
      value={contact}
      onChange={(e) => setContact(e.target.value)}
      required
    >
      <option key="default" value="">Select a contact</option>
      {contacts.map((c, index) => (
        <option key={index} value={c.name}>{c.name}</option>
      ))}
    </select>
  );
};
