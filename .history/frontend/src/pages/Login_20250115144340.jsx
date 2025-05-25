import React, { useEffect, useState } from "react";
import axios from "axios";
function Login() {
const [login,setlogin]=useState("signUp");
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [phone,setPhone]=useState("")
const [address,setAddress]=useState("")
const [birthday,setBirthday]=useState("")
const [gender,setGender]=useState("Male")
const [password,setPassword]=useState("")

const addUser=async(e)=>{
  e.preventDefault()
  const data={
    name:name,
    email:email,
    phone:phone,
    address:address,
    birthday:birthday,
    gender:gender,
    password:password
  }
  try{
    const response=await axios.post('http://localhost:3000/api/user/register',data)
    console.log("user added ",response.data)

  }
  catch(eroor){
console.log("errro adding user")
  }


}




  return <div className=" ">
    {login=="signUp"?
    <form onSubmit={addUser} className="absolute flex flex-col top-[15%] left-[40%] border-[1px] w-[400px] p-8 pt-4 text-[#4B5563] rounded-[20px] shadow-xl ">
        <h1 className="text-[26px] text-[#4B5563] font-semibold">Create Account</h1>
        
        <p className="text-[18px]  font-normal mt-1">Please sign up to book appointment</p>

        <label htmlFor="" className="text-[16px] font-normal mt-3">Full Name</label>
        <input type="text" onChange={(e)=>setName(e.target.value)} value={name} className="border-[1px] border-[#DADADA] outline-none py-1 px-2 rounded-[4px]" />

        <label htmlFor="" className="text-[16px] font-normal mt-3">Email</label>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} className="border-[1px] border-[#DADADA] outline-none py-1 px-2 rounded-[4px]" />

        <label htmlFor="" className="text-[16px] font-normal mt-3">Phone number</label>
        <input type="text" onChange={(e)=>setPhone(e.target.value)} value={phone} className="border-[1px] border-[#DADADA] outline-none py-1 px-2 rounded-[4px]" />
        
        <label htmlFor="" className="text-[16px] font-normal mt-3">Adresse</label>
        <input type="text" onChange={(e)=>setAddress(e.target.value)} value={address} className="border-[1px] border-[#DADADA] outline-none py-1 px-2 rounded-[4px]" />
        
        <label htmlFor="" className="text-[16px] font-normal mt-3">Birthday</label>
        <input type="date" onChange={(e)=>setBirthday(e.target.value)} value={birthday} className="border-[1px] border-[#DADADA] outline-none py-1 px-2 rounded-[4px]" />
        <label htmlFor="" className="text-[16px] font-normal mt-3">Gender</label>
        <select value={gender} onChange={(e)=>setGender(e.target.value)} className="border-[1px] border-[#DADADA] outline-none py-1 px-2 rounded-[4px]"  name="" id="">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
       

        <label htmlFor="" className="text-[16px] font-normal mt-3">Password</label>
        <input value={password } onChange={(e)=>setPassword(e.target.value)} type="password" className=" rounded-[4px] border-[1px] border-[#DADADA] outline-none py-1 px-2" />

        <button type="submit" className="text-[18px] text-white font-meduim bg-[#5F6FFF] rounded-[6px] my-4 py-2">Create account</button>
        <p className="text-[16px] font-normal ">Already have an account? <span className="text-[#5F6FFF] hover:underline cursor-pointer" onClick={()=>setlogin("login")}>Login here</span></p>
      </form>:
       <div className="absolute flex flex-col top-[20%] left-[40%] border-[1px] w-[400px] p-8 text-[#4B5563] rounded-[20px] shadow-xl ">
       <h1 className="text-[26px] text-[#4B5563] font-semibold">Login</h1>
       <p className="text-[18px]  font-normal mt-1">Please login to book appointment</p>
       <label htmlFor="" className="text-[16px] font-normal mt-3">Email</label>
     
       <input type="email" className="border-[1px] border-[#DADADA] outline-none py-1 px-2 rounded-[4px]" />
       <label htmlFor="" className="text-[16px] font-normal mt-3">Password</label>
     
       <input type="password" className=" rounded-[4px] border-[1px] border-[#DADADA] outline-none py-1 px-2" />
       <button className="text-[18px] text-white font-meduim bg-[#5F6FFF] rounded-[6px] my-4 py-2">Login</button>
       <p className="text-[16px] font-normal ">Already have an account? <span className="text-[#5F6FFF] hover:underline cursor-pointer" onClick={()=>setlogin("signUp")}>Login here</span></p>
     </div>
      
  }




  </div>;
}

export default Login;
