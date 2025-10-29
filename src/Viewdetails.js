import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Viewdetails(){
  const {studentid} =useParams();
  const [validData, SetValidData]=useState({});

  useEffect(()=>{
        fetch("http://localhost:3001/students/"+studentid)
        .then((res)=>res.json())
        .then((data)=>SetValidData(data))
        .catch((err)=>console.log(err.message))
  },[]);
   
   return(
       <>
         <div className="container">
            <h2>Students Details</h2>
            { 
             validData && <div className="details">
            <p><strong>iD :</strong> {validData.id}</p>
            <p><strong>Name :</strong> {validData.name}</p>
            <p><strong>Email :</strong> {validData.email}</p>
            <p><strong>Location :</strong> {validData.location}</p>
            <p><strong>Mobile-No :</strong> {validData.mobileNo}</p> <br/> 
            </div>
            }
          
            <Link to={"/StudentTable"} className="btn btn-back">Back</Link>
         </div>
       </>
   );
};