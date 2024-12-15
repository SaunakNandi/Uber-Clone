import React, { useRef, useState } from 'react'
import  '../Style.css'
import {useGSAP} from '@gsap/react' 
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import { VehiclePanel } from '../components/VehiclePanel'
import ConfirmedRide from '../components/ConfirmedRide'
import LookingForCaptain from '../components/LookingForCaptain'
import WaitForCaptain from '../components/WaitForCaptain'

const Home = () => {
  const [pickup,setPickup]=useState('')
  const [destination,setDestination]=useState('')
  const [panelOpen,setPanelOpen]=useState(false)
  const [vehiclePanelOpen,setvehiclePanelOpen]=useState(false)
  const [confirmedRidePanel,setConfirmedRidePanel]=useState(false)
  const [vehicleFound,setVehicleFound]=useState(false)
  const [waiting,setWaiting]=useState(false)
  const [ pickupSuggestions, setPickupSuggestions ] = useState([])
  const [ destinationSuggestions, setDestinationSuggestions ] = useState([])
  const [ activeField, setActiveField ] = useState(null)
  const panelRef=useRef(null)
  const panelClose=useRef(null)
  const vehiclePanelOpenRef=useRef(null)
  const confirmedRideRef=useRef(null)
  const vehicleFoundRef=useRef(null)
  const captainRef=useRef(null)

  const handlePickupChange = async (e) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
            params: { input: e.target.value },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }

        })
        setPickupSuggestions(response.data)
    } catch {
        // handle error
    }
}

const handleDestinationChange = async (e) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
            params: { input: e.target.value },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        setDestinationSuggestions(response.data)
    } catch {
        // handle error
    }
}
  const submit=(e)=>{
    e.preventDefault()
  }
  useGSAP(function(){
    if(panelOpen)
    {
      gsap.to(panelRef.current,{
        height:'80%',
        display:'initial',
        padding:20
      })
      gsap.to(panelClose.current,{
        opacity:1
      })
    }
    else
    {
      gsap.to(panelRef.current,{
        height:'0',
        display:'none',
        padding:0
      })
      gsap.to(panelClose.current,{
        opacity:0
      })
    }
  },[panelOpen])

  useGSAP(function(){
    if(vehiclePanelOpen)
    {
      gsap.to(vehiclePanelOpenRef.current,{
        transform:'translateY(0)'
      })
    }
    else
    {
      gsap.to(vehiclePanelOpenRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[vehiclePanelOpen])
  useGSAP(function(){
    if(confirmedRidePanel)
    {
      gsap.to(confirmedRideRef.current,{
        transform:'translateY(0)'
      })
    }
    else
    {
      gsap.to(confirmedRideRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[confirmedRidePanel])

  useGSAP(function(){
    if(vehicleFound)
    {
      gsap.to(vehicleFoundRef.current,{
        transform:'translateY(0)'
      })
    }
    else
    {
      gsap.to(vehicleFoundRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[vehicleFound])

  useGSAP(function(){
    if(waiting)
    {
      gsap.to(captainRef.current,{
        transform:'translateY(0)'
      })
    }
    else
    {
      gsap.to(captainRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[waiting])
  
  return (
    <div className='home-screen'>
      <img className='home-logo' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"/>
        <div style={{height:'100vh',width:'100vw'}}>
          <img src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          className='home-img'/>
        </div>
        <div className="home-trip">
          <div className="trip-smallbox">
            <h5 ref={panelClose} onClick={()=>{
              setPanelOpen(false)
            }}><i className="ri-arrow-down-wide-line"></i></h5>
            <h4 className='trip-heading'>Find a trip</h4>
          <form style={{ maxWidth: 'fit-content' }}
            onSubmit={(e) => {
              submit(e)
            }}>
            <div className="liner"></div>
            <input value={pickup}
              onChange={(e) => {
                setPickup(e.target.value)
                handlePickupChange(e)
              }}
              type="text" placeholder='Add a pick up location' className='trip-form-input'
              style={{ marginTop: '20px' }}
              onClick={() => {
                setPanelOpen(true)
                setActiveField('pickup')
              }} />
            <input value={destination}
              onChange={(e) => {
                setDestination(e.target.value)
                handleDestinationChange(e)
              }}
              type="text" placeholder='Add your destination' className='trip-form-input'
              style={{ marginTop: '20px' }}
              onClick={() => {
                setPanelOpen(true)
                setActiveField('destination')
              }} />
          </form>
          <button
            onClick={findTrip}
            className='find-trip-button'>
            Find Trip
          </button>
          </div>
          <div className="trip-largebox" ref={panelRef}>
              <LocationSearchPanel 
                suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
                setPanelOpen={setPanelOpen}
                setvehiclePanelOpen={setvehiclePanelOpen}
                setPickup={setPickup}
                setDestination={setDestination}
                activeField={activeField}
              />
          </div>
        </div>
        <div className="ride-mode" ref={vehiclePanelOpenRef}>
          <VehiclePanel setConfirmedRidePanel={setConfirmedRidePanel} setvehiclePanelOpen={setvehiclePanelOpen}/>
        </div>
        <div className="ride-mode" ref={confirmedRideRef}>
          <ConfirmedRide setvehiclePanelOpen={setvehiclePanelOpen} setConfirmedRidePanel={setConfirmedRidePanel}
          setVehicleFound={setVehicleFound}/>
        </div>
        <div className="ride-mode" ref={vehicleFoundRef}>
          <LookingForCaptain setvehiclePanelOpen={setvehiclePanelOpen}/>
        </div>
        <div className="ride-mode" ref={captainRef}>
          <WaitForCaptain setWaiting={setWaiting}/>
        </div>
    </div>
  )
}

export default Home