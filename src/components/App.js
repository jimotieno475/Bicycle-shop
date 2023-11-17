import React,{useEffect,useState} from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom';
import Navbar from './NavBar';
import SatelliteCollection from './SatelliteCollection';
import SingleSatellite from './SingleSatellite';
import SatelliteForm from './SatelliteForm'; 
import LandingPage from './Home';
import Footer from './Footer';
import About from './About'
function App() {
  const [satellites, setSatellites] = useState([]);


  useEffect (()=>{fetch("http://localhost:3000/satellites")
  .then((res)=>res.json())
  .then((data)=>{
    setSatellites(data)
  })},[] )

  function handleDeleteSatellite(deletedSatellite) {
    const deleted=satellites.filter((satellite)=>
      satellite.id !== deletedSatellite.id
    )
    setSatellites(deleted)
  }

  return (
      <div>
    <Router >
      <div >
       
        <Navbar/>
        <Routes>
        <Route
              path="/"
              element={<Navigate to="/home" />}/>
           <Route exact path="/home" element={<LandingPage />} />
          <Route path="/collection" element={<SatelliteCollection
           satellites={satellites} 
           handleDeleteSatellite={handleDeleteSatellite}
           />} />
          <Route path="/collection/:satelliteId" element={<SingleSatellite />} />
          <Route path="/form" element={<SatelliteForm />} />
          <Route path="/about" element={<About/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
    </div>
 );
}


export default App;

