import React, { useState } from 'react';
import './resa.css';

function ReservationForm() {
  const [formData, setFormData] = useState({
    Nom: '',
    Nombre_Aventuriers: '',
    Date: '',
    Telephone: '',
    Email: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedData = {
      ...formData,
      Date: formData.Date ? new Date(formData.Date).toISOString() : '',
      Nombre_Aventuriers: parseInt(formData.Nombre_Aventuriers) || 0,
    };
    await fetch('/api/resa', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formattedData)
    });

    // Deuxième requête POST vers une autre URL
    await fetch('/api/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formattedData)
    });

    
  };

  return (
    <form onSubmit={handleSubmit} className="form-inner">
      <div className="form-field">
        <input type="text" name="Nom" placeholder="Nom" required onChange={handleChange} value={formData.Nom} />
      </div>
      <div className="form-field">
        <input type="number" name="Nombre_Aventuriers" placeholder="Nombre d'aventuriers" required onChange={handleChange} value={formData.Nombre_Aventuriers} />
      </div>
      <div className="form-field">
        <input type="date" name="Date" required onChange={handleChange} value={formData.Date} />
      </div>
      <div className="form-field">
        <input type="tel" name="Telephone" placeholder="Téléphone" required onChange={handleChange} value={formData.Telephone} />
      </div>
      <div className="form-field">
        <input type="email" name="Email" placeholder="Email" required onChange={handleChange} value={formData.Email} />
      </div>
      <div className="form-field">
        <button type="submit">Réserver</button>
      </div>
    </form>
  );
}

export default ReservationForm;
