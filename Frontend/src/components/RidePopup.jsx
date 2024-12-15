import React from 'react'
import './component.css'
const RidePopup = ({setRidePopupPanel,setConfirmRidePopupPanel}) => {
  return (
    <div className='ridepopup-panel'>
            <h5 onClick={() => {
                setRidePopupPanel(false)
            }}><i className="ri-arrow-down-wide-line"></i></h5>
            <h3>New Ride Available!</h3>
            <div className='ride-details'>
                <div className='profile-pic'>
                    <img src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg" alt="" />
                    {/* <h2 className='text-lg font-medium'>{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h2> */}
                </div>
                <h5 style={{fontSize:'18px',fontWeight:'600'}}>2.2 KM</h5>
            </div>
            <div className='pickup-container'>
                <div style={{width:'100%',marginTop:'20px'}}>
                    <div className='row1'>
                        <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 style={{fontSize:'18px',fontWeight:'500'}}>562/11-A</h3>
                            {/* <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p> */}
                        </div>
                    </div>
                    <div className='row2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 style={{fontSize:'18px',fontWeight:'500'}}>562/11-A</h3>
                            {/* <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination}</p> */}
                        </div>
                    </div>
                    <div className='row3'>
                        <i className="ri-currency-line"></i>
                        <div>
                            {/* <h3 style={{fontSize:'18px',fontWeight:'500'}}>₹{props.ride?.fare} </h3> */}
                            {/* <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p> */}
                        </div>
                    </div>
                </div>
                <div className='decision-box'>
                    <button onClick={() => {
                        setConfirmRidePopupPanel(true)
                    }}>Accept</button>

                    <button onClick={() => {
                        setRidePopupPanel(false)
                    }}>Ignore</button>


                </div>
            </div>
        </div>
  )
}

export default RidePopup