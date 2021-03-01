import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Checkbox, Form } from "semantic-ui-react";
import Background from "../images/colorful.jpg";


const Register = (props) => {
    const [inputs,setInputs] = useState('');
    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
    const [mobile,setMobile] = useState('');
    


    useEffect(()=>{
     console.log("Form Inputs",inputs)
     setUser(inputs.user)
     setPassword(inputs.password)
     setEmail(inputs.email)
     setMobile(inputs.mobile)
     
    },[inputs])

 const inputHandler=(fields)=>({target}) => {
   console.log("from inp handler",fields)
     setInputs((state)=>({
         ...state,
         [fields]: target.value
     }))
 }

 const newRegister=(e)=> {
     
   e.preventDefault();
   if (user === "" 
   || password === ""
   || email === ""
   || mobile === "") {
       alert("All fields are Mandatory.")
   }
   else {
    let data = {
        "user": user,
        "password":password,
        "email":email,
        "mobile":mobile
    }
   
    console.log("Form Data on Submit",data)
    alert("New User Created Successfully.")
    setUser("")
    setPassword("")
    setEmail("")
    setMobile("")
 
      
     props.history.push("/")
   }
  
  
 }

    return (
  
      <div>
      <div class="ui attached message">
<div class="header">
  Welcome to our site!
</div>
<p>Fill out the form below to sign-up for a new account</p>
</div>
<form class="ui form attached fluid segment" onSubmit={newRegister}>
<div class="two fields">
  <div class="field">
    <label>User Name</label>
    <input 
     type="text"
     onChange={inputHandler('user')}
     value={user}
     autoFocus={true}
/>
  </div>
  <div class="field">
    <label>Password</label>
    <input 
     type="text"
     onChange={inputHandler('password')}
     value={password}
     maxLength= "8"
     type='password'
/>
  </div>
</div>
<div class="field">
  <label>Email</label>
  <input 
   type="text"
   onChange={inputHandler('email')}
   value={email}
   type='email'
/>
</div>
<div class="field">
  <label>Mobile</label>
  <input type="tel"  
   onChange={inputHandler('mobile')}
   value={mobile}
   maxLength= "10"
/>
</div>
<div class="inline field">
  <div class="ui checkbox">
    <input type="checkbox" id="terms"/>
    <label for="terms">I agree to the terms and conditions</label>
  </div>
</div>
<div class="ui blue submit button">Submit</div>
</form>
<Link to= "/">
<div class="ui bottom attached warning message">
<i class="icon help"></i>
Already signed up? <a href="#">Login here</a> instead.
</div>
</Link>
    </div>
    );
}

export default Register;