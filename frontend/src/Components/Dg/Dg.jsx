import React, { useState } from 'react'; 
import './Dg.css'; 
const Dg = () => {
  const [formData, setFormData] = useState({
    isAdmin: false,
    password: '',
    testName: '',
    testDescription: '',
    price: '',
    image: null,
    normalRange: '',
    abnormalRange: ''
  });

  const fetchData = async () => {
    try {
      const form = new FormData(); // Create a new FormData object

      // Append each form field to the FormData object
      for (const key in formData) {
        form.append(key, formData[key]);
      }

      const response = await fetch('http://localhost:8000/test/post', {
        method: 'POST',
        body: form, // Send FormData directly
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Test Added:', formData);
    fetchData(); // Call fetchData to submit the form
  };
  
  return (
    <div className="a4-container">
      <div className="add-test-form-container">
        <h1>Add Test</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="checkbox"
              id="isAdmin"
              name="isAdmin"
              checked={formData.isAdmin}
              onChange={handleChange}
            />
            <label htmlFor="isAdmin">Are you an admin?</label>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="testName">Test Name:</label>
            <input
              type="text"
              id="testName"
              name="testName"
              value={formData.testName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="testDescription">Test Description:</label>
            <textarea
              id="testDescription"
              name="testDescription"
              value={formData.testDescription}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          

          <div className="form-group">
            <label htmlFor="normalRange">Normal Range:</label>
            <input
              type="text"
              id="normalRange"
              name="normalRange"
              value={formData.normalRange}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="abnormalRange">Abnormal Range:</label>
            <input
              type="text"
              id="abnormalRange"
              name="abnormalRange"
              value={formData.abnormalRange}
              onChange={handleChange}
              required
            />
          </div>

          <button className='ag' type="submit">Add Test</button>
        </form>
      </div>
    </div>
  );
};

export default Dg;
