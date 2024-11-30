// EditEchange.js
import React, { useState, useEffect } from 'react';
import '../styles/EditEchange.css';

function EditEchange({ echange, types, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    _id: '',
    num: '',
    type: '',
    prix_achat: '',
    prix_estime: ''
  });

  useEffect(() => {
    if (echange) {
      setFormData({
        _id: echange._id,
        num: echange.num,
        type: echange.type.name,
        prix_achat: echange.prix_achat,
        prix_estime: echange.prix_estime
      });
    }
  }, [echange]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <label>
          Num: 
        </label>
        <p>
          {formData.num} 
        </p>
        <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
            >
                <option value="">Sélectionnez un type</option>
                {types.map((typeOption) => (
                    <option key={typeOption._id} value={typeOption._id}>
                        {typeOption.name}
                    </option>
                ))}
            </select>
        <label>
          Prix Achat:
          <input
            type="number"
            name="prix_achat"
            value={formData.prix_achat}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Prix Estimé:
          <input
            type="number"
            name="prix_estime"
            value={formData.prix_estime}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Modifier</button>
        <button type="button" onClick={onClose}>Fermer</button>
      </form>
    </div>
  );
}

export default EditEchange;
