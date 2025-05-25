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
          <div className="flex justify-between border-[1px] border-x-0 border-[#D1D1D1] py-6">
            <div className="flex ">
            <img className="w-[131px] h-[176px] bg-[#EAEFFF]" src={`http://localhost:3000/${doctor.image}`} alt="" />
            <div>
              <p>{doctor.name}</p>
              <p>{doctor.speciality}</p>
              <p>Address:</p>
              <p>{doctor.address}</p>
              <div>
              <p>Date&Time</p>
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
