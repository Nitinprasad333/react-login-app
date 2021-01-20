import React, { useEffect,useState } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { connect } from 'react-redux';

import Login from "./Login";
import App from "../App";
import Devloper from "./Devloper";
import IdleTimer from 'react-idle-timer';

const Routes = (props) => {


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
       {
         props.appToken !== null ? 
         <Switch>
           <Route exact path="/dashboard" component={App} />

           <Route exact path="/dev" component={Devloper} />
           </Switch>
         : ""

       }
        
      
          
    
      </Switch>
    </BrowserRouter>
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
  {  })(Routes);

