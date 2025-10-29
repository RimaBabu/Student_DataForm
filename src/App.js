import './App.css';
import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import CreateStudent from './CreateStudent';
import Viewdetails from   './Viewdetails';
import EditStudent from   './EditStudent';
import StudentTable from  './StudentTable';
 
export default function App(){
   return(
      
        <>
        <div className=''>
        <BrowserRouter>
        <Routes>
          <Route path="/StudentTable" element={<StudentTable/>}></Route>
          <Route path="/CreateStudent" element={<CreateStudent/>}></Route>
          <Route path="/ViewDetails/:studentid" element={<Viewdetails/>}></Route>
          <Route path="/EditStudent/:studentid" element={<EditStudent/>}></Route>
        </Routes>
        </BrowserRouter>
        </div>
        </>
   );
};


