import React, { useState, useEffect } from 'react';
import CreateType from './CreateType';
import CreateEchange from './CreateEchange';
import TypeList from './TypeList';
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
			setTypes(data);
		} catch (error) {
			console.error('Erreur lors de la récupération des échanges :', error);
		}
	}


	return (
		<div>
			<Banner>
				<img src={logo} alt='logo-dofus-bazaar' className='dbr-logo' />
				<h1 className='dbr-title'>DofusBazaar</h1>
			</Banner>
			<CreateType fetchTypes={fetchTypes} />
			<TypeList types={types} />
			<CreateEchange fetchEchanges={fetchEchanges} types={types}/>
		</div>
	);
}

export default App; 
