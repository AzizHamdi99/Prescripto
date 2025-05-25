import React from 'react'
import { assets } from '../../../frontend/src/assets/assets_frontend/assets'
import { specialityData } from '../../../frontend/src/assets/assets_frontend/assets'

function AddDoctor() {
  return (
    <div className='p-10'>
        <p>Add Doctor</p>
        <form action="">
            <div className='flex gap-1'>
                <img src={assets.upload_icon} alt="" />
                <input type="file" name="image" id="" />
                <p>Upload doctor <br /> picture</p>

            </div>
            <div className='grid grid-cols-2 gap-3'>
                <div className='flex flex-col'>
                    <div>
                            <label htmlFor="">Doctor name</label>
                            <input type="text" placeholder='Name' />
                    </div>
                    <div>
                            <label htmlFor="">Doctor Email</label>
                            <input type="email" placeholder='Your Email' />
                    </div>
                    
                    <div>
                            <label htmlFor=""> Experience</label>
                            <input type="number" placeholder='Experience' />
                    </div>
                    <div>
                            <label htmlFor="">Fees</label>
                            <input type="number" placeholder='Fees' />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <select name="" id="">
                        {specialityData.map((item,key)=>(
                            <option value="">{item.speciality}</option>
                        ))}
                        
                        
                    </select>
                    <div>
                            <label htmlFor="">Education</label>
                            <input type="text" placeholder='Education' />
                    </div>
                    <div>
                            <label htmlFor="">Address</label>
                            <input type="number" placeholder='Address' />
                    </div>
                    

                </div>
            </div>
            <div>
                         
                         <label htmlFor="">About me </label>
                        <textarea name="" id="" placeholder='write about your self'></textarea>
                       
            </div>
            <button>Add doctor</button>







        </form>

      
    </div>
  )
}

export default AddDoctor
