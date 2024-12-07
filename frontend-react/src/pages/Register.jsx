// import React from "react";
import  {useState}  from 'react';
import { Link } from "react-router-dom";
import toast from 'react-hot-toast';
import { post } from '../services/Endpoint'; // Ensure this is your API call function
import { useNavigate } from 'react-router-dom';
import "./Register.css";

const Register = () => {

  const navigate = useNavigate();
  const [value, setValue] = useState({
    email: "",
    FullName: "",
    password: "",
    profile: null // Initialize profile state for file input
  });

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value: inputValue } = e.target;

    // Handle file input separately
    if (name === 'profile') {
      setValue({
        ...value,
        profile: e.target.files[0] // Store the file object
      });
    } else {
      setValue({
        ...value,
        [name]: inputValue
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const formData = new FormData(); // Create a new FormData object
      formData.append('FullName', value.FullName); // Append FullName
      formData.append('email', value.email);       // Append email
      formData.append('password', value.password); // Append password

      // Append profile file if it exists
      if (value.profile) {
        formData.append('profile', value.profile); // Append the file
      }

      const response = await post('/auth/Register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type
        },
      });

      const data = response.data; // Get response data
      if (response.status === 200) {
        navigate('/login'); // Redirect to login on success
        toast.success(data.message); // Show success message
      }
    } catch (error) {
      // Handle errors and show appropriate messages
      if (error.response) {
        toast.error(error.response.data.message || 'Registration failed');
      } else {
        toast.error('An unexpected error occurred. Please try again later.');
      }
      console.error(error);
    }
  };


  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Create Account</h2>
        <p>Join us for a journey to holistic wellness</p>
        <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
  <label>Full Name</label>
  <input 
    type="text" 
    name="FullName"  // Added name attribute
    placeholder="Enter your full name" 
    required 
    onChange={handleChange} 
  />
</div>
<div className="form-group">
  <label>Email Address</label>
  <input 
    type="email" 
    name="email"  // Added name attribute
    placeholder="Enter your email" 
    required 
    onChange={handleChange} 
  />
</div>
<div className="form-group">
  <label>Password</label>
  <input 
    type="password" 
    name="password"  // Added name attribute
    placeholder="Create a password" 
    required 
    onChange={handleChange} 
  />
</div>

          <div className="input-group">
          <label>Profile Picture</label>
            <input 
              type="file" 
              name="profile" 
              onChange={handleChange} // Handle file input
            />
          </div>
            
          {/* <div className="form-group"> */}
            {/* <label>Confirm Password</label>
            <input type="password" placeholder="Confirm your password" required /> */}
          {/* </div> */}
          <button type="submit" className="register-btn">Register</button>
        </form>
        <p className="login-link">
          Already have an account? <Link to="/login">Login Here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
