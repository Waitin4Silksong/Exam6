  import React, { useState } from 'react';

function AppointmentForm({ addAppointment, doctors }) {
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment({ doctor: selectedDoctor, date, time });
    setSelectedDoctor('');
    setDate('');
    setTime('');
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <h2>Запис на прийом</h2>
      <select
        value={selectedDoctor}
        onChange={(e) => setSelectedDoctor(e.target.value)}
        required
      >
        <option value="">Оберіть лікаря</option>
        {doctors.map((doctor, index) => (
          <option key={index} value={doctor.name}>
            {doctor.name} ({doctor.specialization})
          </option>
        ))}
      </select>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <button type="submit">Записатися</button>
    </form>
  );
}

export default AppointmentForm;
