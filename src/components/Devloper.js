import React from 'react';
import DevLogo from '../images/cardimg.PNG';
import Logo from '../images/back.png'

const Devloper = (props) => {

  const logOut = () => {
     props.history.push("/dashboard");
  };

    return (
      <div>
           
      <div class="row" style={{ backgroundColor: "teal",height:40 }}>
        <div class="col-8">
          <h2 style={{ color: "whitesmoke" }}>React CRUD App</h2>  
         
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
        <img src={Logo} width="30px" height="30px" /> &nbsp;
          </div>
        </div>
      </div>
    
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

export default Devloper;
