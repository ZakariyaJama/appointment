import React from "react";
import { AppointmentForm as ImportedAppointmentForm } from '../../components/appointmentForm/AppointmentForm';

const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label htmlFor="date">Date:</label>
      <input
        id="date"
        type="date"
        value={date}
        min={getTodayString()}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <label htmlFor="time">Time:</label>
      <input
        id="time"
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />

      <label htmlFor="contact">Contact:</label>
      <select
        id="contact"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        required
      >
        <option key="none" value="">
          Select a contact
        </option>
        {contacts.map((contact, index) => (
          <option key={index} value={contact.name}>
            {contact.name}
          </option>
        ))}
      </select>

      <button type="submit">Add Appointment</button>
    </form>
  );
};

export default AppointmentForm;