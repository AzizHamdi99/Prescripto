import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AllAppointments() {
const[appointments,setAppointments]=useState([])

useEffect(()=>{
    const getAllApointments=async()=>{
        try{
            const response=await axios.get('http://localhost:3000/api/appointment/getAllAppointments')
            setAppointments(response.data)
         //   console.log(response.data)
            console.log(appointments)
        }catch(eroor){
            console.log(eroor)
        }
    }
    getAllApointments()

},[])
useEffect(() => {
    console.log( appointments); // Log updated state
}, [appointments]); // Log whenever the state changes

  return (
    <div>
        <p>All Appointments</p>
        <div>
            <div>
                <p>#</p>
                <p>Patient</p>
                <p>Department</p>
                <p>Age</p>
                <p>Date & Time</p>
                <p>Doctor</p>
                <p>Fees</p>
            </div>
            <div>
                {appointments.map((item)=>{
                    
                 
                })}

            </div>

        </div>
      
    </div>
  )
}

export default AllAppointments
