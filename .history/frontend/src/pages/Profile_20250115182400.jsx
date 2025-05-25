import axios from "axios";
import React, { useEffect,useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

function Profile() {
  const [user, setUser] = useState({}); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(()=>{
    const fetchUserProfile=async()=>{
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
    fetchUserProfile()


  },[])
  console.log(user)


  return(
    <div>
      <img src={assets.uploadare} className="bg-black" alt="" />
      <h1>{user.name}</h1>
      <hr />
      <p></p>
      


    </div>
  )
  
}

export default Profile;
