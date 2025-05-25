import React, { useState } from 'react'
import { assets } from '../../../frontend/src/assets/assets_frontend/assets'
import { specialityData } from '../../../frontend/src/assets/assets_frontend/assets'

function AddDoctor() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [experience,setExperience]=useState(0)
    const [fees,setFees]=useState(0)
    const [speciality,setSpeciality]=useState("Genral")
    const [name,setName]=useState("")
    const [name,setName]=useState("")




  return (
    <div className='p-10 bg-[#f8f9fd] w-screen'>
        <p className='mb-3  text-[#323232] text-[22px] font-medium'>Add Doctor</p>
        <form action="" className=' bg-white border-[1px] border-[#D8D8D8] p-10 w-[1000px]'>
            <div className='flex items-center'>
                <img className='bg-slate-400 rounded-[50%] mr-4' src={assets.upload_icon} alt="" />
                <input type="file" name="image" id="" />
                <p>Upload doctor <br /> picture</p>

            </div>
            <div className='grid grid-cols-2 gap-10 mt-10'>
                <div className='flex flex-col gap-3'>
                    
                            <label htmlFor="" className='text-[18px] text-[#5D607D] font-medium'>Doctor name</label>
                            <input type="text" placeholder='Name' className=' text-[#A2A2A2] text-[18px] w-[442px] h-[46px] rounded-[5px] border-[1.5px] border-[#C1C1C1] px-3' />
                    
                    
                            <label htmlFor="" className='text-[18px] text-[#5D607D] font-medium'>Doctor Email</label>
                            <input type="email" placeholder='Your Email' className=' text-[#A2A2A2] text-[18px] w-[442px] h-[46px] rounded-[5px] border-[1.5px] border-[#C1C1C1] px-3' />
                
                    
                    
                            <label htmlFor="" className='text-[18px] text-[#5D607D] font-medium'> Experience</label>
                            <input type="number" placeholder='Experience'  className='text-[#A2A2A2] text-[18px] w-[442px] h-[46px] rounded-[5px] border-[1.5px] border-[#C1C1C1] px-3'/>
                    
                    
                            <label htmlFor="" className='text-[18px] text-[#5D607D] font-medium'>Fees</label>
                            <input type="number" placeholder='Fees' className='text-[#A2A2A2] text-[18px] w-[442px] h-[46px] rounded-[5px] border-[1.5px] border-[#C1C1C1] px-3'/>
                    
                </div>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="" className='text-[18px] text-[#5D607D] font-medium'>Speciality</label>
                    <select className='text-[#A2A2A2] text-[18px] w-[442px] h-[46px] rounded-[5px] border-[1.5px] border-[#C1C1C1] px-3' name="" id="">
                        {specialityData.map((item,key)=>(
                            <option  value="">{item.speciality}</option>
                        ))}
                        
                        
                    </select>
                    
                            <label htmlFor="" className='text-[18px] text-[#5D607D] font-medium'>Education</label>
                            <input className='text-[#A2A2A2] text-[18px] w-[442px] h-[46px] rounded-[5px] border-[1.5px] border-[#C1C1C1] px-3' type="text" placeholder='Education' />
                    
                    
                            <label htmlFor="" className='text-[18px] text-[#5D607D] font-medium'>Address</label>
                            <input className='text-[#A2A2A2] text-[18px] w-[442px] h-[46px] rounded-[5px] border-[1.5px] border-[#C1C1C1] px-3' type="number" placeholder='Address' />
                    
                    

                </div>
            </div>
            <div className='mt-6 flex flex-col gap-3'>
                         
                         <label htmlFor="" className='text-[18px] text-[#5D607D] font-medium'>About me </label>
                        <textarea className='text-[#A2A2A2] text-[18px] w-[921px] h-[156px] rounded-[5px] border-[1.5px] border-[#C1C1C1] p-3' name="" id="" placeholder='write about your self'></textarea>
                       
            </div>
            <button type='submit' className='mt-10 bg-[#5F6FFF] px-12 py-3 rounded-[47px]'>Add doctor</button>







        </form>

      
    </div>
  )
}

export default AddDoctor
