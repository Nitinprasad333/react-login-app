import React, { useEffect,useState,Suspense } from "react";
import { BrowserRouter, Route, Switch, Link,Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import {LogoutAction,getPostsAction} from '../redux/reducers/reduxActions/actions'

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

const Routes =  (props) => {
  console.log(" Route PRops",props)

//   useEffect(() => { 
// console.log("Session Data props SESSION",props.sessionData)
  
//   },[props]);

  

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter>
      <Switch>
        <React.StrictMode>

        <Route exact path="/" component={homeComponent} />
        <Route exact path="/signup" component={registerComponent} />
      
       {
         props.appToken !== null   ? 
         <Switch>
           <Route exact path="/dashboard" component={dashComponent} />
           <Route exact path="/head" component={headComponent} />
           <Route exact path="/dev" component={devComponent} />
          
           </Switch>
         :   <Redirect to ="/"/>
         

       }
   </React.StrictMode>
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
    sessionData:state.countRed.sessionData
  };
};


export default connect(mapStateToProps, 
  {LogoutAction,getPostsAction})(Routes);

