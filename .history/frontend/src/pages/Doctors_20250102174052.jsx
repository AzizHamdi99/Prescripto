import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import DoctorCard from "../components/DoctorCard";
import { useNavigate } from "react-router-dom";

function Doctors() {
const spec =["All doctors","General physician","Gynecologist","Dermatologist","Pediatricians","Neurologist","Gastroenterologist"];
const{doctors,Speciality,SetSpeciality}=useContext(AppContext);
const navigate=useNavigate();
const specialityfn=(item)=>{
  SetSpeciality(item)
  item=='All doctors'? navigate('/doctors'):navigate(`/doctors/${item}`);


}


  return (
    <div className="mx-32 my-12">
    <h1 className="text-[#4B5563] text-[20px]">Browse through the doctors specialist.</h1>
    <div className="my-4 grid grid-cols-[1fr_4fr] gap-10">
      <div className="text-[#4B5563] ">
        {spec.map((item,index)=>(
         <p onClick={()=>specialityfn(item)} className={Speciality===item? "text-[16px] border-2 py-2 my-2 pl-5 rounded-md hover:cursor-pointer bg-[#E2E5FF] " : "text-[16px] border-2 py-2 my-2 pl-5 rounded-md hover:cursor-pointer "}>{item}</p>
        
        ))}
      </div>
      <div className="grid grid-cols-4 gap-5">
        {doctors.map((item,index)=>{
          if(Speciality=="All doctors"){
            return(
            
              <DoctorCard id={item._id} name={item.name} image={item.image} speciality={item.speciality}/>
            )    
          }
          else {

          
          if(item.speciality===Speciality)return(
            
              <DoctorCard id={item._id} name={item.name} image={item.image} speciality={item.speciality}/>
              
            
          )
        }
      }
        
        )}
      </div>

    </div>


    
  </div>
  )
 
}

export default Doctors;
