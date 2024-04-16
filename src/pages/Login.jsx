import { Button, Container, LinearProgress, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../featurs/auth/authSlioce'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {


    const {isLoading, isError, user, message} = useSelector((state) => state.auth)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email : "",
        password : ""
    })

    const {email, password} = formData ;

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name] : e.target.value ,
      })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
           dispatch(loginUser(formData))
    }

    useEffect(()=>{
        if(user){
             navigate("/")
        }

        if(isError || message){
            toast.error(message)
        }
    },[user, isError , message])

    const labelstyle = {
     margin : "10px 0px"
    }

    if(isLoading){
        return(
            <Container sx={{padding: "80px 0px"}}>
                <LinearProgress/>
            </Container>
        )
    }

  return (
    <Container sx={{padding: " 80px 0px"}}>
       <Typography variant='h4' align='center' >
        Login 
       </Typography>
       <form onSubmit={handleSubmit}>
        <TextField
        variant='outlined'
        label=" Enter Email"
        onChange={handleChange}
        value={email}
        name='email'
        fullWidth sx={labelstyle}
        ></TextField>
          <TextField
        variant='outlined'
        label=" Enter Password"
        type='password'
        onChange={handleChange}
        value={password}
        name='password'
        fullWidth sx={labelstyle}
        ></TextField>
        <Button variant='contained' type='submit' fullWidth sx={labelstyle} >
            Login
        </Button>
       </form>
    </Container>
  )
}

export default Login