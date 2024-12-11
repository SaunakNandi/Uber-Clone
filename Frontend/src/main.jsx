import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import {UserContext} from './context/userContext'
import CaptainContext from './context/captainContext.jsx'
import { VehicleContext } from './context/VehicleContext.jsx'
createRoot(document.getElementById('root')).render(
  <VehicleContext>
    <CaptainContext>
      <UserContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContext>
    </CaptainContext>
  </VehicleContext>
  
)
