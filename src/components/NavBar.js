import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav id='navs'>
    <ul >
    <li><Link to="/home">Home</Link></li>
      <li><Link to="/collection">Bysicles spare parts </Link></li>
      <li><Link to="/form">Add Comodity</Link></li>
      <li> <Link to="/about">About us</Link> </li>
    </ul>
  </nav>
    // <nav>
    //   <><a href='#collection'>Bot Colection</a><a href='#form'>Form</a><a href='#satelite'>Bot Colection</a></>
    // </nav>
  );
}

export default Navbar;
