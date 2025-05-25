import React from 'react'
import { assets } from '../../../frontend/src/assets/assets_frontend/assets'

function AddDoctor() {
  return (
    <div>
        <p>Add Doctor</p>
        <form action="">
            <div>
                <img src={assets.upload_icon} alt="" />
                <input type="file" name="image" id="" />
                <p>Upload doctor <br /> picture</p>

            </div>
            <div>
                <div>
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
            </div>







        </form>

      
    </div>
  )
}

export default AddDoctor
