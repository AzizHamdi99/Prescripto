import axios from "axios";
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
        const respnse=await axios.get('http://localhost:3000/api/user/profile',headers:{
          Authorization:`Bearer${token}`

        })
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


  return <div></div>;
}

export default Profile;
