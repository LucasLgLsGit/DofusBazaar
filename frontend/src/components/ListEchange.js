// src/components/UserList.js
import React, { useState } from 'react';
import EditEchange from './EditEchange';
import '../styles/ListEchange.css'

function ListEchange({ echanges, types, onDelete, onEdit }) {
	const[isModalOpen, setIsModalOpen] = useState(false);
	const[selectedEchange, setSelectedEchange] = useState(null);

	const handleEdit = (echange) => {
		setSelectedEchange(echange);
		setIsModalOpen(true);
	}

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedEchange(null);
	}

	const handleEditSubmit = (updatedEchange) => {
		onEdit(updatedEchange);
		handleCloseModal();
	}

	return (
    	<div>
      		<h2 class="listEchangeTitre">Liste des échanges</h2>
      		<table class="listEchangeTable">
				<thead>
					<tr>
						<th>num</th>
						<th>type</th>
						<th>prix_achat</th>
						<th>prix_estime</th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{echanges.map((echange) => (
        	  		<tr key={echange._id}>
						<td>{echange.num}</td>
						<td>{echange.type.name}</td>
						<td>{echange.prix_achat}</td>
						<td>{echange.prix_estime}</td>
						<td>
							<button onClick={() => handleEdit(echange)}>Modifier</button>
							<button onClick={() => onDelete(echange._id)}>Supprimer</button>
						</td>
					</tr>	
        			))}
				</tbody>		
    		</table>

			{isModalOpen && selectedEchange && (
    			<EditEchange
        			echange={selectedEchange}
        			types={types}
					onClose={handleCloseModal}
        			onSubmit={handleEditSubmit}
    			/>
    		)}
    	</div>
  );
}

export default ListEchange;
