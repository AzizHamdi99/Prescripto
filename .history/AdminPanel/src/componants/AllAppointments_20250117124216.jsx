import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AllAppointments() {
const[appointments,setAppointments]=useState([])

useEffect(()=>{
    const getAllApointments=async()=>{
        try{
            const response=await axios.get('http://localhost:3000/api/appointment/getAllAppointments')
            setAppointments(response)
         //   console.log(response.data)
            console.log(appointments.data)
        }catch(eroor){
            console.log(eroor)
        }
    }
    getAllApointments()

},[])

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

            </div>

        </div>
      
    </div>
  )
}

export default AllAppointments
