import React, { useContext } from 'react'
import '../Style.css'
import 'remixicon/fonts/remixicon.css'
import { VehicleImgContext } from '../context/VehicleContext'

const ConfirmedRide = ({setvehiclePanelOpen,setConfirmedRidePanel,setVehicleFound}) => {
    const [vehicleImg]=useContext(VehicleImgContext)
  return (
    <div>
        <h5 className='vehicle-panel-down'
          onClick={()=>{
            setConfirmedRidePanel(false)
            setvehiclePanelOpen(true)
          }}>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h3 className='choose-vehicle'>Confirm your ride</h3>
          <div className="confirm-img">
            <img src={vehicleImg} />
            <div className="before-ride-info">
                <div className="ride-info-row">
                    <i className="ri-map-pin-2-fill" style={{fontSize:'16px'}}></i>
                    <div className='address'>
                        <h3>562/11-A</h3>
                        <p>Kankariya Talab, Bhopal</p>
                    </div>
                </div>
                <div className="ride-info-row">
                    <i className="ri-square-fill" style={{ fontSize: '16px' }}></i>
                    <div className='address'>
                        <h3>562/11-A</h3>
                        <p>Kankariya Talab, Bhopal</p>
                    </div>
                </div>
                <div className="ride-info-row">
                    <i className="ri-currency-line" style={{ fontSize: '16px' }}></i>
                    <div className='address'>
                        <h3>₹193</h3>
                        <p>Cash</p>
                    </div>
                </div>
            </div>
            <button className='confirm-button'
            onClick={()=>{
              setVehicleFound(true)
              setConfirmedRidePanel(false)
            }}>Confirm</button>
          </div>
    </div>
  )
}

export default ConfirmedRide