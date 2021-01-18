import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { connect } from 'react-redux';

import Login from "./Login";
import App from "../App";

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
       {
         props.appToken !== null ?   <Route exact path="/dashboard" component={App} />

         : <Route exact path="/" component={Login} />

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

