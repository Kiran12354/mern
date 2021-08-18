import React, { useState,useEffect } from "react";
const Contact = ()=>{

  const [userData,setUserData]=useState({name:"",email:"",phone:"",message:""});

   const userContact = async ()=>{
     try{
       const res =await fetch('/getdata',{
       method:"GET",
       headers:{
         "Content-Type":"application/json"
       }
       });
       const data=await res.json();
       setUserData({...userData,name:data.name,email:data.email,phone:data.phone});
       if(!res.status===200){
         const err=new Error(res.error);
         throw err;
       }
     }catch(err){
       console.log(err);
     }
   }

  useEffect(()=>{
    userContact();
  }, []);


  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setUserData({...userData,[name]:value});
  }

  // send data to backend
  const contactForm= async (e)=>{
    e.preventDefault();
    const{name,email,phone,message}=userData;
    const res = await fetch('/contact',{
       method:"POST",
       headers:{
         "Content-Type":"application/json"
       },
       body:JSON.stringify({
         name:name,email:email,phone:phone,message:message
       })
    });
    const data=await res.json();
    if(!data){
      console.log("message not found");
    }else{
      window.alert("message sent");
      setUserData(({...userData,message:""}));
    }
  }

    return(
     <>
       <div className="container-fluid">
       <br/>
         <div className="row">
         <div className="col-lg-4">
           <div className="card" style={{background:"grey",color:"white",textAlign:"center"}}>
            <div className="card-body">
              <h5>Phone</h5>
              <hr></hr>
              <h6>9743608536</h6>
            </div>
           </div>
         </div>

         <div className="col-lg-4">
           <div className="card" style={{background:"grey",color:"white",textAlign:"center"}}>
            <div className="card-body">
              <h5>email</h5>
              <hr></hr>
              <h6>kirankumar9380@gmail.com</h6>
            </div>
           </div>
         </div>

         <div className="col-lg-4">
           <div className="card" style={{background:"grey",color:"white",textAlign:"center"}}>
            <div className="card-body">
              <h5>Phone</h5>
              <hr></hr>
              <h6>9743608536</h6>
            </div>
           </div>
         </div>
         </div>
       </div>

       <section className="signup">
       <div className="row jumbotron bg-light">
         <div className="col-sm-2"></div>
         <div className="col-sm-8">
         <div className="container">
            <h2 className="form-title text-center">Get in Touch</h2>
            <hr></hr>
            <form className="contact-form" id="contact-form" method="POST">
              <div className="row">
                <div className="col-sm-4">
                <input type="text" className="form-control" name="name" id="name" onChange={handleInput} value={userData.name} placeholder="Your Name" autoComplete="off"/>
                </div>
                <div className="col-sm-4">
                <input type="email" className="form-control" name="email" id="email" onChange={handleInput} value={userData.email} placeholder="Your email" autoComplete="off"/>
                </div>
                <div className="col-sm-4">
                <input type="number" className="form-control" name="phone" id="phone" onChange={handleInput} value={userData.phone} placeholder="Your Phone Number" autoComplete="off"/>
                </div>
              </div>
              <br></br>
              <div className="row">
                <div className="col-sm-12">
                <textarea className="form-control" onChange={handleInput} value={userData.message} name="message" id="message" placeholder="Message"></textarea>
                </div>
              </div>
               <br></br>
              <button type="submit" onClick={contactForm} className="btn btn-info">Send Message</button>
               
            </form>
            </div>
         </div>
       </div>
       </section>
     </>
    );
}

export default Contact