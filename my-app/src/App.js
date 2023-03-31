import React from 'react'
import Nopage from  './crud/Page404'
import EmpListing from './crud/EmpListing'
import EmpAdd from './crud/EmpCreate'
import EmpEdit from './crud/EmpEdit'
import EmpDetail from './crud/EmpDetails'
import { Route, Routes } from 'react-router-dom'


export default function App() {
  return (
<>
<div className='container-fluid'>
  <div className='row'>
    <Routes>
    <Route exact path='/'>
        <Route index element={<EmpListing/>}/>
        <Route exact path='/employee/create' element={<EmpAdd/>}/>
        <Route exact path='/employee/detail/:empid' element={<EmpDetail/>}/>
        <Route exact path='/employee/edit/:empid' element={<EmpEdit/>}/>
        <Route path="*" element={<Nopage/>} />
      </Route>
    </Routes>
    </div>
  </div>
</>
  )
}
