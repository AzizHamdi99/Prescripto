import React, { useState } from 'react'
import { assets } from '../../../frontend/src/assets/assets_frontend/assets'
import { RxDashboard } from "react-icons/rx";
import { SlCalender } from "react-icons/sl";
import { MdAddChart } from "react-icons/md";
import { PiUserListFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';


function SideBar() {
  const [selected,setSelected]=useState("dashbsoard")
  const navigate=useNavigate();
  return (
    <div className='flex flex-col py-7 w-72 text-[18px] border-r-[#BEBEBE] border-[1px] h-[1000px]'>
        <div onClick={()=>navigate("/dashboard")} className={selected=="dashboard"?'flex items-center gap-2  px-7 py-2 bg-[#F2F3FF] cursor-pointer border-r-4 border-[#5F6FFF]':'flex items-center gap-2  px-7 py-2 cursor-pointer '}>
        <RxDashboard />
        <p>Dashboard</p>
        </div>
        <div onClick={()=>navigate("/allAppointments")} className='flex items-center gap-2 px-7 py-2  cursor-pointer' >
        <SlCalender />
        <p>Appointments</p>
        </div>
        <div onClick={()=>navigate("/addDoctor")} className='flex items-center gap-2 px-7 py-2  cursor-pointer'>
        <MdAddChart />
        <p>Add Doctor</p>
        </div>
        <div onClick={()=>navigate("/doctorsList")}  className='flex items-center gap-2 px-7 py-2  cursor-pointer'>
        <PiUserListFill /> 
        <p>Doctors List</p>
        </div>
      
    </div>
  )
}

export default SideBar
