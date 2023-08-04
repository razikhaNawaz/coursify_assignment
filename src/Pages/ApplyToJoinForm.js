import React, { useState } from 'react';
import './ApplyToJoinForm.css'; // Create a CSS file for styling

const ApplyToJoinForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save the form data to localStorage
    localStorage.setItem('candidateData', JSON.stringify(formData));
    console.log('Form Data:', formData);
    // Add your logic here to send the form data to the server or perform any other action.
  };

  return (
    <div className="apply-form">
      <h3>Create your candidate profile</h3>
      <p>Let 1000+ technology & product companies like Amazon, Swiggy, Dream11, Gojek, and Grab compete to hire you!</p>
      <div className="form-group">
        <button className="linkedin-btn">Continue with LinkedIn</button>
        <button className="google-btn">Continue with Google</button>
      </div>
      <div className="or-divider">OR</div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleInputChange} value={formData.email} />
        </div>
        <div className="form-group">
          <label htmlFor="full-name">Full name</label>
          <input type="text" id="fullName" onChange={handleInputChange} value={formData.fullName} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleInputChange} value={formData.password} />
        </div>
        <button type="submit" className="apply-btn">Apply</button>
      </form>
      <p className="signin-link">Already have an account? <a href="#">Sign in</a></p>
      <button onClick={onClose} className="close-btn">Close</button>
    </div>
  );
};

export default ApplyToJoinForm;
