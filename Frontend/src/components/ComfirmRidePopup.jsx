import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './component.css'

const ConfirmRidePopup = ({setConfirmRidePopupPanel,setRidePopupPanel}) => {
  const [ otp, setOtp ] = useState('')
    const navigate = useNavigate()

    const submit=(e)=>{
        e.preventDefault()

    }
  return (
    <div className='confirmride-popup-container'>
            <h5 onClick={() => {
                setRidePopupPanel(false)
            }}><i className="ri-arrow-down-wide-line"></i></h5>
            <h3>Confirm this ride to Start</h3>
            <div className='confirmride-captain-details'>
                <div className='image-div '>
                    <img src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" alt="" />
                    {/* <h2 className='text-lg font-medium capitalize'>{props.ride?.user.fullname.firstname}</h2> */}
                </div>
                <h5 style={{fontSize:'18px',fontWeight:'600'}}>2.2 KM</h5>
            </div>
            <div className='bottom-dashboard'>
                <div style={{width:'100%',marginTop:'12px'}}>
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
                            {/* <h3 className='text-lg font-medium'>₹{props.ride?.fare} </h3> */}
                            <p>Cash Cash</p>
                        </div>
                    </div>
                </div>

                <div className='decision-panel'>
                    <form onSubmit={(e)=>submit()}>
                        <input value={otp} type="text" placeholder='Enter OTP' 
                        onChange={(e)=>setOtp(e.target.value)}/>
                        <Link to='/captain-riding' className='confirm'>Confirm</Link>
                        <button className='cancel' onClick={() => {
                            setConfirmRidePopupPanel(false)
                            setRidePopupPanel(false)
                        }}>Cancel</button>

                    </form>
                </div>
            </div>
        </div>
  )
}

export default ConfirmRidePopup