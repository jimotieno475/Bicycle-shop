// import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SatelliteCollection({satellites,handleDeleteSatellite,changeLimit,handleNext,handleBack,page,limit}) {
  
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
      <ul id='satellites'>
        {satellites.map((satellite) => (
          <div key={satellite.id}>
            <Link to={`/collection/${satellite.id}`}>
              <div className='image-container'>
                 <img src={satellite.image} alt={satellite.name} />
                 <div className="image-text">
                  click for satelite info
                 </div>
              </div>
             
            </Link>
            <button onClick={() => handleDeleteClick(satellite)}>Delete</button>
          </div>
        ))}
      </ul>
      <div>
        <button onClick={handleBack}>Back</button>
        <button>{page}</button>
        <button onClick={handleNext}>Next</button>
        <br/>
        <span id='athere' style={{color:"gold"}}>Number of satelites in a page</span>
        <select id='selection' value={limit} onChange={(e) => changeLimit(e.target.value) }>
          <option>10</option>
          <option>15</option>
          <option>20</option>
          <option>25</option>
        </select>
      </div>
    </div>
  );
}

export default SatelliteCollection;
