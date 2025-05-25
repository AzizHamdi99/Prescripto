import React from "react";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets_frontend/assets";
import Footer from "../components/Footer";

function About() {
  return <div className="mx-32">
    <h1 className="text-center my-12 text-[30px] font-normal text-[#171717] uppercase">About <span className="font-semibold">Us</span></h1>
    <div className="grid grid-cols-[1fr_2fr] gap-10 text-[18px] ">
      <img src={assets.about_image} className="w-[440px]" alt="" />
      <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
        <br /><br />

Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
<br /><br />
<span className="font-bold">Our Vision</span>
<br /><br />

Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
    </div>
    <h1 className="text-[24px] text-[#171717] mt-16">Why <span className="font-semibold"> choose Us</span></h1>
    <div className="flex justify-between mt-10 border-2 border-1-[#ABABAB] text-[18px] ">
      <div className="p-12 border-x-2">
        <h1 className="mb-4 font-bold">Efficiency:</h1>
      <p className="text-[#4B5563]">Streamlined appointment scheduling that fits into your busy lifestyle.</p>
      </div>
      <div className="p-10 border-x-2">
        <h1 className="mb-4  font-bold">Convenience:</h1>
      <p className="text-[#4B5563]">Access to a network of trusted healthcare professionals in your area.</p>
      </div>
      <div className="p-10 border-x-2">
       <h1 className="mb-4 font-bold">Personalization:</h1>
        
      <p className="text-[#4B5563]">Tailored recommendations and reminders to help you stay on top of your health.</p>
      </div>
    </div>

   
    


<Footer />

  </div>;
}

export default About;
