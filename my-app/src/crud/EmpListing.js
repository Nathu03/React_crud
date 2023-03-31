import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'


const Emplisting = () => {
    const[empdata, empdatachange]=useState(null);
    const navigate=useNavigate();

    const loadDetail=(id)=>{
        navigate("employee/detail/"+id)
    }

    const loadEdit=(id)=>{
        navigate("employee/edit/"+id)
    }

    const loadDelete=(id)=>{
        if(window.confirm('Do you want to remove?')){
            fetch("http://localhost:8000/employee/"+id, {
            method: "DELETE"
        }).then((res) => {
            alert("Delete successfully!")
            window.location.reload();
        }).catch((err) => {
            console.log(err.message)
        })
        }
    }


    useEffect(()=>{
        fetch("http://localhost:8000/employee").then((res)=>{
            return res.json();
        }).then((resp)=>{
            empdatachange(resp);
        }).catch((err)=>{
            console.log(err.message);
        })
    }, [])
  return (
    <div className='container'>
        <div className='card'>
            <div className='card-title'>
                <h2>Employee Listing</h2>
            </div>
            <div className='card-body'>
                <div>
                    <Link className='btn btn-success' to='employee/create'>Add New (+)</Link>
                </div>
                <table className='table table-bordered'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Phone</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {empdata &&
                            empdata.map(item =>(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td><a onClick={()=>{loadDetail(item.id)}} className='btn btn-primary py-2 me-2'>view</a>
                                        <a onClick={()=>{loadEdit(item.id)}} className='btn btn-warning py-2 me-2'>Edit</a>
                                        <a onClick={()=>{loadDelete(item.id)}} className='btn btn-danger py-2 me-2'>Delete</a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Emplisting