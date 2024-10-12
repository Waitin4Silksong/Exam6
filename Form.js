import React, { useState } from 'react';

function DoctorForm({ addDoctor }) {
  const [name, setName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoctor({ name, specialization, phone });
    setName('');
    setSpecialization('');
    setPhone('');
  };

  return (
    <form className="doctor-form" onSubmit={handleSubmit}>
      <h2>Додати Лікаря</h2>
      <input
        type="text"
        placeholder="П.І.Б."
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Спеціалізація"
        value={specialization}
        onChange={(e) => setSpecialization(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Контактний телефон"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button type="submit">Додати лікаря</button>
    </form>
  );
}

export default DoctorForm;
