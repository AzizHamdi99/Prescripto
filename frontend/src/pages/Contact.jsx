import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import Footer from "../components/Footer";
function Contact() {
  return <div className="mx-32">
  <h1 className="text-[30px] text-[#171717] text-center my-10">CONTACT  <span className="font-bold">Us</span></h1>
  <div className="flex mx-32 gap-14 mb-40 ">
    <img src={assets.contact_image} className="w-[560px] h-[560px]" alt="contact image" />
    <div className=" ">
      <h1 className=" text-[24px] my-8 font-bold text-[#4B5563] uppercase">Our OFFICE</h1>
      <p className="mb-6 text-[18px]">54709 Willms Station 
        <br />
      Suite 350, Washington, USA</p>
      <p className="mb-2 text-[18px]">Tel: (415) 555‑0132</p>
      <p className="mb-2 text-[18px]">Email: greatstackdev@gmail.com</p>
      <h1 className=" text-[24px] my-8 font-bold text-[#4B5563] uppercase">Careers at PRESCRIPTO</h1>
      <p className="mb-2 text-[18px]">Learn more about our teams and job openings.</p>
      <button className="border border-[#1F2937] p-5 px-7 mt-6 font-normal text-[16px]">Explore More</button>
    </div>


  </div>
  <Footer/>



  </div>;
}

export default Contact;
