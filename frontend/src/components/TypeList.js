// src/components/UserList.js
import React from 'react';
import '../styles/TypeList.css'

function TypeList({ types }) {
  return (
    <div>
      	<h2>Liste des types</h2>
      	<ul>
			{types.map((type) => (
				<li key={type.id}> {type.name}</li>
			))}
	  	</ul>
    </div>
  );
}

export default TypeList;
