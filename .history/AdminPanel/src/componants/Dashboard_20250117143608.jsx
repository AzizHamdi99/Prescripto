import React, { useEffect, useState } from 'react'
import { assets } from '../../../frontend/src/assets/assets_frontend/assets'
import axios from 'axios'
function Dashboard() {
   /* const [nbusers,setNbUsers]=useState(0)
    const [nbDoctors,setNbDoctors]=useState(0)
    const [nbAppointments,setNbAppointments]=useState(0)

    useEffect(()=>{
        const fetchData=async()=>{
            try{
            const appointmentsFetch=axios.get('http://localhost:3000/api/appointment/nbAppointments')
            const userFetch=axios.get('http://localhost:3000/api/user/nbUsers')
            const doctorsFetch=axios.get('http://localhost:3000/api/doctord/nbDoctrs')
            setNbAppointments(appointmentsFetch)
            setNbDoctors(doctorsFetch)
            setNbUsers(userFetch)
            
        }catch(error){
            console.log("error fetching data",error)
        }
        }


    },[])*/
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


  return (
    <div className='p-10 bg-[#f8f9fd] w-full'>
        <div className='flex gap-3'>
            <div className='bg-white flex gap-2 items-center pr-16 pl-4 py-5'>
                <img src={assets.doctor_icon} alt="" />
                <div>
                    <p>{doctors.length}</p>
                    <p>Doctors</p>
                </div>
            </div>
            <div className='bg-white flex gap-2 items-center pr-16 pl-4 py-5'>
                <img src={assets.appointmentsicon} alt="" />
                <div>
                    <p>{appointments.length}</p>
                    <p>Apppointments</p>
                </div>
            </div>
            <div className='bg-white flex gap-2 items-center pr-16 pl-4 py-5'>
                <img src={assets.patiensicon} alt="" />
                <div>
                    <p>{users.length}</p>
                    <p>Patients</p>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Dashboard
