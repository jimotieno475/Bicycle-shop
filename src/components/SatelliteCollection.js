// import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SatelliteCollection({satellites,handleDeleteSatellite}) {
  function handleDeleteClick(satellite) {
    // Send a DELETE request to the server to delete the satellite
    fetch(`http://localhost:3000/satellites/${satellite.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        // Call the handleDeleteSatellite function to update the state in the parent component
        handleDeleteSatellite(satellite);
      })
      .catch((error) => {
        console.error('Error while deleting the satellite:', error);
      });}




  return (
    <div id='collection'>
      <h1>Satellite Collection</h1>
      <ul>
        {satellites.map((satellite) => (
          <li key={satellite.id}>
            <Link to={`/collection/${satellite.id}`}>
              <img src={satellite.image} alt={satellite.name} />
            </Link>
            <button onClick={() => handleDeleteClick(satellite.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SatelliteCollection;
