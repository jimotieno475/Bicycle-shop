// import React, { useState, useEffect } from 'react';

// function SatelliteForm() {
//   const [formData, setFormData] = useState({
//     id: '',
//     country:'',
//     mass:'',
//     launcher:'',
//     launch_date:'',
//     image: '',
//     // Add other satellite fields
//   });

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     // Send a POST request to add the new satellite to the server
//   };

//   return (
//     <div>
//       <h1>Add a Satellite</h1>
//       <form onSubmit={handleFormSubmit}>
//         {/* Form fields for satellite data */}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default SatelliteForm;
import React, { useState } from 'react';

function SatelliteForm() {
  const [formData, setFormData] = useState({
    id: '',
    country: '',
    mass: '',
    launcher: '',
    launch_date: '',
    image: '',
    // Add other satellite fields
  });
  // const [items, setItems] = useState([]);

  // function handleAddItems(addedItem){
  //     const add = [...items, addedItem]
  //     setItems(add)
  // }
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Send a POST request to add the new satellite to the server
    const newSatellite = {
      id: formData.id,
      country: formData.country,
      mass: formData.mass,
      launcher: formData.launcher,
      launch_date: formData.launch_date,
      image: formData.image,
      // Add other satellite fields
    };

    // Assuming you have an API endpoint to post the new satellite data
    // Make an API call here to send the data to the server
    fetch('http://localhost:3000/satellites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSatellite),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response, e.g., show a success message
        console.log('Satellite added:', data);
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message
        console.error('Error adding satellite:', error);
      });

    // Reset the form after submission
    setFormData({
      id: '',
      country: '',
      mass: '',
      launcher: '',
      launch_date: '',
      image: '',
      // Reset other satellite fields as needed
    });
  };

  return (
    <div id='form'>
      <h1>Add a Satellite</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Satellite ID:
          <input
            type="text"
            placeholder='insert ID eg. VELOX-II'
            id="id"
            value={formData.id}
            onChange={(e) => setFormData({ ...formData, id: e.target.value })}
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            placeholder='insert country eg. Kenya'
            name="country"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
          />
        </label>
        <label>
          Mass:
          <input
            type="numder"
            placeholder='insert mass eg.13 '
            name="mass"
            value={formData.mass}
            onChange={(e) => setFormData({ ...formData, mass: e.target.value })}
          />
        </label>
        <label>
          Launcher:
          <input
            type="text"
            placeholder='insert launcher eg. PSLV-C2'
            name="launcher"
            value={formData.launcher}
            onChange={(e) => setFormData({ ...formData, launcher: e.target.value })}
          />
        </label>
        <label>
          LauncherDate:
          <input
            type="text"
            placeholder='insert date in format dd/mm/yy'
            name="launcher_date"
            value={formData.launch_date}
            onChange={(e) => setFormData({ ...formData, launch_date: e.target.value })}
          />
        </label>
        <label>
          Image:
          <input
            type="url"
            placeholder='image url eg. https://space.skyrocket.de/img_sat/seeds__1.jpg'
            name="image"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          />
        </label>
        {/* Add other form fields for mass, launcher, launch_date, image, and other satellite fields */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SatelliteForm;
