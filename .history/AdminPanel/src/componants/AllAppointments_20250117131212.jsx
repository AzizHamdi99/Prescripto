import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AllAppointments() {
const[appointments,setAppointments]=useState([])
const [users,setUsers]=useState([])
const [doctors,setDoctors]=useState([])

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

    const getAllUsers=async()=>{
        try{
            const response=await axios.get('http://localhost:3000/api/user/getAllUsers')
            setUsers(response.data)
            console.log(users)
        }catch(error){
            console.log(error)
        }
    }
    const getAllDoctors=async()=>{
        try{
            const response= await axios.get('http://localhost:3000/api/doctors/getAllDoctors')
            //console.log(response.data)
            setDoctors(response.data);

        }catch(error){
            console.error('eroorr fetching daata',error)
        }
        
        
    }  
    getAllApointments()
    getAllUsers()
    getAllDoctors()

},[])
useEffect(() => {
    console.log( appointments); // Log updated state
}, [appointments]); // Log whenever the state changes

  return (
    <div className='p-8 pr-12 bg-[#f8f9fd] w-full'>
        <p className='text-[22px] text-[#323232] font-[500]'>All Appointments</p>
        <div className='border-[1px] border-[#D8D8D8] rounded-[5px] bg-white '>
            <div className='border-[1px] border-[#E1E1E1] p-5'>
                <p>#</p>
                <p>Patient</p>
                <p>Department</p>
                <p>Date & Time</p>
                <p>Doctor</p>
                <p>Fees</p>
            </div>
            <div>
                {appointments.map((item)=>{
                    const user=users.find((u)=>u.id==item.user_id)
                    const doctor=doctors.find((d)=>d.id==item.doctor_id)
                    return(
                        <div>
                            <p>{item.id}</p>
                            <p>{user.name}</p>
                            <p>{doctor.speciality}</p>
                            <p>{item.time}</p>
                            <div>
                                <img src={`http://localhost:3000/${doctor.image}`} alt="" />
                                <p>{doctor.name}</p>

                            </div>
                            <p>{doctor.fees}</p>
                        
                        </div>
                    )
                   
                   

                 
                })}

            </div>

        </div>
      
    </div>
  )
}

export default AllAppointments
