// src/components/UserList.js
import React from 'react';

function EchangeList({ echanges }) {
  return (
    <div>
      <h2>Liste des échanges</h2>
      <table>
		<tr>
			<th>num</th>
			<th>type</th>
			<th>prix_achat</th>
			<th>prix_estime</th>
		</tr>
			{echanges.map((echange) => (
        	  	<tr key={echange._id}>
					<td>{echange.num}</td>
					<td>{echange.type.name}</td>
					<td>{echange.prix_achat}</td>
					<td>{echange.prix_estime}</td>
				</tr>
        	))}
      </table>
    </div>
  );
}

export default EchangeList;
