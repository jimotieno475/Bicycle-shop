

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SingleSatellite() {
  const { satelliteId } = useParams();
  const [satellites, setSatellites] = useState([]);
  useEffect(() => {
    // Fetch satellite details for the given satelliteId
    const apiUrl = `http://localhost:3000/satellites/${satelliteId}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((satellite) => {
        setSatellites([satellite]); // Update the state with the fetched satellite details
      })
      .catch((error) => {
        console.error('Error fetching satellite details:', error);
      });
  }, [satelliteId]);

  return (
    <div id='satellite'>
      <h1>view Bicycle</h1>
      <div id='single' >
      {satellites.length > 0 ? (
        <div>
          <img src={satellites[0].image} alt={satellites[0].name} />
          <p>Name: {satellites[0].name}</p>
          <p> Price: {satellites[0].price}</p>
        <Link to="/about">
           <button> Buy</button>
        </Link>
         

        </div>
      ) : (
        <p>Loading...</p>
      )}
       </div>
    </div>
  );
}

export default SingleSatellite;
