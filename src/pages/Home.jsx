import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const {user} = useSelector((state) => state.auth)
    const navigate = useNavigate()
    useEffect(()=>{
        if(!user){
            navigate("/login")
        }
    },[user])

  return (
    <>
      
      <Typography variant='h4' align='center' sx={{padding:"80px 0px"}}>
        i am home
      </Typography>
    </>
  )
}

export default Home