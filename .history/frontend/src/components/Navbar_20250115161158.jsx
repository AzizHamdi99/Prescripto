import React, { useContext, useState } from "react";
import "../index.css";
import { assets } from "../assets/assets_frontend/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
function Navbar() {
  //const [select, setselect] = useState("home");
  const{select,setselect,token,setToken}=useContext(AppContext)

  const navigate=useNavigate();
 const[login,setlogin]=useState(true)
  const image=()=>{
    navigate('/');
    setselect("home");

  }
  
 
  
  return (
    <div className="mx-32 flex my-4 items-center justify-between border-b-2 pb-4">
      <img onClick={image} src={assets.logo} alt="" className="cursor-pointer"  />
      <div className="grid gap-8 grid-flow-col text-l text-[#1F2937] font-semibold">
        <Link to="/"><span className={ select === "home" ? "border-b-2 border-[#5F6FFF] pb-1" : ""} onClick={()=>setselect("home")}>Home</span></Link>
       <Link to="/doctors"> <span  onClick={()=>setselect("doctors")} className={ select === "doctors" ? "border-b-2 border-[#5F6FFF] pb-2" : ""} >All Doctors</span></Link>
        <Link to="/about"><span  className={ select === "about" ? "border-b-2 border-[#5F6FFF] pb-1" : ""} onClick={()=>setselect("about")}>About</span></Link>
        <Link to="/contact"><span  className={ select === "contact" ? "border-b-2 border-[#5F6FFF] pb-1" : ""} onClick={()=>setselect("contact")}>Contact</span></Link>
      </div>
      {token? <div className="grid grid-flow-col gap-2 items-center group-relative ">
        <img src={assets.profile_pic} className="w-10 rounded-[50%] cursor-pointer" alt=""  onClick={()=>setlogin(!login)}/>
        <img src={assets.dropdown_icon} alt=""  />
          {login? <div className="absolute top-20 right-32 text-base font-medium p-4 text-gray-600 z-20 bg-[#F8F8F8] shadow-md">
          <div className="text-[18px] font-normal textt-[#4B5563] ">
            <p className="cursor-pointer" onClick={()=>navigate("/profil")}>My profil</p>
            <p className="cursor-pointer" onClick={()=>navigate("/appointments")}>My Appointments</p>
            <p className="cursor-pointer">Logout</p>
          </div>

        </div> :<></> }
        

      </div>:
      <button onClick={()=>navigate('/login')}  className="px-5 py-2 bg-[#5F6FFF] rounded-3xl text-white">Create Account</button>}
    </div>
  );
}

export default Navbar;
