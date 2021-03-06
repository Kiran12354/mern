import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/download.png";
import { UserContext } from "../App";


export const RenderMenu=()=>{
  const{state,dispatch}=useContext(UserContext);
  if(state){
    return(
      <>
  <li className="nav-item">
    <NavLink className="nav-link" to="/">Home</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/about">About</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/contact">Contact</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/logout">Logout</NavLink>
  </li>
      </>
    );
  }else{
    return(
      <>
  <li className="nav-item">
    <NavLink className="nav-link" to="/">Home</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/login">Login</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/signup">Registration</NavLink>
  </li>
  </>
    );
  }

}

export const Navbar = ()=>{
return(
     <>
  <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <NavLink className="navbar-brand" to="/">
     <img src={logo} alt="logo"/>
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <RenderMenu/>
      
    </ul>
  </div>
</nav>
     </>
    );
}

export default Navbar