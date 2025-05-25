import React from 'react'
import { assets } from '../../../frontend/src/assets/assets_frontend/assets'

function Navbar() {
  return (
    <div className='flex items-center justify-between px-6 py-4 pb-5 border-b-[#BEBEBE] border-[1px]  '>
        <div className='flex items-center justify-center'>
        <img src={assets.logo} alt="" className=' w-40 mr-2'  />
         <p className=' px-4 border-black border 1 rounded-xl font-light text-xs relative top-2'>Admin</p>
                </div>
        <span className='py-2 px-8 rounded-3xl bg-[#5F6FFF] text-white'>Logout</span>


      
    </div>
  )
}

export default Navbar
