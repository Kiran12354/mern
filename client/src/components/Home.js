import React,{useState,useEffect} from "react";

const Home = ()=>{

    const [userName,setUserName]=useState('');
    const [show,setShow]=useState(false);

    const userHome = async ()=>{
      try{
        const res =await fetch('/getdata',{
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        }
        });
        const data=await res.json();
        setUserName(data.name);
        setShow(true);
      }catch(err){
        console.log(err);
      }
    }
 
   useEffect(()=>{
     userHome();
   }, []);

    return(
     <>
     <div className="jumbotron" style={{height:"100vh"}}>
     <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8" style={{textAlign:"center"}}>
        <br></br>
        <br></br>
        <br></br>
        <p className="pt-5">WELCOME</p>
        <h1>{userName}</h1>
        <h2>{show?'Happy, to see you back':'we are the MERN Developer'}</h2>
        </div>
     </div>
       
     </div>
     </>
    );
}

export default Home