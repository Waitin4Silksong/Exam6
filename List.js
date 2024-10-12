import React from "react";

function DoctorList({ doctors, deleteDoctor }) {
  return (
    <div className="doctor-list">
      <h2>Список Лікарів</h2>
      {doctors.length === 0 ? (
        <p>Лікарів ще не додано.</p>
      ) : (
        <ul>
          {doctors.map((doctor, index) => (
            <li key={index}>
              <span>
                {doctor.name}, {doctor.specialization}, {doctor.phone}
              </span>
              <button onClick={() => deleteDoctor(index)}>Видалити</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DoctorList;
