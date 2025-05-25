import React, { useEffect } from 'react'
import axios from 'axios'
function DocotorsList() {

    useEffect(()=>{
        const fetchData=async()=>{
            const response= axios.get('http://localhost:3000/api/doctors/'')
        }   
     },[])


  return (
    <div>

      
    </div>
  )
}

export default DocotorsList
