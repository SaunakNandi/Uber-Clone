import React, { useState } from 'react'
import uberLogo from '../assets/uberLogo.png'
import '../App.css'
import { Link} from 'react-router-dom'
const UserLogin = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [userData,setUserData]=useState({})
  const submit=(e)=>{
    e.preventDefault()
    setUserData({
      email,
      password
    })
    setEmail('')
    setPassword('')
  }
  return (
    <div className='login-container' style={{padding:'14px',marginRight:'30px'}}>
      <div className="">
        <img className='login-logo' src={uberLogo} alt="" />
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
          <p style={{textAlign:'center'}}>New Here? <Link to='/signup' className='account' style={{color:'#2563eb'}}>Create New Account</Link></p>
      </div>
      <div className="">
          <Link to='/captain-login' className='login-button-captain'>Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin