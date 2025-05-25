import React from "react";
import Footer from "../components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import axios from'axios'
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Appointments() {

  const [appointment,setAppointments]=useState([])
  const {doctors}=useContext(AppContext)

  useEffect(()=>{
      const getUserAppointment=async()=>{
        const id=localStorage.getItem("id")
        console.log(id)
        try{
          const response=await axios.get('http://localhost:3000/api/appointment/getUserAppointment',
          {headers: 
            {
            Authorization: `Bearer ${id}`, // Pass the user ID in the Authorization header or a custom header
          }})
          console.log(response.data)
          setAppointments(response.data)
        }catch(error){
          console.log(error)
        }
      }
      getUserAppointment()


  },[])



  return <div className="mx-32">

    <h1 className="text-[24px] font-medium text-[#4B5563] mt-20">My appointments</h1>
    <div>
      {appointment.map((item)=>{
        const doctor=doctors.find(id==item.doctor_id)
        console.log(doctor)


      })}





    </div>
    
    <div className="mt-40">
    <Footer />
    </div>
  </div>;
}

export default Appointments;
