import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Camera } from 'lucide-react';
function DocotorsList() {
const [data,setData]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response= await axios.get('http://localhost:3000/api/doctors/getAllDoctors')
                console.log(response.data)
                setData(response.data);

            }catch(error){
                console.error('eroorr fetching daata',error)
            }
            
            
        }   
        fetchData()
     },[])
     

  return (
    
    <div className='p-10'>
        <p className='text-[#323232] text-[22px] font-semibold mb-8'>All Doctors</p>
        <div className='grid grid-cols-5 gap-4 gap-y-6 cursor-pointer '>
            {data.map((item,index)=>(
                <div className='border-[1px] border-[#C9D8FF] rounded-t-[12px]'>
                 <img className='w-full h-[216px] bg-[#EAEFFF] rounded-t-[12px]' src={`http://localhost:3000/${item.image}`} alt="" />
                 <div className='p-3 flex'>
                    <div>
                    <p  className='text-[#1F2937] text-[18px] font-medium'>{item.name}</p>
                    <p className='text-[#4B5563] text-[14px] font-normal'>{item.speciality}</p>
                 </div>
                 <BadgeX color="red" />
                 </div>

                </div>
            ))}


        </div>

      
    </div>
  )
}

export default DocotorsList
