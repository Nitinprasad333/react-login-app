import React from 'react';
import DevLogo from '../images/cardimg.PNG'
const Devloper = () => {
    return (
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
        Currently Working in ARIT Jodhpur.For more Detail Drop mail or Contact on given Details.
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

    );
}

export default Devloper;