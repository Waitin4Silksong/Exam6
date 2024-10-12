import React, { useState } from 'react';
import DoctorList from './List'
import DoctorForm from './Form';
import AppointmentForm from './Appointment';
import './App.css';

function App() {
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const addDoctor = (newDoctor) => {
    setDoctors([...doctors, newDoctor]);
  };

  const removeDoctor = (index) => {
    setDoctors(doctors.filter((_, i) => i !== index));
  };

  const addAppointment = (newAppointment) => {
    setAppointments([...appointments, newAppointment]);
  };

  return (
    <div className="clinic-app">
      <h1>Стоматологічна Клініка</h1>
      <DoctorForm addDoctor={addDoctor} />
      <DoctorList doctors={doctors} removeDoctor={removeDoctor} />
      <AppointmentForm addAppointment={addAppointment} doctors={doctors} />
    </div>
  );
}

export default App;