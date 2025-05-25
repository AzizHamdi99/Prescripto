import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

function DoctorCard({id,name,image,speciality}) {
    const navigate=useNavigate()
    const {show,setShow}=useContext(AppContext);
    const click=()=>{
      navigate(`/appointment/${id}`);
      setShow(8);
    }
  return (
    <div>
         <div onClick={click} className='border-[1px] border-[ #C9D8FF] rounded-lg cursor-pointer hover:translate-y-[-10px] transition-all duration-500 flex-shrink-0'>
                        <img src={`http://localhost:3000/${item.image}`}alt="" className='bg-[#EAEFFF] rounded-t-lg' />
                        <div className='ml-3 my-2'>
                            <div className='flex gap-2 items-center  '>
                                <p className='w-2 h-2 bg-[#0FBF00] rounded-[50%]'></p>
                            <p  className='text-[15px] text-[#0FBF00] font-medium'>Available</p>
                            </div>
                        

                        <p className='text-[22px] font-medium text-[#1F2937]'>{name}</p>
                        <p className='text-[15px] font-normal text-[#4B5563]'>{speciality}</p>
                        </div>
                    </div>
      
    </div>
  )
}

export default DoctorCard
