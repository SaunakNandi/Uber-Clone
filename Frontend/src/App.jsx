import './App.css'
import { Route, Routes } from 'react-router-dom'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/Home'
import Start from './pages/Start'
import UserLogout from './pages/UserLogout'

import UserProtectWrapper from './pages/UserProtectWrapper'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'
function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/home' element={
          <UserProtectWrapper>
            <Home/>
          </UserProtectWrapper>
          }/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/ride' element={<Riding/>}/>
        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/captain-login' element={<CaptainLogin/>}/>
        <Route path='/captain-riding' element={<CaptainRiding/>}/>
        <Route path='/captain-home' element={
          <CaptainProtectWrapper>
            <CaptainHome/>
          </CaptainProtectWrapper>
        }/>
        <Route path='/captain-signup' element={<CaptainSignup/>}/>
        <Route path='/logout' element={
          <UserProtectWrapper>
            <UserLogout/>
          </UserProtectWrapper>
        }/>
      </Routes>
    </>
  )
}

export default App
