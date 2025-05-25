import React from 'react'
import { assets } from '../../../frontend/src/assets/assets_frontend/assets'
import { specialityData } from '../../../frontend/src/assets/assets_frontend/assets'

function AddDoctor() {
  return (
    <div className='p-10'>
        <p>Add Doctor</p>
        <form action="">
            <div className='flex items-center'>
                <img className='bg-slate-400 rounded-[50%]' src={assets.upload_icon} alt="" />
                <input type="file" name="image" id="" />
                <p>Upload doctor <br /> picture</p>

            </div>
            <div className='grid grid-cols-2 gap-10'>
                <div className='flex flex-col gap-3'>
                    
                            <label htmlFor="">Doctor name</label>
                            <input type="text" placeholder='Name' className='w-[442px] h-[46px] rounded-[5px] border-[1.5px] border-[#C1C1C1] px-3' />
                    
                    
                            <label htmlFor="">Doctor Email</label>
                            <input type="email" placeholder='Your Email' className='w-[442px] h-[46px] rounded-[5px] border-[1.5px] border-[#C1C1C1] px-3' />
                
                    
                    
                            <label htmlFor=""> Experience</label>
                            <input type="number" placeholder='Experience'  className='w-[442px] h-[46px] rounded-[5px] border-[1.5px] border-[#C1C1C1] px-3'/>
                    
                    
                            <label htmlFor="">Fees</label>
                            <input type="number" placeholder='Fees' className='w-[442px] h-[46px] rounded-[5px] border-[1.5px] border-[#C1C1C1] px-3'/>
                    
                </div>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="">Speciality</label>
                    <select className='w-[442px] h-[46px] rounded-[5px] border-[1.5px] border-[#C1C1C1] px-3' name="" id="">
                        {specialityData.map((item,key)=>(
                            <option  value="">{item.speciality}</option>
                        ))}
                        
                        
                    </select>
                    
                            <label htmlFor="">Education</label>
                            <input className='w-[442px] h-[46px] rounded-[5px] border-[1.5px] border-[#C1C1C1] px-3' type="text" placeholder='Education' />
                    
                    
                            <label htmlFor="">Address</label>
                            <input className='w-[442px] h-[46px] rounded-[5px] border-[1.5px] border-[#C1C1C1] px-3' type="number" placeholder='Address' />
                    
                    

                </div>
            </div>
            <div className='mt-6 flex flex-col gap-3'>
                         
                         <label htmlFor="">About me </label>
                        <textarea className='w-[921px] h-[]' name="" id="" placeholder='write about your self'></textarea>
                       
            </div>
            <button>Add doctor</button>







        </form>

      
    </div>
  )
}

export default AddDoctor
