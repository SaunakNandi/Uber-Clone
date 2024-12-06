import React, { useState } from 'react'
import '../App.css'
import { Link} from 'react-router-dom'
import uberLogo from '../assets/uberLogo.png'

const CaptainLogin = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [captainData,setCaptainData]=useState({})
  
  const submit=(e)=>{
    e.preventDefault()
    setCaptainData({
      email,
      password
    })
    setEmail('')
    setPassword('')
  }
  return (
    <div className='login-container' style={{padding:'14px',marginRight:'30px'}}>
      <div className="">
      <img className='login-logo' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" 
      style={{marginBottom:'1rem !important'}}/>
      <form className='login-form' style={{marginTop:'30px'}} onSubmit={(e)=>submit(e)}>
        <h3 className='heading'>What's your email</h3>
        <input className='login-input'
        type="email" required placeholder='email@example.com'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>
        <h3 className='login-password'>Enter Password</h3>
        <input className='login-input' type="password" required placeholder='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
        <button className='login-buttom'>Login</button>
      </form>
        <p style={{textAlign:'center'}}>Want to be a Captain? <Link to='/captain-signup' className='account'>Register as</Link></p>
      </div>
      <div className="">
        <Link to='/login' className='login-button-user'>Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin