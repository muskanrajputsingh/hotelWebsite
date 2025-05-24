import React, { useState } from 'react';
import './Registration.css';
// import Success from '../../components/Loader/Success';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
  // const [success, setSuccess] = useState(false);
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const postData = async (e) => {
    e.preventDefault();
    // setSuccess(false);
    const { name, email, password } = user;
     try {
      const res = await fetch("http://localhost:12000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
      });
  
      if(res.ok) {    
        setUser({ name: "", email: "", password: "" });
        toast.success("Registration Successfull",{duration:2000});
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      } 
      else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      toast.error("Invalid Username or Password")
    } 
  };
  

  return (
    <>
      <ToastContainer />
      <div className='bold-line'></div>
      <div className='container-reg'>
        <div className='window'>
          <div className='overlayyy'></div>
          <div className='contenttt'>
            <div className='welcome'>Hello There!</div>
            <div className='subtitle'>We're almost done. Before using our services you need to create an account.</div>
            <div className='input-fields'>
              <input type='text' name='name' required value={user.name} onChange={handleInputs} placeholder=' Username' className='input-line full-width' />
              <input type='email' name='email' required value={user.email} onChange={handleInputs} placeholder=' Email' className='input-line full-width' />
              <input type='password' name='password' required value={user.password} onChange={handleInputs} placeholder=' Password' className='input-line full-width' />
            </div>
            <div className='form-btn'>
              <button onClick={postData} className='full-width'>Create Account</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
