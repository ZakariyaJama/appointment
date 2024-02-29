import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import AppointmentsPage from "./containers/appointmentsPage/AppointmentsPage"; // Ensure these imports match your file structure
import ContactsPage from "./containers/contactsPage/ContactsPage";

function App() {
  // State variables for contacts and appointments
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  // Function to add a contact
  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  // Function to add an appointment
  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
      <Route path={ROUTES.CONTACTS} element={<ContactsPage contacts={contacts} addContact={addContact} />} />
      <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment} />} />
    </Route>
  ));

  return (
    <RouterProvider router={router} />
  );
}

export default App;
