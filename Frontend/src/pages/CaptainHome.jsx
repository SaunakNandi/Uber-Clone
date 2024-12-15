import React,{ useState,useContext,useRef } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/captainContext'
import '../App.css'
import CaptainDetails from '../components/CaptainDetails'
import RidePopup from '../components/RidePopup'
import {useGSAP} from '@gsap/react' 
import gsap from 'gsap'
import ConfirmRidePopup from '../components/ComfirmRidePopup'
const CaptainHome = () => {
  const [ ridePopupPanel, setRidePopupPanel ] = useState(false)
    const [ confirmRidePopupPanel, setConfirmRidePopupPanel ] = useState(false)

    const ridePopupPanelRef = useRef(null)
    const confirmRidePopupPanelRef = useRef(null)
    const [ ride, setRide ] = useState(null)

    // const { socket } = useContext(SocketContext)
    const { captain } = useContext(CaptainDataContext)

    useGSAP(function(){
        if(ridePopupPanel)
        {
          gsap.to(ridePopupPanelRef.current,{
            transform:'translateY(0)'
          })
        }
        else
        {
          gsap.to(ridePopupPanelRef.current,{
            transform:'translateY(100%)'
          })
        }
      },[ridePopupPanel])

      useGSAP(function(){
        if(confirmRidePopupPanel)
        {
          gsap.to(confirmRidePopupPanelRef.current,{
            transform:'translateY(0)'
          })
        }
        else
        {
          gsap.to(confirmRidePopupPanelRef.current,{
            transform:'translateY(100%)'
          })
        }
      },[confirmRidePopupPanel])
  return (
    <div className='captain-homescreen'>
            <div className='first-view'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <Link to='/captain-home' className='captain-home-link'>
                    <i className="ri-logout-box-r-line"></i>
                </Link>
            </div>
            <div style={{height:'70%'}}>
                <img className='captain-map' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div style={{height:'30%', padding:'24px'}}>
                <CaptainDetails/>
            </div>
            <div ref={ridePopupPanelRef} className='rider-popup'>
                <RidePopup
                setRidePopupPanel={setRidePopupPanel}
                setConfirmRidePopupPanel={setConfirmRidePopupPanel}
                    />
                    {/* ride={ride}
                    confirmRide={confirmRide} */}
            </div>
            <div ref={confirmRidePopupPanelRef} className='confirmed-rider-popup'>
                {/* <Confim
                    ride={ride}
                    setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} /> */}
                    <ConfirmRidePopup
                    setConfirmRidePopupPanel={setConfirmRidePopupPanel} 
                    setRidePopupPanel={setRidePopupPanel}/>
            </div>
        </div>
  )
}

export default CaptainHome