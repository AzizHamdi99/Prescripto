import React, { useEffect } from 'react'
import axios from 'axios'
function DocotorsList() {

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response= await axios.get('http://localhost:3000/api/doctors/getAllDoctors')
                console.log(response.data)

            }catch(error){
                console.error('eroorr fetching daata',error)
            }
            
            
        }   
        fetchData()
     },[])


  return (
    <div>

      
    </div>
  )
}

export default DocotorsList
