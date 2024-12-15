import React,{useState,useRef} from 'react'
import { Link } from 'react-router-dom'
import '../Style.css'
import FinishRide from '../components/FinishRide'
import {useGSAP} from '@gsap/react' 
import gsap from 'gsap'
const CaptainRiding = () => {
    const [ finishRidePanel, setFinishRidePanel ] = useState(false)
    const finishRidePanelRef = useRef(null)

    useGSAP(function(){
        if(finishRidePanel)
        {
          gsap.to(finishRidePanelRef.current,{
            transform:'translateY(0)'
          })
        }
        else
        {
          gsap.to(finishRidePanelRef.current,{
            transform:'translateY(100%)'
          })
        }
      },[finishRidePanel])
  return (
    <div className='captain-riding'>
        <div className='image-box'>
            <img style={{width:'48px'}}
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"/>
            <Link to='/captain-home' className='route-to-home'>
                <i className="ri-logout-box-r-line"></i>
            </Link>
            
        </div>

        <div className='ride-panel'
            onClick={() => {
                setFinishRidePanel(true)
            }}
        >
            <h5><i className="ri-arrow-up-wide-line" style={{fontSize:'32px',color:'darkslategray'}}></i></h5>
            <h4 style={{fontSize:'24px',fontWeight:'600'}}>4 KM away</h4>
            <button>Complete Ride</button>
        </div>
        <div ref={finishRidePanelRef} className='finishRide'>
            <FinishRide setFinishRidePanel={setFinishRidePanel} />
                {/* ride={rideData} */}
        </div>

        <div className='livetracker'>
            {/* <LiveTracking /> */}
        </div>

    </div>

  )
}

export default CaptainRiding