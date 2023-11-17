// import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function SatelliteCollection({satellites}) {
  
  return (
    <div id='collection'>
      <h1>Bycicle and Bycycle parts Collection</h1>
      <ul id='satellites'>
      {satellites && satellites.map((satellite) => (
  <div key={satellite.id}>
    <Link to={`/collection/${satellite.id}`}>
      <div className='image-container'>
        <img src={satellite.image} alt={satellite.name} />
        <div className="image-text">
          Click to view the price 
        </div>
      </div>
    </Link>
  </div>
))}
 </ul>
  </div>
  );}

export default SatelliteCollection;
