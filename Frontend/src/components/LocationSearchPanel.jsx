import React from 'react'
import  '../Style.css'
import 'remixicon/fonts/remixicon.css'

const LocationSearchPanel = ({suggestions,setPanelOpen,setvehiclePanelOpen,setPickup, setDestination, activeField}) => {
  const handleSuggestionClick = (suggestion) => {
    if (activeField === 'pickup') {
        setPickup(suggestion)
    } else if (activeField === 'destination') {
        setDestination(suggestion)
    }
    // setVehiclePanel(true)
    // setPanelOpen(false)
  }
  return (
    <div>
      {
        suggestions.map((dest,i)=>(
        <div className="location-suggestion-box" key={i} 
          onClick={()=>{
            handleSuggestionClick(dest)
          }}>
            <h2 className='location-icons'><i className="ri-map-pin-fill"></i></h2>
            <h4>{dest}</h4>
        </div>
        ))
      }
    </div>
  )
}

export default LocationSearchPanel