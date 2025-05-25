import { useState } from 'react'
import{Route,Routes} from 'react-router-dom'

import './App.css'
import Navbar from './componants/Navbar'
import SideBar from './componants/SideBar'
import AddDoctor from './componants/AddDoctor'
import DocotorsList from './componants/DocotorsList'
import AllAppointments from './componants/AllAppointments'
import Dashboard from './componants/Dashboard'

function App() {
  

  return (
    <div>
      <Navbar/>
      <div className='flex'>
      <SideBar/>
      <Routes>
      <Route path='/addDoctor' element={<AddDoctor/>}/>
      <Route path='/doctorsList' element={<DocotorsList/>}/>
      <Route path='/allAppointments' element={<AllAppointments/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      </div>
    </div>
 
  )
}

export default App
