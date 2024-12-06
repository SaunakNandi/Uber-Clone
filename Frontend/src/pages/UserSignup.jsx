import React,{useState} from 'react'
import uberLogo from '../assets/uberLogo.png'
import { Link } from 'react-router-dom'
import '../App.css'
const UserSignup = () => {
  const [email,setEmail]=useState('')
  const [firstname,setFirstName]=useState('')
  const [lastname,setLastName]=useState('')
  const [password,setPassword]=useState('')
  const [userData,setUserData]=useState({})
  const submit=(e)=>{
    e.preventDefault()
    setUserData({
      fullname:{
        firstname,
        lastname
      },
      email,
      password
    })
    setEmail('')
    setPassword('')
  }
  return (
    <div style={{width:'100%'}}>
      <div className='login-container'>
        <div style={{width:'100%'}}>
          <img className='login-logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />

            <form onSubmit={(e) => {
              submit(e)
            }}
            style={{width:'100%',marginLeft:'-1%'}}>

              <h3 className='heading'>What's your name</h3>
              <div className='signup-name'>
                <input
                  required
                  className='signup-input'
                  type="text"
                  placeholder='First name'
                  value={firstname}
                  onChange={(e)=>setFirstName(e.target.value)}
                />
                <input
                  required
                  className='signup-input'
                  type="text"
                  placeholder='Last name'
                  value={lastname}
                  onChange={(e)=>setLastName(e.target.value)}
                />
              </div>

            <h3 className='heading'>What's your email</h3>
            <input
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              className='login-input signup-input'
              type="email"
              placeholder='email@example.com'
            />

            <h3 className='heading'>Enter Password</h3>

            <input
              className='login-input signup-input'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              required type="password"
              placeholder='password'
            />

            <button
              className='button'
            >Create account</button>

          </form>
          <p style={{textAlign:'center'}}>Already have a account? <Link to='/login' className='account'>Login here</Link></p>
        </div>
        <div>
          <p className='footer-base'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
      </div>
    </div >
  )
}

export default UserSignup