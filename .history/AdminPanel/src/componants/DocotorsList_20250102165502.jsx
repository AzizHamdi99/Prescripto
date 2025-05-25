import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DocotorsList() {
const [data,setData]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response= await axios.get('http://localhost:3000/api/doctors/getAllDoctors')
                //console.log(response.data)
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
        <div>
            {data.map((item,index)=>(
                <dir >
                 <img src={`localhost:3000/${item.image}`} alt="" />
                 <p>{item.name}</p>
                 <p>{item.speciality}</p>
                 

                </dir>
            ))}


        </div>

      
    </div>
  )
}

export default DocotorsList
