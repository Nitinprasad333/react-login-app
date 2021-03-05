import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import Background from "../images/colorful.jpg";
import {saveTokenAction } from '../redux/reducers/reduxActions/actions';
import { connect } from 'react-redux';
import logo from '../../src/logo.svg';
import '../../src/App.css'
import { Link } from "react-router-dom";
import TransitionGroup from 'react-transition-group';
import userIcon from '../images/avatar.png'


const Login = (props) => {
  let [token, setToken] = useState("");
  let [user, setUser] = useState("");
  let [password, setPassword] = useState("");
  let [term, setTerm] = useState(false);

  useEffect(() => {
    console.log("props", props.history, token);
    console.log(isClientOrServer())

    if (props.appToken !== null) {
      //localStorage.setItem("token", token);
      props.history.push("/dashboard");
      // localStorage.setItem("LogToken",props.appToken)
    }
    else{
      props.history.push("/");
    }
  }, [props.appToken]);

  const isClientOrServer = () => {
    return (typeof window !== 'undefined' && window.document) ? 'client side' : 'server side';
  };

  const userNameHandler = (e) => {
    setUser(e.target.value);
  };

  const passwordHandler = (e) => {
    
    setPassword(e.target.value);

  }
  // const agreeHandler=(e,{data})=>{
  // console.log("checkobox",e,data)
  // }

  const agreeHandler = (e, { checked }) => {
    console.log("Click", checked);
    setTerm(checked);
  };

  const loginHandler =  () => {
    console.log("logincall")
    
    let  regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (regex.exec(password) === null) {
      alert('invalid password!')
    }
    else {
      console.log("valid");
    }
  

    if (term) {
      if (user === "" && password === "") {
        alert("Enter Inputs to Login");
      }
     else if (user === "nitin" && password === 'Nit@1234') {
        const tokDat = "_" + Math.random().toString(36).substr(2, 9);
        console.log("tooookekn 1", tokDat);         
        setToken(tokDat);
        props.saveTokenAction(tokDat);
  
        // alert("Login Successfully")
        setUser("");
        setPassword("");
        console.log("tooookekn 2", token);
        const userInfo = {
          username: 'nitin',
          token:tokDat
        }
        sessionStorage.setItem("userSession",JSON.stringify (userInfo))

        for(let i= 0; i < sessionStorage.length; i++) {
          const key =sessionStorage.key(i);
          console.log("Session Data Key",`${sessionStorage.getItem(key)}`)
        }

      }    
       else  if (user !== "nitin" ) {
          
          alert("Invalid Userid");
        }
        else  if ( password !== '123') {
          
          alert("Invalid Password");
        }
    }

    else {
      alert("Please select T&C")
    }
    
    
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
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
        
         <div style={{display:'flex',justifyContent:'center'}}>
        
      </div>
 
        <h1 style={{ textAlign: "center", color: 'silver',fontSize:32, }}>
        <i class="react icon" style={{color:'teal'}}></i>Login </h1>
      
        <Form onSubmit={ loginHandler }>
          <Form.Field>
         
            <label style={{ color: "#fff" }}>
            <i class="user circle icon" style={{color:'teal'}}></i>User Name</label>
            <input
              placeholder="User Name"
              onChange={userNameHandler}
              value={user}
               style={{ borderRadius: "12px",borderColor:'teal'}}
              autoFocus={true}
              //style={{outlineStyle:'none',borderColor:'none',border:'none'}}

            />
          </Form.Field>
          <Form.Field>
            <label style={{ color: "#fff" }}>
            <i class="lock icon" style={{color:'teal'}}></i>Password</label>
            <input
              placeholder="Password"
              onChange={passwordHandler}
              value={password}
              style={{ borderRadius: "12px",borderColor:'teal' }}
              maxLength="8"
              // style={{outlineStyle:'none',borderColor:'none',border:'none',color:'navy'}}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              label="I agree to the Terms and Conditions"
              onClick={agreeHandler}
              
            />
            
          </Form.Field>
          <div class="ui teal  button" onClick={loginHandler} style={{marginLeft:'25%'}}
          >Submit</div>
          <Form.Field style={{textAlign:'center'}}>
            <Link to= "/signup">
            <label>Don't have Account,Signup ?</label>
            </Link>
        
          </Form.Field>
        </Form>
      </div>

    </div>
  );
};

const mapStateToProps = state => {
  return {
    count:state.countRed.counter,
    devName:state.countRed.devName,
    title:state.countRed.title,
    appToken:state.countRed.appToken,
  
  };
};


export default connect(mapStateToProps, 
  { saveTokenAction })(Login);

