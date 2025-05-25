import React, { useState } from 'react'
import { assets } from '../../../frontend/src/assets/assets_frontend/assets'
import { specialityData } from '../../../frontend/src/assets/assets_frontend/assets'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'
function AddDoctor() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [experience,setExperience]=useState(0)
    const [fees,setFees]=useState(0)
    const [speciality,setSpeciality]=useState("General physician")
    const [education,setEducation]=useState("")
    const [address,setAddress]=useState("")
    const [about,setAbout]=useState("")
    const[image,setImage]=useState("")
    let inputimage=null
    const notifySucceess = () => toast.success("Doctor added");

    const addDoctorHandler=async(e)=>{
        e.preventDefault()

        const formdata=new FormData();
        
        formdata.append('name',name)
        formdata.append('email',email)
        formdata.append('experience',experience)
        formdata.append('fees',fees)
        formdata.append('speciality',speciality)
        formdata.append('education',education)
        formdata.append('address',address)
        formdata.append('about',about)
        formdata.append('image',image)
        try{


        const response = await axios.post(
            'http://localhost:3000/api/doctors/addDoctor',
            formdata,
            {
                headers: { 'Content-Type': 'multipart/form-data' },
            }
        );

        
        console.log('Doctor added successfully:', response.data);
        setImage('');
        setName('');
        setEmail('');
        setExperience('');
        setFees('');
        setSpeciality(' General physician');
        setEducation('');
        setAddress('');
        setAbout('');
        if(inputimage) inputimage.value=''
        notifySucceess()

        

}catch(eroor)
{
    console.error('Error adding doctor:',eroor);
}
    }



  return (
    <div className='p-10 bg-[#f8f9fd] w-screen'>
        <p className='mb-3  text-[#323232] text-[22px] font-medium'>Add Doctor</p>
        <form onSubmit={addDoctorHandler} action="" className=' bg-white border-[1px] border-[#D8D8D8] p-10 w-[1000px]'>
            <div className='flex items-center'>
                <img className='bg-slate-400 rounded-[50%] mr-4' src={assets.upload_icon} alt="" />
                <input type="file" ref={(input)=>(inputimage=input)}  onChange={(e)=>setImage(e.target.files[0])} name="image" id="" />
                <p className='text-[#7B7B7B] text-[20px]'>Upload doctor <br /> picture</p>

            </div>
            <div className='grid grid-cols-2 gap-10 mt-10'>
                <div className='flex flex-col gap-3'>
                    
                            <label htmlFor="" className='text-[18px] text-[#5D607D] font-medium'>Doctor name</label>
                            <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} className=' text-[#A2A2A2] text-[18px] w-[442px] h-[46px] rounded-[5px] border-[1.5px] border-[#C1C1C1] px-3' />
                    
                    
                            <label htmlFor="" className='text-[18px] text-[#5D607D] font-medium'>Doctor Email</label>
                            <input type="email" placeholder='Your Email' value={email} onChange={(e)=>setEmail(e.target.value)} className=' text-[#A2A2A2] text-[18px] w-[442px] h-[46px] rounded-[5px] border-[1.5px] border-[#C1C1C1] px-3' />
                
                    
                    
                            <label htmlFor="" className='text-[18px] text-[#5D607D] font-medium'> Experience</label>
                            <input type="number" placeholder='Experience' value={experience} onChange={(e)=>setExperience(e.target.value)}  className='text-[#A2A2A2] text-[18px] w-[442px] h-[46px] rounded-[5px] border-[1.5px] border-[#C1C1C1] px-3'/>
                    
                    
                            <label htmlFor="" className='text-[18px] text-[#5D607D] font-medium'>Fees</label>
                            <input type="number" placeholder='Fees' value={fees} onChange={(e)=>setFees(e.target.value)} className='text-[#A2A2A2] text-[18px] w-[442px] h-[46px] rounded-[5px] border-[1.5px] border-[#C1C1C1] px-3'/>
                    
                </div>
                <div className='flex flex-col gap-3'>
                    <label htmlFor="" className='text-[18px] text-[#5D607D] font-medium'>Speciality</label>
                    <select value={speciality} onChange={(e)=>setSpeciality(e.target.value)} className='text-[#A2A2A2] text-[18px] w-[442px] h-[46px] rounded-[5px] border-[1.5px] border-[#C1C1C1] px-3' name="" id="">
                        {specialityData.map((item,key)=>(
                            <option  value={speciality}>{item.speciality}</option>
                        ))}
                        
                        
                    </select>
                    
                            <label htmlFor="" className='text-[18px] text-[#5D607D] font-medium'>Education</label>
                            <input value={education} onChange={(e)=>setEducation(e.target.value)} className='text-[#A2A2A2] text-[18px] w-[442px] h-[46px] rounded-[5px] border-[1.5px] border-[#C1C1C1] px-3' type="text" placeholder='Education' />
                    
                    
                            <label htmlFor="" className='text-[18px] text-[#5D607D] font-medium'>Address</label>
                            <input value={address} onChange={(e)=>setAddress(e.target.value)} className='text-[#A2A2A2] text-[18px] w-[442px] h-[46px] rounded-[5px] border-[1.5px] border-[#C1C1C1] px-3' type="text" placeholder='Address' />
                    
                    

                </div>
            </div>
            <div className='mt-6 flex flex-col gap-3'>
                         
                         <label htmlFor="" className='text-[18px] text-[#5D607D] font-medium'>About me </label>
                        <textarea value={about} onChange={(e)=>setAbout(e.target.value)} className='text-[#A2A2A2] text-[18px] w-[921px] h-[156px] rounded-[5px] border-[1.5px] border-[#C1C1C1] p-3' name="" id="" placeholder='write about your self'></textarea>
                       
            </div>
            <button type='submit' className='mt-10 bg-[#5F6FFF] px-12 py-3 rounded-[47px]'>Add doctor</button>
            <ToastContainer/>






        </form>

      
    </div>
  )
}

export default AddDoctor
