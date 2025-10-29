import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function StudentTable(){

  const StudentView = (id)=>{
     
      navigate("/ViewDetails/" + id);
      console.log(id);
  }

  const updateDetails =(id)=>{

      navigate("/EditStudent/" + id);
      console.log(id);
  }
  const Deletedetails =(id)=>{
     
    if(window.confirm("Are you sure you want to delete ")){
       fetch("http://localhost:3001/students/" + id,{
            method: 'DELETE'})
            .then((res) => {
            window.location.reload();
        })
        .catch((err)=> console.log(err.message) )   

      };
    }    
  const [Students, SetStudents] = useState("");
  const navigate = useNavigate("");
  useEffect(() =>{
      fetch('http://localhost:3001/students')
      .then((response)=> response.json())
      .then((data)=> 
             SetStudents(data)).catch((err)=> 
            console.log(err.message))
     },[])
    return(
       <>
             <div className="container" >
                 <h2>Student Records</h2>
                 <div className="table-container ">
                   <Link to={"/CreateStudent"} className="btn btn-add">Add New Student</Link><br/><br/>
                   <table>
                     <thead>
                       <tr>
                          <th>Id</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Location</th>
                          <th>Mobile-No</th>
                          <th>Actions</th>
                       </tr>
                     </thead>
                     <tbody>
                      { 
                      Students&&Students.map((item)=>(
                        <tr key={item.id}>
                         <td>{item.id}</td>
                         <td>{item.name}</td>
                         <td>{item.email}</td>
                         <td>{item.location}</td>
                         <td>{item.mobileNo}</td>
                         <td>
                           <button onClick ={()=>StudentView(item.id)} className=" btn btn-info">View</button>
                           <button onClick ={()=>updateDetails(item.id)} className=" btn btn-primary">Edit</button>
                           <button  onClick ={()=>Deletedetails(item.id)} className=" btn btn-danger">Delete</button>
                         </td>
                       </tr>
                        
                      ))
                       }
                       
                     </tbody>
                   </table>
         
                 </div>

                 </div>
       </>
   );
};