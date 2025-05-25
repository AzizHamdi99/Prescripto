import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import '../App.css'
function Footer() {
  return (
    <>
    <div className='footer  my-10 text-[18px] text-[#4B5563] font-normal'>
        <div className='w-1/2'>
            <img src={assets.logo} alt="" className='mb-8' />
            <p className='text-[18px] text-[#4B5563] font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div>
            <h1 className='text-[22px] font-medium text[#4B5563] mb-8'> COMPANY</h1>
            <ul>
                <li> Home</li>
                
                <li>About us </li>
                <li>Contact us</li>
                <li> Privacy policy</li>
            </ul>
        </div>
        <div>
            <h1 className='text-[22px] font-medium text[#4B5563] mb-8'> GET IN TOUCH</h1>
            <ul>
                <li> +1-212-456-7890</li>
                
                <li>greatstackdev@gmail.com </li>
            </ul>
        </div>
      
    </div>
    <div className='text-center '>
        <hr className='h-[0.75px] bg-[#BDBDBD]' />
        <p className='text-[#4B5563] text-[18px] py-6 mb-2'>Copyright © 2024 GreatStack - All Right Reserved.</p>
    </div>
    </>
  )
}

export default Footer
