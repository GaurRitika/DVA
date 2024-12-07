// import React from "react";import  {useState}  from 'react';z
import  {useState}  from 'react';
import { Link } from "react-router-dom";
import "./Login.css";
import toast from 'react-hot-toast';
import { post } from "../services/Endpoint";
import {   useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SetUser, SetToken } from '../redux/AuthSlice';





const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [value , setValue] = useState({
    email:"" , 
    password:""
  })
  const handleChange = (e)=>{
    setValue({
      ...value ,
      [e.target.name]:e.target.value
    })
  }
 
  const handleSubmit = async (e) => {
    try {
        e.preventDefault();
        const response = await post('/auth/login', value);
        if (response.status === 200) {
            dispatch(SetUser(response.data.user));
            dispatch(SetToken(response.data.token));
            toast.success(response.data.message);
            navigate('/dashboard'); // Changed from '/Home'
        }
    } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.message || 'Login failed');
    }
};


  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back</h2>
        <p>Login to access your account</p>
        <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
  <label>Email Address</label>
  <input 
    type="email" 
    name="email"  // Added name attribute
    placeholder="Enter your email" 
    required 
    onChange={handleChange}
    value={value.email}
  />
</div>
<div className="form-group">
  <label>Password</label>
  <input 
    type="password" 
    name="password"  // Added name attribute
    placeholder="Enter your password" 
    required 
    onChange={handleChange}
    value={value.password}
  />
</div>

          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="register-link">
          Do not have an account? <Link to="/register">Register Now</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
