import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from '../context/userContext'

const UserProtectWrapper = ({children}) => {
    const token=localStorage.getItem('token')
    const {user,setUser}=useContext(UserDataContext)
    const [isLoading,setIsLoading]=useState(true)

    const navigate=useNavigate()

    async function profile() {
      console.log('I am here')
      axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      }).then((res)=>{
        const data=res.data
        if(res.status===200)
        {
          console.log(res)
          setUser(data.user)
          setIsLoading(false)
        }
      }).catch((err)=>{
        console.log(err)
        localStorage.removeItem('token')
        navigate('/login')
      })
    }

    useEffect(()=>{
      if(!token)
        navigate('/login')
      profile()
    },[token])

    if(isLoading)
      {
        return (
          <div>Loading...</div>
      )
    }

  return (
    <>{children}</>
  )
}

export default UserProtectWrapper