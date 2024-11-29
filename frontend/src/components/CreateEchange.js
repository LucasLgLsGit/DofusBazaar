// src/components/CreateType.js
import React, { useState } from 'react';

function CreateType({ fetchEchanges, types }) {
    const [num, setNum] = useState('');
    const [type, setType] = useState('');
    const [prix_achat, setPrixAchat] = useState('');
    const [prix_estime, setPrixEstime] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newEchange = {
			num: parseInt(num, 10), // Conversion en entier
			type,
			prix_achat: parseFloat(prix_achat), // Conversion en nombre décimal
			prix_estime: parseFloat(prix_estime) // Conversion en nombre décimal
		};
		console.log('Données envoyées :', newEchange); // Log des données

        try {
            const response = await fetch('http://localhost:5000/api/echanges', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newEchange),
            });

            if (response.ok) {
                setNum('');
                setType('');
                setPrixAchat('');
                setPrixEstime('');
                fetchEchanges(); 
            } else {
                console.error("Erreur lors de la création de l'échange");
            }
        } catch (error) {
            console.error('Erreur:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                placeholder="Num"
                value={num}
                onChange={(e) => setNum(e.target.value)}
                required
            />
            <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
            >
                <option value="">Sélectionnez un type</option>
                {types.map((typeOption) => (
                    <option key={typeOption._id} value={typeOption._id}>
                        {typeOption.name}
                    </option>
                ))}
            </select>
            <input
                type="number"
                placeholder="Prix d'achat"
                value={prix_achat}
                onChange={(e) => setPrixAchat(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Prix estimé"
                value={prix_estime}
                onChange={(e) => setPrixEstime(e.target.value)}
                required
            />
            <button type="submit">Ajouter échange</button>
        </form>
    );
}

export default CreateType;
