import React, { useState, useEffect } from 'react';
import '../styles/CreateEchange.css'

function CreateEchange({ fetchEchanges, types , echanges}) {
    const [num, setNum] = useState('');
    const [type, setType] = useState('');
    const [prix_achat, setPrixAchat] = useState('');
    const [prix_estime, setPrixEstime] = useState('');

    useEffect(() => {
        if(echanges.length > 0) {
            const maxNum = echanges.length;
            setNum(maxNum + 1);
        } else {
            setNum(1);
        }
    }, [echanges])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newEchange = {
			num, // Conversion en entier
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
        <div>
            <h2 class="createEchangeTitre">Ajouter un échange</h2>
            <form class="createEchangeForm" onSubmit={handleSubmit} >
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
        </div>
    );
}

export default CreateEchange;
