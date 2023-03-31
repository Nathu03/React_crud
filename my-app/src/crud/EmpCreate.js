import React from 'react'
import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const EmpCreate = () => {

    const [id, idChange]=useState('');
    const [name, nameChange]=useState('');
    const [email, emailChange]=useState('');
    const [phone, phoneChange]=useState('');
    const [active, activeChange]=useState(true);
    const[validation, valChange]=useState(false);
    const navigate=useNavigate();



    const handleSubmit=(e) =>{
        e.preventDefault();
        const empdata={id,name,email,phone,active};


        fetch("http://localhost:8000/employee",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(empdata)
    }).then((res)=>{
        alert("Saved successfully!")
        navigate("/")
        }).catch((err)=>{
            console.log(err.message)
        })
    }

  return (
    <div className='row'>
    <div className='offset-lg-3 col-lg-6'>
    <form className='container' onSubmit={handleSubmit}>
        <div className='card' style={{textalign:"left"}}>
            <div className='card-title'>
                <h2>Employee Create</h2>
            </div>
            <div className='card-body'>
                <div className='row'>

                <div className='col-lg-12'>
                        <div className='form-group'>
                            <label>ID</label>
                            <input value={id} onChange={e=>idChange(e.target.value)} disabled='disabled' className='form-control'></input>
                        </div>
                    </div>

                    <div className='col-lg-12'>
                        <div className='form-group'>
                            <label>Name</label>
                            <input required value={name} onMouseDown={e=>valChange(true)} onChange={e=>nameChange(e.target.value)} className='form-control'></input>
                            {name.length==0 && validation && <span className='text-danger'>Enter the name</span>}
                        </div>
                    </div>

                    <div className='col-lg-12'>
                        <div className='form-group'>
                            <label>Email</label>
                            <input required value={email} onChange={e=>emailChange(e.target.value)} className='form-control'></input>
                            {email.length==0 && validation && <span className='text-danger'>Enter the email</span>}
                        </div>
                    </div>

                    <div className='col-lg-12 py-2'>
                        <div className='form-group'>
                            <label>Phone</label>
                            <input required value={phone} onChange={e=>phoneChange(e.target.value)} className='form-control'></input>
                            {phone.length==0 && validation && <span className='text-danger'>Enter the phone no</span>}
                        </div>
                    </div>

                    <div className='col-lg-12 py-3'>
                        <div className='form-check'>
                            <input value={active} onChange={e=>activeChange(e.target.value)} type='checkbox' className='form-check-input'></input>
                            <label className='form-check-label'>Is Active</label>
                        </div>
                    </div>

                    <div className='col-lg-12'>
                        <div className='form-group'>
                            <button className='btn btn-success me-2' type='submit'>Save</button>
                            <Link to='/' className='btn btn-warning me-2'>Back</Link>
                       </div>
                    </div>

                </div>
            </div>
           
        </div>
        </form>
        </div>
    </div>
  )
}

export default EmpCreate