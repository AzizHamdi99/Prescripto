import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'
function Hero() {
  const navigate=useNavigate();
  return (
    <div className='grid grid-flow-col gap-1 bg-[#5F6FFF] rounded-[12px] pt-24 px-20 '>
        <div className='mt-20'>
            <h1 className='text-5xl text-white mb-4 font-semibold'>Book Appointment <br />
            With Trusted Doctors</h1>
            <div className='flex items-center gap-3 mt-6'>
                <img src={assets.group_profiles} className='w-20' alt="" />
                <p className='text-white'>Simply browse through our extensive list of trusted doctors,<br /> 
                schedule your appointment hassle-free.</p>
            </div>
            <button onClick={()=>navigate('/doctors')} className='flex items-center justify-between gap-4 mt-8 bg-white px-6 py-3 rounded-2xl text-[#595959] text-[18px]'>
                <p>Book appointment</p>
                <img src={assets.arrow_icon} alt="" />
                
            </button>

        </div>
        <img src={assets.header_img} alt=""  />
        
    
      
    </div>
  )
}

export default Hero
