import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SearchSatellite = ({ satellites }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredSatellites = satellites.filter(satellite =>
    satellite.id.includes(searchTerm)
  );

  return (
    <div>
      <h2>Search Satellite</h2>
      <p>You can view only satelites in the current page in the Satellite Collection</p>
      <p>If you want to see other satelites navigate to the next page in the Satellite Collection</p>
      <input
        type="text"
        placeholder="Search by id"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredSatellites.map((satellite, index) => (
            <Link to={`/collection/${satellite.id}`}>
              <li key={index}>{satellite.id}</li>
              </Link>    
        ))}
      </ul>
    </div>
  );
};

export default SearchSatellite;

