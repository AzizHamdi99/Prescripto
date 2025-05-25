import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'
function Banner() {

    const navigate=useNavigate()
  return (
    <div className='grid grid-flow-col gap-1 my-28 bg-[#5F6FFF] rounded-[12px] relative '>
        <div className='mt-20 mb-10 ml-20'>
        <h1 className='text-[52px] font-semibold text-white'>Book Appointment </h1>
        <h1 className='text-[52px] font-semibold text-white'>With 100+ Trusted Doctors </h1>
        <button onClick={()=>navigate('/login')} className='flex items-center justify-between gap-4 mt-8 bg-white px-10 py-3 rounded-[50px] text-[#4B5563] text-[14px] font-normal'>
                <p>ِCreate Account</p>
                
                
            </button>
            </div>
            <img src={assets.appointment_img} alt="" className='w-[420px] h-[374px] absolute top-[-20px] right-14 ' />
    </div>
  )
}

export default Banner

