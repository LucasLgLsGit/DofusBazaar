import React, { useState, useEffect } from 'react';
import CreateType from './CreateType';
import CreateEchange from './CreateEchange';
import ListType from './ListType';
import ListEchange from './ListEchange';
import Banner from './Banner';


import logo from '../assets/logo.png';
import '../styles/App.css';

function App() {

	const [types, setTypes] = useState([]);
	const [echanges, setEchanges] = useState([]);

	useEffect(() => {
		fetchTypes();
		fetchEchanges();
	}, []);
  
	const fetchTypes = async () => {
		try {
			const response = await fetch('http://localhost:5000/api/types');
			const data = await response.json();
			setTypes(data);
	  	} catch (error) {
			console.error('Erreur lors de la récupération des types:', error);
	 	}
	};

	const fetchEchanges = async () => {
		try {
			const response = await fetch('http://localhost:5000/api/echanges');
			const data = await response.json();
			setEchanges(data);
		} catch (error) {
			console.error('Erreur lors de la récupération des échanges :', error);
		}
	}

	async function handleDeleteEchange(id) {
		const confirmDelete = window.confirm("Étes-vous sûr de vouloir supprimer cet échange ?");
		if (!confirmDelete) return;
		
		try {
			const response = await fetch(`http://localhost:5000/api/echanges/${id}`, {
				method: 'DELETE',
			});

			console.log(response); // Log de la réponse pour voir ce qu'il renvoie
			if (!response.ok) {
				throw new Error("Erreur lors de la suppression");
			}

			setEchanges((prevEchanges) => prevEchanges.filter((e) => e._id !== id));	
			alert("Échange supprimé avec succès !");
		} catch (error) {
			console.error("Erreur lors de la suppression", error);
			alert("Impossible de supprimer l'échange");
		}
	}

	async function handleEditEchange(updatedEchange) {
		const confirmEdit = window.confirm("Êtes-vous sûr de vouloir modifier cet échange ?");
		if (!confirmEdit) return;
		console.log(updatedEchange);
		try {
		  	const response = await fetch(`http://localhost:5000/api/echanges/${updatedEchange._id}`, {
				method: 'PUT',
				headers: {
				  'Content-Type': 'application/json',
				},
				body: JSON.stringify(updatedEchange), // Envoie les données mises à jour
			});
		  
			console.log(response); // Log de la réponse pour vérifier ce que renvoie le serveur
			if (!response.ok) {
				throw new Error("Erreur lors de la modification");
			}
		  
			  	// Met à jour l'état pour afficher les échanges modifiés
			setEchanges((prevEchanges) =>
			prevEchanges.map((echange) =>
				echange._id === updatedEchange._id ? updatedEchange : echange
			));
			
			alert("Échange modifié avec succès !");
		} 	catch (error) {
			console.error("Erreur lors de la modification", error);
			alert("Impossible de modifier l'échange");
		}
	  }
	  

	return (
		<div>
			<Banner>
				<img src={logo} alt='logo-dofus-bazaar' className='dbr-logo' />
				<h1 className='dbr-title'>DofusBazaar</h1>
			</Banner>

			<div className='types-container'>
				<CreateType fetchTypes={fetchTypes}  />
				<ListType types={types} />
				
			</div>
			
			<div className='echanges-container'>
				<CreateEchange 
					fetchEchanges={fetchEchanges} 
					types={types} 
					echanges={echanges} 
				/>
				<ListEchange
					echanges={echanges} 
					types={types} 
					onDelete={handleDeleteEchange} 
					onEdit={handleEditEchange}
				/>				
			</div>
		</div>
	);
}

export default App; 
