import { useState } from "react";
import { Link} from "react-router-dom";

const Header=()=>{

  const[btnName, setbtnName]=useState("Login");



  return(
    <div className= "header">
        <div className="logo-Container">
           <img className="image"
            src="https://media-assets.swiggy.com/fl_lossy,f_auto,q_auto,w_96,h_96/portal/m/logo_192x192.png"/>
        </div>
        <div className="nav-bar">
           <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <button className="login"
              onClick={()=>{
                btnName==="Login"
                ?setbtnName("Logout")
                :setbtnName("Login")
              }}>{btnName}</button>
            </ul>
        </div>
    </div>
  );
}

export default Header;