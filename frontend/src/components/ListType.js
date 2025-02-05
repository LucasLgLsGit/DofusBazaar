// src/components/UserList.js
import React from 'react';
import '../styles/ListType.css'

function ListType({ types, onDelete }) {
  return (
    <div className="listTypeContainer">
      	<h2 className="listTypeTitre">Liste des types</h2>
      	<ul className="listTypeUl">
			{types.map((type) => (
				<li key={`${type._id}-${type.name}`}> {type.name}<button className="typeDeleteButton" onClick={() => onDelete(type._id)}>x</button></li>
				
			))}
			
	  	</ul>
    </div>
  );
}

export default ListType;
