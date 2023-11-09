import React,{useEffect,useState} from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom';
import Navbar from './NavBar';
import SatelliteCollection from './SatelliteCollection';
import SingleSatellite from './SingleSatellite';
import SatelliteForm from './SatelliteForm';
import SearchSatellite from './SearchSatellite';
import axios from 'axios'; 
import LandingPage from './Home';
import Footer from './Footer';
function App() {
  const [satellites, setSatellites] = useState([]);
  const[page,setPage]=useState(1)
  const[limit,setLimit]=useState(10)

  function changeLimit(l){
    console.log("change limit")
    setLimit(l);
    setPage(1);
    getSatellites(1,l)
  }
   function handleNext(){
    getSatellites(page+1,limit);
    setPage(page+1);
   }
   function hanleBack (){
    if(page===1){
      return;
    }
    getSatellites(page-1,limit);
    setPage(page-1);
   }

   function getSatellites(page=1,limit=10){
    axios({
      method:"GET",
      url:"http://localhost:3000/satellites",
      params:{
        _page: page,
        _limit: limit,
      }
    })
    .then((res)=>{
      console.log(res)
      setSatellites(res.data)
    })
    .catch((e) => {});
   }
   useEffect(()=>{
    getSatellites(page,limit)
   },[page,limit])

  function handleDeleteSatellite(deletedSatellite) {
    const deleted=satellites.filter((satellite)=>
      satellite.id !== deletedSatellite.id
    )
    // setSatellites(satellites.filter((satellite) => satellite.id !== deletedSatellite.id));
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
           changeLimit={changeLimit}
           handleNext={handleNext}
           handleBack={hanleBack}
           page={page}
           limit={limit}
           
           />} />
          <Route path="/collection/:satelliteId" element={<SingleSatellite />} />
          <Route path="/form" element={<SatelliteForm />} />
          <Route path="/search" element={<SearchSatellite satellites={satellites}/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
    </div>
 );
}


export default App;

