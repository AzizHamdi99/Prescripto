import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
        <p>All Doctors</p>
        <div className='grid grid-cols-5 gap-4 gap-y-6 '>
            {data.map((item,index)=>(
                <div className='border-[1px] border-[#C9D8FF] rounded-t-[12px]'>
                 <img className='w-full h-[216px] bg-[#EAEFFF] rounded-t-[12px]' src={`http://localhost:3000/${item.image}`} alt="" />
                 <div className='p-3'>
                    <p  className='text-[#1F2937] text-[18px] font-medium'>{item.name}</p>
                 <p>{item.speciality}</p>
                 </div>

                </div>
            ))}


        </div>

      
    </div>
  )
}

export default DocotorsList
