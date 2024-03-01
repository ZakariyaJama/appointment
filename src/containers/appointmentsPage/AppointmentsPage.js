import React, { useState } from "react";

import AppointmentForm from "../../components/appointmentForm/AppointmentForm"; // Ensure this is the correct path
import TileList from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, addAppointment, contacts }) => {
  // State variables for appointment info
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment({
      title,
      contact,
      date,
      time
    });

    // Clear form data after submission
    setTitle('');
    setContact('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          contacts={contacts}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} />
      </section>
    </div>
  );
};

export default AppointmentsPage;