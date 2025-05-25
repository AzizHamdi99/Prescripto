import React from "react";
import Footer from "../components/Footer";
import { useState } from "react";
import { useEffect } from "react";

function Appointments() {

  const [appointment,setAppointments]=useState([])

  useEffect(()=>{
      const getUserAppointment=async()=>{
        
      }


  },[])



  return <div className="mx-32">

    <h1 className="text-[24px] font-medium text-[#4B5563] mt-20">My appointments</h1>
    
    <div className="mt-40">
    <Footer />
    </div>
  </div>;
}

export default Appointments;
