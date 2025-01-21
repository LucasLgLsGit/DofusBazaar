// src/components/UserList.js
import React from 'react';
import '../styles/ListType.css'

function ListType({ types }) {
  return (
    <div>
      	<h2 class="listTypeTitre">Liste des types</h2>
      	<ul class="listTypeUl">
			{types.map((type) => (
				<li key={type.id}> {type.name}</li>
			))}
	  	</ul>
    </div>
  );
}

export default ListType;
