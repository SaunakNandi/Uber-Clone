import React from 'react'
import './component.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const FinishRide = ({setFinishRidePanel}) => {
  return (
    <div className='finish-riding-container'>
        <h5 onClick={() => {
            setFinishRidePanel(false)
        }}><i className="ri-arrow-down-wide-line"></i></h5>
        <h3>Finish this Ride</h3>
        <div className='image-container'>
            <div className='image-div'>
                <img src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" alt="" />
                {/* <h2 className='text-lg font-medium'>{props.ride?.user.fullname.firstname}</h2> */}
            </div>
            <h5 style={{fontSize:'18px',fontWeight:'600'}}>2.2 KM</h5>
        </div>
        <div className='finish-ride-bottom-panel'>
            <div className='finish-ride-info'>
                <div className='row1'>
                    <i className="ri-map-pin-user-fill"></i>
                    <div>
                        <h3>562/11-A</h3>
                        {/* <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p> */}
                    </div>
                </div>
                <div className='row2'>
                    <i className="text-lg ri-map-pin-2-fill"></i>
                    <div>
                        <h3>562/11-A</h3>
                        {/* <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination}</p> */}
                    </div>
                </div>
                <div className='row3'>
                    <i className="ri-currency-line"></i>
                    <div>
                        {/* <h3>₹{props.ride?.fare} </h3> */}
                        <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                    </div>
                </div>
            </div>

            <div style={{marginTop:'40px',width:'100%'}}>
                <button
                // onClick={endRide}
                className='finish-ride-button'>Finish Ride
                </button>
            </div>
        </div>
    </div>
  )
}

export default FinishRide