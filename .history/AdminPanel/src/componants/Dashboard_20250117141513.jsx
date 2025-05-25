import React, { useEffect, useState } from 'react'
import { assets } from '../../../frontend/src/assets/assets_frontend/assets'
import axios from 'axios'
function Dashboard() {
    const [nbusers,setNbUsers]=useState(0)
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


    },[])


  return (
    <div>
        <div>
            <div>
                <img src={assets.doctor_icon} alt="" />
                <div>
                    <p>{nbDoctors}</p>
                    <p>Doctors</p>
                </div>
            </div>
            <div>
                <img src={assets.appointmentsicon} alt="" />
                <div>
                    <p>{nbAppointments}</p>
                    <p>Apppointments</p>
                </div>
            </div>
            <div>
                <img src={assets.patiensicon} alt="" />
                <div>
                    <p>{nbusers}</p>
                    <p>Patients</p>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Dashboard
