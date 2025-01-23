// src/components/UserList.js
import React from 'react';
import '../styles/ListType.css'

function ListType({ types }) {
  return (
    <div className="listTypeContainer">
      	<h2 className="listTypeTitre">Liste des types</h2>
      	<ul className="listTypeUl">
			{types.map((type) => (
				<li key={type.id}> {type.name}</li>
			))}
	  	</ul>
    </div>
  );
}

export default ListType;
