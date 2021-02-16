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
      
            <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#333",
        height: "100vh",
        // backgroundImage: `url(${Background})`,
      }}
    >
      <div
        style={{
          alignContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        
         {/* <div>
         <img src={logo} className="App-logo" alt="logo" />
      </div> */}
        

        <h1 style={{ textAlign: "center", color: "silver" }}>Register</h1>
        <Form onSubmit={newRegister}>
          <Form.Field>
            <label style={{ color: "#fff" }}>User Name</label>
            <input
              placeholder="*User Name"
              onChange={inputHandler('user')}
              value={user}
              style={{ borderRadius: "20px",borderColor:'brown' }}
              autoFocus={true}
              type="text"
            />
          </Form.Field>

          <Form.Field>
            <label style={{ color: "#fff" }}>Password</label>
            <input
              placeholder="*Password"
              onChange={inputHandler('password')}
              value={password}
              style={{ borderRadius: "20px",borderColor:'brown' }}
              type="password"
              maxLength= "8"
            />
          </Form.Field>

          {/* <Form.Field>
            <label style={{ color: "#fff" }}>Email</label>
            <input
              placeholder="Email"
              onChange={inputHandler('email')}
              value={email}
              style={{ borderRadius: "20px" }}
              type="mail"
            />
          </Form.Field> */}

          <Form.Field>
            <label style={{ color: "#fff" }}>Mobile</label>
            <input
              placeholder="*Mobile"
              onChange={inputHandler('mobile')}
              value={mobile}
              style={{ borderRadius: "20px",borderColor:'brown' }}
              type="tel"
              maxLength= "10"
            />
          </Form.Field>
                                     
          <Button
            type="submit"
            class="ui primary button"
            style={{ marginLeft: "30%" }}
          >
            Signup
          </Button>
          <Form.Field style={{textAlign:'center'}}>
            <Link to= "/">
            <label>Already have Account,Signin ?</label>
            </Link>
        
          </Form.Field>
        </Form>
      </div>
    </div>
       
    );
}

export default Register;
