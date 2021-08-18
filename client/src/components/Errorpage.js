import React from "react";
import { NavLink } from "react-router-dom";

const Errorpage = ()=>{
    return(
     <>
     <div className="jumbotron" style={{height:"100vh"}}>
     <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8" style={{textAlign:"center"}}>
        <br></br>
        <br></br>
        <br></br>
        <h1>Error 404</h1>
        <h2>we are sorry, page not found!</h2>
        <p>The page you are looking for might have been removed
        had its name changed or is temporarily unavailable.
        </p>
        <NavLink to="/">
        <button className="btn btn-outline-warning">Go to Home</button>
        </NavLink>
        </div>
     </div>
       
     </div>
     </>
    );
}

export default Errorpage;