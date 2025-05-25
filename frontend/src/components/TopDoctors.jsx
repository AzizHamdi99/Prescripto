import React, { useContext, useState } from 'react'

//import { doctors } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import DoctorCard from './DoctorCard';

function TopDoctors() {

    //const [nb,setnb]=useState(10);
    const {select,setselect}=useContext(AppContext);
    
    const navigate=useNavigate()
   const {doctors}=useContext(AppContext);
   const handleMore=()=>{
    navigate('/doctors');
    setselect('doctors');

    
  }
   
  return (
    <div className=' mt-24'>
        <div className='text-center'>
        <h1 className='text-[40px] text-[#1F2937] font-semibold'>Top Doctors to Book</h1>

        <p className='text-[#4B5563] mt-4 text-[18px]'>Simply browse through our extensive list of trusted doctors.</p>
        
        </div>
        <div className='grid  grid-cols-5 gap-5 mt-8 '>
            {doctors.slice(0,10).map((item,index)=>{
                return(
                   
                    <DoctorCard id={item.id} name={item.name} image={item.image} speciality={item.speciality}/>
                )
            })}
        </div>
         <button onClick={handleMore} className=' px-16 py-3 rounded-[50px] bg-[#EAEFFF] mt-12 flex justify-center m-auto text-center '>More</button>:<></>
      
    </div>
  )
}

export default TopDoctors
