import React, { useEffect } from "react";

function Profile() {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(()=>{
    const fetchUserProfile=async()=>{
      const token=localStorage.getItem("token")
      if(!token){
        setError()

      }


    }


  },[])


  return <div></div>;
}

export default Profile;
