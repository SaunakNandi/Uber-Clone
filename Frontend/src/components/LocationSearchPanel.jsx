import React from 'react'
import  '../Style.css'
import 'remixicon/fonts/remixicon.css'

const LocationSearchPanel = ({setPanelOpen,setvehiclePanelOpen}) => {
  const location=[
    "24B Near Kapoor's cafe, Sheryians Coding School",
    "24B Near Kapoor's cafe, Sheryians Coding School",
    "24B Near Kapoor's cafe, Sheryians Coding School",
    "24B Near Kapoor's cafe, Sheryians Coding School",
  ]
  return (
    <div>
      {
        location.map((dest)=>(
        <div className="location-suggestion-box" 
        onClick={()=>{
          setvehiclePanelOpen(true)
          setPanelOpen(false)
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