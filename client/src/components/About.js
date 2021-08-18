import React, { useEffect, useState } from "react";
import img from "../images/log.png";
import {useHistory} from "react-router-dom";
const About = ()=>{
  const history=useHistory();
  const [userData,setUserData]=useState({});

   const callAboutPage = async ()=>{
     try{
       const res =await fetch('/about',{
       method:"GET",
       headers:{
         Accept:"application/json",
         "Content-Type":"application/json"
       },
       credentials:"include"
       });
       const data=await res.json();
       setUserData(data);
       if(!res.status===200){
         const err=new Error(res.error);
         throw err;
       }
     }catch(err){
       console.log(err);
       history.push('/login');
     }
   }

  useEffect(()=>{
    callAboutPage();
  }, []);

    return(
     <>
     <div className="row">
     <div className="col-sm-1"></div>
     <div className="col-sm-10">
     <div className="card">
         <form method="GET">
         
           <div className="row">
            <div className="col-md-4">
              <img src={img} alt="profile"/>
            </div>
            <div className="col-md-6">
            <br></br>
              <h5>{userData.name}</h5>
              <h6>{userData.work}</h6>
              <p className="mt-3 mb-5">RANKINGS: 1/10</p>

              <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
              <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Timeline</a>
              </li>
              </ul>
            </div>
            <div className="col-md-2">
            <br></br>
              {/* <input type="text" className="btn btn-sm btn-info btn-default" style={{float:"left"}} onClick={} value="edit profile"/> */}
            </div>
            </div>

            <div className="row">
             <div className="col-md-4 p-3">
               <p>WORK LINK</p>
               <a href="#" target="_blank">Youtube</a><br/>
               <a href="#" target="_blank">Instagram</a><br/>
               <a href="#" target="_blank">Facebook</a><br/>
               <a href="#" target="_blank">Twitter</a><br/>
               <a href="#" target="_blank">Linkedin</a>
             </div>

             <div className="col-md-7">
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                 <div className="row">
                  <div className="col-md-6">
                   <label>User Id</label>
                  </div>
                  <div className="col-md-6">
                    <p>1234567890</p>
                  </div>
                 </div>

                 <div className="row">
                  <div className="col-md-6">
                   <label>Name</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData.name}</p>
                  </div>
                 </div>

                 <div className="row">
                  <div className="col-md-6">
                   <label>Email</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData.email}</p>
                  </div>
                 </div>

                 <div className="row">
                  <div className="col-md-6">
                   <label>Phone</label>
                  </div>
                  <div className="col-md-6">
                    <p>{userData.phone}</p>
                  </div>
                 </div>
                </div>

                <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                 <div className="row">
                  <div className="col-md-6">
                   <label>Experience </label>
                  </div>
                  <div className="col-md-6">
                    <p>Expert</p>
                  </div>
                 </div>

                 <div className="row">
                  <div className="col-md-6">
                   <label>Total Projects</label>
                  </div>
                  <div className="col-md-6">
                    <p>134</p>
                  </div>
                 </div>
                </div>
              </div>

              
            </div>
            
            </div>

            
            
         </form>
         </div>
       </div>
       
     </div>
     </>
    );
}

export default About