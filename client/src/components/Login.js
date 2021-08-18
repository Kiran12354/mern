import React, { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import logimg from "../images/log.png"
import { UserContext } from "../App";

const Login = ()=>{

 const {state,dispatch} = useContext(UserContext);

const history = useHistory();
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');

const loginUser= async(e)=>{
  e.preventDefault();

  const res = await fetch('/signin', {
    method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
    body:JSON.stringify({
      email:email,password:password
    })
  });
  const data=await res.json();
  if(res.status===400 || !data){
     window.alert("Invalid Credentials");
  }else{
    dispatch({type:"USER",payload:true});
    alert("login successful");
    history.push("/");
  }
}

    return(
     <>
        <section className="signup">
       <div className="row jumbotron bg-light">
         <div className="col-sm-1"></div>
         <div className="col-sm-5">
         <div className="container">
            <h2 className="form-title text-center">Login</h2>
            <hr></hr>
            <form className="login-form" id="login-form" method="POST">
              <div className="form-group row">
               <label className="col-sm-2 col-form-label"><i className="zmdi zmdi-email zmdi-hc-2x"></i></label>
               <div className="col-sm-10">
               <input type="email" className="form-control" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" autoComplete="off"/>
               </div>
              </div>

              <div className="form-group row">
               <label className="col-sm-2 col-form-label"><i className="zmdi zmdi-lock zmdi-hc-2x"></i></label>
               <div className="col-sm-10">
               <input type="password" className="form-control" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Confirm your Password" autoComplete="off"/>
               </div>
              </div>
               
              <div className="form-group row">
              <div className="col-sm-2"></div>
               <div className="col-sm-6">
               <input type="submit" name="login" id="login" onClick={loginUser} className="btn btn-info form-control" value="login"/>
               </div>
              </div>
            </form>
            </div>
         </div>
         <div className="col-sm-5"> 
         <div className="row">
           <div className="col-1"></div>
           <div className="col-11">
           <br/>
           <figure>
              <img src={logimg} style={{height:"300px",width:"550px"}} alt="registration pic"/>
            </figure>
            <br></br>
            <NavLink to="/signup" style={{float:"right"}}>Create Account</NavLink>
           </div>
         </div>
         </div>
       </div>
       </section>
     </>
    );
}

export default Login