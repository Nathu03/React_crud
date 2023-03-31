import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const EmpDetails = () => {
    const{empid}=useParams();

    const[empdata, empdataChange]=useState({});

useEffect(()=>{
    fetch("http://localhost:8000/employee/"+empid).then((res)=>{
        return res.json();
    }).then((resp)=>{
        empdataChange(resp);
    }).catch((err)=>{
        console.log(err.message);
    })
}, []);

  return (
    <div className='container'>
    <div className='card'>
        <div className='card-title'>
            <h2>Employee Listing</h2>
        </div>
        <div className='card-body'></div>

    { empdata && 
    <div>
        <h2>The Employee name is : {empdata.name} ({empdata.id})</h2>
        <h3>Contact Details</h3>
        <h5>Email is : {empdata.email}</h5>
        <h5>Phone is : {empdata.phone}</h5>
        <h5>Active status : {empdata.active}</h5>
        <Link className="btn btn-primary" to="/"> Back to Home </Link>
    </div>
    }
    </div>
    </div>
  )
}

export default EmpDetails