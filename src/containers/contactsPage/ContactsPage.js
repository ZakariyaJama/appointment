import React, { useState, useEffect } from "react";

import ContactForm from "../../components/contactForm/ContactForm"; // Adjust import if they are default exports
import TileList from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  // State variables for contact info
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isDuplicate, setIsDuplicate] = useState(false);

  // Check for contact name in the contacts array
  useEffect(() => {
    const nameIsDuplicate = contacts.some((contact) => contact.name === name);
    setIsDuplicate(nameIsDuplicate);
  }, [name, contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isDuplicate) {
      addContact({ name, phone, email });
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
          isDuplicate={isDuplicate}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};

export default ContactsPage;

