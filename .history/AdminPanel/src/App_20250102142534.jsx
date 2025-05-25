import { useState } from 'react'
import{Route,Routes} from 'react-router-dom'

import './App.css'
import Navbar from './componants/Navbar'
import SideBar from './componants/SideBar'
import AddDoctor from './componants/AddDoctor'

function App() {
  

  return (
    <div>
      <Navbar/>
      <div className='flex'>
      <SideBar/>
      <Routes>
      <Route path='/addDoctor' element={<AddDoctor/>}/>
      </Routes>
      </div>
    </div>
 
  )
}

export default App
