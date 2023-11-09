

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SingleSatellite() {
  const { satelliteId } = useParams();
  const [satellites, setSatellites] = useState([]);
  const [like,setLike]=useState(0)
  
  function handlelike (){
   setLike(like+1)
    console.log(like)
  }

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
      <h1>Satellite Details</h1>
      <div id='single' >
      {satellites.length > 0 ? (
        <div>
          <img src={satellites[0].image} alt={satellites[0].id} />
          <p>Name: {satellites[0].id}</p>
          <p>Country: {satellites[0].country}</p>
          <p>LauncheDate: {satellites[0].launch_date}</p>
          <p>Mass: {satellites[0].mass}</p>
          <p>Launcher: {satellites[0].launcher}</p>
          <button onClick={handlelike}> Like </button> <span style={{color:"goldenrod"}}>{like} <span style={{color:"black"}}>likes</span>  </span>

        </div>
      ) : (
        <p>Loading...</p>
      )}
       </div>
    </div>
  );
}

export default SingleSatellite;
