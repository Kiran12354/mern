import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import reg from "../images/reg1.jpg"
const Signup = ()=>{
  const history=useHistory();
  const [user,setUser]=useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  });

  const handleInputs=(e)=>{
    var name=e.target.name;
    var value=e.target.value;
    setUser({...user, [name]:value});
  }


  const postData =async (e)=>{
      e.preventDefault();
      const {name,email,phone,work,password,cpassword} = user;

      const res= await fetch("/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name:name,email:email,phone:phone,work:work,password:password,cpassword:cpassword
        })
      });

      const data = await res.json();
      if(res.status===422 || !data){
        window.alert("Invalid Registration");
      }else{
        window.alert("successfull registration");
        history.push("/login");
      }
  }

    return(
     <>
       <section className="signup">
       <div className="row jumbotron bg-light">
         <div className="col-sm-1"></div>
         <div className="col-sm-5">
         <div className="container">
            <h2 className="form-title text-center">Sign up</h2>
            <hr></hr>
            <form className="register-form" id="register-form" method="POST">
              <div className="form-group row">
               <label for="inputPassword" className="col-sm-2 col-form-label"><i className="zmdi zmdi-account zmdi-hc-2x"></i></label>
               <div className="col-sm-10">
               <input type="text" className="form-control" name="name" id="name" placeholder="Enter your name" onChange={handleInputs} value={user.name} autoComplete="off"/>
               </div>
              </div>

              <div className="form-group row">
               <label for="inputPassword" className="col-sm-2 col-form-label"><i className="zmdi zmdi-email zmdi-hc-2x"></i></label>
               <div className="col-sm-10">
               <input type="email" className="form-control" name="email" id="email" placeholder="Enter your email" onChange={handleInputs} value={user.email} autoComplete="off"/>
               </div>
              </div>

              <div className="form-group row">
               <label for="inputPassword" className="col-sm-2 col-form-label"><i className="zmdi zmdi-phone zmdi-hc-2x"></i></label>
               <div className="col-sm-10">
               <input type="number" className="form-control" name="phone" id="phone" placeholder="Enter your Phone Number" onChange={handleInputs} value={user.phone} autoComplete="off"/>
               </div>
              </div>

              <div className="form-group row">
               <label for="inputPassword" className="col-sm-2 col-form-label"><i className="zmdi zmdi-slideshow zmdi-hc-2x"></i></label>
               <div className="col-sm-10">
               <input type="text" className="form-control" name="work" id="work" placeholder="Enter your Profession" onChange={handleInputs} value={user.work} autoComplete="off"/>
               </div>
              </div>

              <div className="form-group row">
               <label for="inputPassword" className="col-sm-2 col-form-label"><i className="zmdi zmdi-lock zmdi-hc-2x"></i></label>
               <div className="col-sm-10">
               <input type="password" className="form-control" name="password" id="password" placeholder="Enter your password" onChange={handleInputs} value={user.password} autoComplete="off"/>
               </div>
              </div>

              <div className="form-group row">
               <label for="inputPassword" className="col-sm-2 col-form-label"><i className="zmdi zmdi-lock zmdi-hc-2x"></i></label>
               <div className="col-sm-10">
               <input type="password" className="form-control" name="cpassword" id="work" placeholder="Confirm your Password" onChange={handleInputs} value={user.cpassword} autoComplete="off"/>
               </div>
              </div>
               
              <div className="form-group row">
              <div className="col-sm-2"></div>
               <div className="col-sm-6">
               <input type="submit" name="signup" id="signup" className="btn btn-info form-control" onClick={postData} value="register"/>
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
           <br/>
           <br/>
           <figure>
              <img src={reg} style={{height:"300px",width:"550px"}} alt="registration pic"/>
            </figure>
            <br></br>
            <NavLink to="/login" style={{float:"right"}}>I'm already Registered</NavLink>
           </div>
         </div>
         </div>
       </div>
       </section>
     </>
    );
}

export default Signup