import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const history=useNavigate();
    const[user,setUser]=useState({
        email:"",
        password:""
    })
    let name,value;
    const handleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value});
        console.log({...user,[name]:value});
    }
  
    const postData = async (e) => {
        e.preventDefault();
        const { email, password } = user;
    
        try {
            const res = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
    
            const data = await res.json();
            if (res.ok) {
                window.alert("Login successful");
                localStorage.setItem('currentUser', JSON.stringify(data.user));
                console.log("Login successful");
                history('/');
                window.location.reload();
            } else {
                window.alert("Invalid email or password");
                console.log("Invalid email or password");
            }
        } catch (error) {
            window.alert("Error occurred while logging in");
            console.log("Error occurred while logging in", error);
        }
    }

    
  return (
    <>
<div className='bold-line'></div>
 <div className='container-reg'>
  <div className='window'>
    <div className='overlayyy'></div>
    <div className='contenttt'>
      <div className='welcome'>Hello There!</div>
      <div className='subtitle'>We're almost done. Before using our services you need to create an account.</div>
      <div className='input-fields'>

        <input type='email' name='email' value={user.email} onChange={handleInputs} placeholder=' Email' class='input-line full-width'></input>
       
        <input type='password' name='password' value={user.password} onChange={handleInputs} placeholder=' Password' class='input-line full-width'></input>
      </div>
      <div className='form-btn'><button type='submit' onClick={postData} className=' full-width'>Login Here</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Login