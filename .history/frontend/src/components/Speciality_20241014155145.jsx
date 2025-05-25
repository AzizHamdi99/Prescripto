import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { specialityData } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
function Speciality() {
  const{SetSpeciality}=useContext(AppContext)
  return (
    <div id='#speciality' className='my-20'>
        
            <h1 className='text-[40px] text-center text-[#1F2937] font-semibold'>Find by Speciality</h1>
            <p className='text-center text-[#4B5563] mt-4 text-[18px]'>Simply browse through our extensive list of trusted doctors,<br /> schedule your appointment hassle-free.</p>
            <div className='flex items-center justify-evenly mt-10 '>
              {specialityData.map((item,index)=>{
                return(
                  
                  <Link to={`/doctors/${item.speciality}`} onClick={()=>SetSpeciality(item.speciality)} className=' cursor-pointer hover:translate-y-[-10px] transition-all duration-500 flex-shrink-0'>
                    <img src={item.image} alt="" className='w-[125px] h-[125px] ' />
                  <p className='text-centre  text-[18px] font-normal mt-4'>{item.speciality}</p>
                  </Link>
                  

                )
              })}
            </div>
            
        

      
    </div>
  )
}

export default Speciality
