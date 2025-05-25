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
    <div>
        <p>All Doctors</p>
        <div className='grid grid-cols-5 gap-5 '>
            {data.map((item,index)=>(
                <dir className='border-[1px] border-[#C9D8FF]'>
                 <img className='w-[180px] h-[216px] bg-[#EAEFFF] rounded-t-[12px]' src={`http://localhost:3000/${item.image}`} alt="" />
                 <p>{item.name}</p>
                 <p>{item.speciality}</p>
                 

                </dir>
            ))}


        </div>

      
    </div>
  )
}

export default DocotorsList
