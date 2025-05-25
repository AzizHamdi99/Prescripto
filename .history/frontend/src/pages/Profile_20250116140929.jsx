import axios from "axios";
import React, { useEffect,useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

function Profile() {
  const [user, setUser] = useState({}); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(()=>{
   /* const fetchUserProfile=async()=>{
      const token=localStorage.getItem("token")
      if(!token){
        setError('No token found. Please log in..!')
        setLoading(false)
        return

      }
      try{
        const respnse=await axios.get('http://localhost:3000/api/user/profile',
        {
          headers:{
          Authorization:`Bearer ${token}`

        }})
        //console.log(respnse)
        setUser(respnse.data.data)
        setLoading(false)

      }
      catch(error){
        console.error('Error fetching user data',error)
        setError("Failed fetching user data")
        setLoading(false)

      }


    }
    fetchUserProfile()*/


  },[])
  console.log(user)


  return(
    <div className="mt-10 ml-32">
      <img src={assets.uploadare} className="bg-black rounded-2xl w-[200px] h-[200px]" alt="" />
      <h1 className="text-[32px] text-[#1F2937] font-[500]">{user.name}</h1>
    <div className="h-[1px] w-[40%] my-2 mb-4 bg-[#ADADAD]"></div>
      <p className="text-[16px] text-[#797979] underline font[400]">CONTACT INFORMATION</p>
      <div className="flex gap-16 my-5">
        <div className="text-[18px] text-[#4B5563] font-[400] flex flex-col gap-2">
          <p >Email id:</p>
          <p>Phone:</p>
          <p>Address:</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[18px] text-[#3C96FF] font-[400]">{user.email}</p>
          <p className="text-[18px] text-[#3C96FF] font-[400]">{user.phone}</p>
          <p className="text-[18px] text-[#6B7280] font-[400]" >{user.address}</p>
        </div>
      </div>
      <p className="text-[16px] mt-1 text-[#797979] underline font[400]">BASIC INFORMATION</p>
      <div className="flex gap-16  my-5">

        <div className="text-[18px] text-[#4B5563] font-[400] flex flex-col gap-2">
          <p>Gender:</p>
          <p>Birthday:</p>
        </div>

        <div className="text-[18px] text-[#4B5563] font-[400] flex flex-col gap-2" >
          <p>{user.gender}</p>
          <p>{user.birthday}</p>
        </div>
      </div>
      


    </div>
  )
  
}

export default Profile;
