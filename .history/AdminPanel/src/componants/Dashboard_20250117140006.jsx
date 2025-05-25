import React from 'react'
import { assets } from '../../../frontend/src/assets/assets_frontend/assets'
function Dashboard() {
  return (
    <div>
        <div>
            <div>
                <img src={assets.doctor_icon} alt="" />
                <div>
                    <p></p>
                    <p>Doctors</p>
                </div>
            </div>
            <div>
                <img src={assets.appointmentsicon} alt="" />
                <div>
                    <p></p>
                    <p>Apppointments</p>
                </div>
            </div>
            <div>
                <img src={assets.patiensicon} alt="" />
                <div>
                    <p></p>
                    <p>Patients</p>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Dashboard
