import React,{useEffect,useState} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './NavBar';
import SatelliteCollection from './SatelliteCollection';
import SingleSatellite from './SingleSatellite';
import SatelliteForm from './SatelliteForm';
import SearchSatellite from './SearchSatellite';

function App() {
  const [satellites, setSatellites] = useState([]);

  useEffect(() => {
    // Fetch satellite data and set it using the useState hook
    fetch("http://localhost:3000/satellites")
    .then((res)=>res.json())
    .then((satellites)=>{setSatellites(satellites)})
  }, []);

  function handleDeleteSatellite(deletedSatellite) {
    const updatedItems = satellites.filter((satellite) => satellite.id !== deletedSatellite.id);
    setSatellites(updatedItems);
  }
  

  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/collection" element={<SatelliteCollection satellites={satellites} handleDeleteSatellite={handleDeleteSatellite}/>} />
          <Route path="/collection/:satelliteId" element={<SingleSatellite />} />
          <Route path="/form" element={<SatelliteForm />} />
          <Route path="/search" element={<SearchSatellite satellites={satellites}/>} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;

