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
    	<div className='listEchangeContainer'>
      		<h2 className="listEchangeTitre">Liste des échanges</h2>
      		<table className="listEchangeTable">
				<thead>
					<tr>
						<th>Numéro</th>
						<th>Type</th>
						<th>Prix d'achat</th>
						<th>Prix de vente</th>
						<th>Pièce jointe</th>
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
						<td>*lien image*</td>
						<td>
							<div className="buttonsContainer">
								<button onClick={() => handleEdit(echange)}>Modifier</button>
								<button onClick={() => onDelete(echange._id)}>Supprimer</button>
							</div>
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
