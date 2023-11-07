import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/collection">Satellite Collection</Link></li>
        <li><Link to="/form">Add Satellite</Link></li>
        <li><Link to="/search">Search Satellite</Link></li>
      </ul>
    </nav>
    // <nav>
    //   <><a href='#collection'>Bot Colection</a><a href='#form'>Form</a><a href='#satelite'>Bot Colection</a></>
    // </nav>
  );
}

export default Navbar;
