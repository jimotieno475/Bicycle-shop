
import React, { useState } from 'react';

function SatelliteForm() {
  const [formData, setFormData] = useState({
    id: '',
    image: '',
    name: '',
    price: ''
   
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Send a POST request to add the new satellite to the server
    const newSatellite = {
      id: formData.id,
      image: formData.image,
      name:formData.name,
      price:formData.price
    
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
      image: '',
      name: '',
      price: ''
      // Reset other satellite fields as needed
    });
  };

  return (
    <div id='form'>
      <p>Only for the owners use</p>
      <h1>Add a Product </h1>
      <form onSubmit={handleFormSubmit}>
        <label>
           ID:
          <input
            type="text"
            placeholder='insert ID eg. 1'
            id="id"
            value={formData.id}
            onChange={(e) => setFormData({ ...formData, id: e.target.value })}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            placeholder='insert country eg. Mountain Bicycle'
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </label>
    
        <label>
          Price:Ksh
          <input
            type="text"
            placeholder='insert price eg. 20000'
            name="price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            placeholder='image url eg. https://lh5.googleusercontent.com/p/AF1QipOe9WtkQl-DWXISz00iXko1VoTCzwXpUMmEu2ko=w600-h988-p-k-no'
            name="image"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          />
        </label>
        
        {/* Add other form fields for mass, launcher, launch_date, image, and other satellite fields */}
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default SatelliteForm;
