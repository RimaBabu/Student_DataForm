import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function CreateStudent(){
    const[id, SetId]=useState("");
    const[name, SetName]=useState("");
    const[email, SetEmail]=useState("");
    const[location, Setlocation]=useState("");
    const[mobileNo, SetmobileNo]=useState("");
    const[validation, Setvalidation]=useState(false);

     const navigate = useNavigate("");

    const eventHandling =(e)=>{

          e.preventDefault();
          const studentdata = {name,id,email,location,mobileNo}
          console.log(studentdata);
          fetch("http://localhost:3001/students",{
            method: 'POST',
              headers:{
                 "content-type":"application/json"
          },
          body:JSON.stringify(studentdata)
            })
        .then((res) => {
            alert("your data is successfully stored")
            navigate("/StudentTable");
        })
        .catch((err)=> console.log(err.message) )
        }
       return(
       <>
        <div className="container"> 
            <h2>create new Student</h2>
            <form onSubmit={eventHandling}>
            <label htmlFor="id">ID :</label>
            <input type="text" id="id" name="id" required value={id} onChange={(e)=>SetId(e.target.value)} onMouseDown={()=>Setvalidation(true)}/>
            {id.length===0 && validation && <span className="errorMsg">*please enter your Id</span> }

             <label htmlFor="name">Name :</label>
            <input type="text" id="name" name="name" required value={name} onChange={(e)=>SetName(e.target.value)}
            onMouseDown={()=>Setvalidation(true)}/> 
            {name.length===0 && validation && <span className="errorMsg" >*Please Enter your Name</span>}

            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" required value={email} onChange={(e)=>SetEmail(e.target.value)} onMouseDown={()=>Setvalidation(true)}/> 
            {email.length===0 && validation && <span className="errorMsg" >*Please Enter your Email</span>}

            <label htmlFor="location">Location :</label>
            <input type="text" id="location" name="location" required value={location} onChange={(e)=>Setlocation(e.target.value)} onMouseDown={()=>Setvalidation(true)}/>
            {location.length===0 && validation && <span className="errorMsg" >*Please Enter your Location</span>}

             <label htmlFor="number">Mobile_No :</label>
            <input type="number" id="number" name="number" required value={mobileNo} onChange={(e)=>SetmobileNo(e.target.value)} onMouseDown={()=>Setvalidation(true)}/> 
            {mobileNo.length===0 && validation && <span className="errorMsg" >*Please Enter your valid Mobile-No</span>}<br/><br/>
            

            <button className="btn btn-save">Save </button>
            <Link to={"/StudentTable"} className="btn btn-back">Back</Link>
            </form>
        </div>
       </>
   );
};