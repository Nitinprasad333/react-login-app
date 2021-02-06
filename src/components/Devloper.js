import React,{useEffect} from 'react';
import DevLogo from '../images/cardimg.PNG';
import backIcon from '../images/back.png'
import Header from './Header';
import {Session} from './Session';
import {getPostsAction,LogoutAction} from '../redux/reducers/reduxActions/actions';
import { connect } from 'react-redux';

const Devloper = (props) => {

  useEffect(() => {
    console.log("props in Devcomp",props)
    const isSession = Session();
    if (!isSession) {
      let Logout = "Logout";
      props.LogoutAction();
      props.getPostsAction(Logout);
    }
    
  }, [props]);

    return (
      <div>
           
           <Header 
        data={props}/>
             
      {/* <div class="row" style={{ backgroundColor: "teal",height:40 }}>
        <div class="col-8">
       
         
        </div>
        
        <div class="col-4">
          <div
            style={{
              display: "flex",
              color: "#000",
              justifyContent: "flex-end",
            }}
            onClick={logOut}
          >
        <img src={backIcon} width="30px" height="30px" /> &nbsp;
          </div>
        </div>
      </div> */}
    
        <div class="ui link cards" style={{display:'flex',justifyContent:'center',marginTop:'40px'}}>
  <div class="card">
    <div class="image">
      <img src={DevLogo}/>
    </div>
    <div class="content">
      <div class="header">Nitin Prasad</div>
      <div class="meta">
        <a>React Js Developer (8875829050)</a>
      </div>
      <div class="description">
        Currently Working at ARIT Jodhpur.For more Detail Drop mail or Contact on given Details.
      </div>
    </div>
    <div class="extra content">
      <span class="right floated">
      nitinprasad333@gmail.com
      </span>
      <span>
        <i class="user icon"></i>
       {/* 8875829050 */}
      </span>
    </div>
  </div>
  </div>
  </div>

    );
}

const mapStateToProps = state =>{
  return {

  }
}

export default connect(mapStateToProps, { LogoutAction,getPostsAction })(Devloper);