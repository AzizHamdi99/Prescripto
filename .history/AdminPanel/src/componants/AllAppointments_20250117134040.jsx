import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BadgeX } from 'lucide-react';
function AllAppointments() {
const[appointments,setAppointments]=useState([])
const [users,setUsers]=useState([])
const [doctors,setDoctors]=useState([])

useEffect(() => {
    const fetchData = async () => {
        try {
            const appointmentsResponse = await axios.get('http://localhost:3000/api/appointment/getAllAppointments');
            const usersResponse = await axios.get('http://localhost:3000/api/user/getAllUsers');
            const doctorsResponse = await axios.get('http://localhost:3000/api/doctors/getAllDoctors');

            setAppointments(appointmentsResponse.data);
            setUsers(usersResponse.data);
            setDoctors(doctorsResponse.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    fetchData();
}, []);
useEffect(() => {
    console.log( appointments); 
}, [appointments]); 

const deleteAppointment=async(id)=>{
    try{
      const resonse=await axios.post('http://localhost:3000/api/appointment/deleteAppointment',{id:id})
      setAppointments((prev) => prev.filter((appointment) => appointment.id !== id));
      console.log(resonse)
    }catch(error){
      console.log(error)
    }

  }


  return (
    <div className='p-8 pr-12 bg-[#f8f9fd] w-full'>
        <p className='text-[22px] text-[#323232] font-[500] mb-4'>All Appointments</p>
        <div className='border-[1px] border-[#D8D8D8] rounded-[5px] bg-white '>
            <div className='border-[1px]  border-[#E1E1E1] p-5 grid grid-cols-[0.25fr_1fr_1fr_1fr_1fr_0.5fr] text-[18px] text-[#323232] font-[500]'>
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
                        <div className='text-[18px] text-[#696B80] font[400] border-[1px] border-[#E1E1E1] p-5 items-center grid grid-cols-[0.25fr_1fr_1fr_1fr_1fr_0.5fr_0.1fr]' >
                            <p>{item.id}</p>
                            <p>{user.name}</p>
                            <p>{doctor.speciality}</p>
                            <p>{item.time}</p>
                            <div className='flex gap-1 items-center'>
                                <img className='h-[52px] w-[52px] rounded-[50%] bg-[#EAEFFF]' src={`http://localhost:3000/${doctor.image}`} alt="" />
                                <p>{doctor.name}</p>

                            </div>
                            <p>{doctor.fees}$</p>
                            <BadgeX onClick={()=>deleteDoctor(item.id)} className='pointer' color="red" />  
                        
                        </div>
                    )
                   
                   

                 
                })}

            </div>

        </div>
      
    </div>
  )
}

export default AllAppointments
