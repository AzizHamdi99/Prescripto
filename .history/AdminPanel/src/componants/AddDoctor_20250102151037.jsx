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
                    <label htmlFor="">Docotr name</label>
                    <input type="text" placeholder='Name' />
                </div>
                
            </div>
               

            







        </form>

      
    </div>
  )
}

export default AddDoctor
