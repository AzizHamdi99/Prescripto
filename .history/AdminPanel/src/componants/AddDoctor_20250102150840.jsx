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
                

            </div>







        </form>

      
    </div>
  )
}

export default AddDoctor
