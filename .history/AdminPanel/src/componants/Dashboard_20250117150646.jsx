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
const latestAppointments = appointments
.sort((a, b) => {
    // Combine date and time fields into a single datetime string
    const dateTimeA = new Date(`${a.date}T${a.time}`);  // Combine date and time
    const dateTimeB = new Date(`${b.date}T${b.time}`);  // Combine date and time
    return dateTimeA - dateTimeB;  // Sort in descending order (latest first)
})
.slice(0, 5);

  return (
    <div className='p-10 bg-[#f8f9fd] w-full'>
        <div className='flex gap-3'>
            <div className='bg-white flex gap-2 items-center pr-16 pl-4 py-5 shadow-md rounded-[6px]'>
                <img className='bg-[#F6F8FF] rounded-[10px]' src={assets.doctor_icon} alt="" />
                <div>
                    <p className='text-[24px] text-[#515151] font-[500]'>{doctors.length}</p>
                    <p className='text-[16px] text-[#8893B0] font-[400]'>Doctors</p>
                </div>
            </div>
            <div className='bg-white flex gap-2 items-center pr-16 pl-4 py-5 shadow-md rounded-[6px]'>
                <img className='bg-[#F6F8FF] rounded-[10px]' src={assets.appointmentsicon} alt="" />
                <div>
                    <p className='text-[24px] text-[#515151] font-[500]'>{appointments.length}</p>
                    <p className='text-[16px] text-[#8893B0] font-[400]'>Apppointments</p>
                </div>
            </div>
            <div className='bg-white flex gap-2 items-center pr-16 pl-4 py-5 shadow-md rounded-[6px]'>
                <img className='bg-[#F6F8FF] rounded-[10px]' src={assets.patiensicon} alt="" />
                <div>
                    <p className='text-[24px] text-[#515151] font-[500]'>{users.length}</p>
                    <p className='text-[16px] text-[#8893B0] font-[400]'> Patients</p>
                </div>
            </div>

        </div>
        <div className="mt-6 border-[1px] border-[#D8D8D8] bg-white shadow-md rounded-[5px] w-[59%] ">
            <div className='flex gap-1 p-4 border-[1px] border-[#D8D8D8] rounded-t-[5px] '>
                <img src={assets.listicon} alt="" />
                <h2 className=" mt-2 text-[18px] text-[#323232] font-[500] mb-3">Latest Appointments</h2>
            </div>
            
            {latestAppointments.map((appointment, index) => {
                const user = users.find((u) => u.id === appointment.user_id);
                const doctor = doctors.find((d) => d.id === appointment.doctor_id);
                return (
                    <div key={index} className="bg-white p-4  flex gap-4 items-center border-[1px] border-[#D8D8D8]">
                        <div className="flex flex-col">
                            <p className="text-[18px] text-[#262626]">{user?.name}</p>
                            <p className="text-[14px] text-[#8893B0]">{doctor?.speciality}</p>
                            <div className='flex gap-1'>
                            <p className="text-[14px] text-[#8893B0]">{appointment.date} |</p>
                            <p className="text-[14px] text-[#8893B0]">{appointment.time}</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <img className="h-[40px] w-[40px] rounded-full" src={`http://localhost:3000/${doctor?.image}`} alt={doctor?.name} />
                            <p className="ml-2 text-[16px] text-[#515151]">{doctor?.name}</p>
                        </div>
                    </div>
                );
            })}
        </div>
      
    </div>
  )
}

export default Dashboard
