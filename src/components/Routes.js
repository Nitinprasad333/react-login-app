import React, { useEffect,useState,Suspense } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { connect } from 'react-redux';

import Login from "./Login";
import App from "../App";
import Devloper from "./Devloper";
import IdleTimer from 'react-idle-timer';
import Header from "./Header";
import Register from "./Register";


const homeComponent = React.lazy(()=> import('./Login'))
const registerComponent = React.lazy(()=> import('./Register'))
const dashComponent = React.lazy(()=> import('../App'))
const headComponent = React.lazy(()=> import('./Header'))
const devComponent = React.lazy(()=> import('./Devloper'))

const Routes = (props) => {

  

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={homeComponent} />
        <Route exact path="/signup" component={registerComponent} />
       {
         props.appToken !== null ? 
         <Switch>
           <Route exact path="/dashboard" component={dashComponent} />
           <Route exact path="/head" component={headComponent} />
           <Route exact path="/dev" component={devComponent} />
          
           </Switch>
         : ""

       }

      </Switch>
     
    </BrowserRouter>
    </Suspense>
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

