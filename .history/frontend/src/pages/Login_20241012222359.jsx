import React, { useState } from "react";

function Login() {
const [login,setlogin]=useState("signUp");


  return <div className=" ">
    {login=="signUp"?
    <div className="absolute flex flex-col top-[20%] left-[40%] border-[1px] w-[400px] p-8 text-[#4B5563] rounded-[20px] shadow-xl ">
        <h1 className="text-[26px] text-[#4B5563] font-semibold">Create Account</h1>
        <p className="text-[18px]  font-normal mt-1">Please sign up to book appointment</p>
        <label htmlFor="" className="text-[16px] font-normal mt-3">Full Name</label>
        <input type="text" className="border-[1px] border-[#DADADA] outline-none py-1 px-2 rounded-[4px]" />
        <label htmlFor="" className="text-[16px] font-normal mt-3">Email</label>
      
        <input type="email" className="border-[1px] border-[#DADADA] outline-none py-1 px-2 rounded-[4px]" />
        <label htmlFor="" className="text-[16px] font-normal mt-3">Password</label>
      
        <input type="password" className=" rounded-[4px] border-[1px] border-[#DADADA] outline-none py-1 px-2" />
        <button className="text-[18px] text-white font-meduim bg-[#5F6FFF] rounded-[6px] my-4 py-2">Create account</button>
        <p className="text-[16px] font-normal ">Already have an account? <span className="text-[#5F6FFF] hover:underline cursor-pointer" onClick={()=>setlogin("login")}>Login here</span></p>
      </div>:
       <div className="absolute flex flex-col top-[20%] left-[40%] border-[1px] w-[400px] p-8 text-[#4B5563] rounded-[20px] shadow-xl ">
       <h1 className="text-[26px] text-[#4B5563] font-semibold">Login</h1>
       <p className="text-[18px]  font-normal mt-1">Please sign up to book appointment</p>
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
