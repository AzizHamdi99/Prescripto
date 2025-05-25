import React, { useEffect } from "react";

function Profile() {

  useEffect(()=>{
    const fetchUserProfile=async()=>{
      const token=localStorage.getItem("token")
      if(!token){
        
      }


    }


  },[])


  return <div></div>;
}

export default Profile;
