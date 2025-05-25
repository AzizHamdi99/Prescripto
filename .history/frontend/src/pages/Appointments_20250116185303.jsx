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

    <h1 className="text-[24px] font-medium text-[#4B5563] mt-20 mb-5">My appointments</h1>
    <div>
      {appointment.map((item)=>{
        const doctor=doctors.find((d)=>d.id==item.doctor_id)
        console.log(doctor)
        return(
          <div className="flex justify-between border-[1px] border-x-0 border-[#D1D1D1] py-5">
            <div className="flex gap-5">
            <img className="w-[131px] h-[176px] bg-[#EAEFFF]" src={`http://localhost:3000/${doctor.image}`} alt="" />
            <div className="flex flex-col">
              <p className="text-[#262626] text-[22px] font[500]">{doctor.name}</p>
              <p className="text-[#4B5563] text-[18px] font[400]">{doctor.speciality}</p>
              <p className="text-[18px] text-[#4B5563] font -[500]">Address:</p>
              <p className="text-[16px] text-[#4B5563] font -[400]">{doctor.address}</p>
              <div>
              <p className="text-[16px] text-[#4B5563] font -[400]">Date&Time</p>
              <div>
                <p>{item.date} |{item.time}</p>
              </div>
              </div>

            </div>
            </div>
            <div>
            <button>Pay Here</button>
            <button>Cancel appointment</button>

            </div>
            


          </div>
          
        )


      })}





    </div>
    
    <div className="mt-40">
    <Footer />
    </div>
  </div>;
}

export default Appointments;
