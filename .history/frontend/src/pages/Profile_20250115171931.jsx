import React, { useEffect } from "react";

function Profile() {
  const [user, setUser] = useState(null); 
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
        const respnse

      }


    }


  },[])


  return <div></div>;
}

export default Profile;
