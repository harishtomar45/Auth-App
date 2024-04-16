import { Button, Container, LinearProgress, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../featurs/auth/authSlioce';
import { toast } from 'react-toastify';

const Register = () => {


    const {isLoading, isError, user, message} = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name : "",
        email : "",
        password : "",
        pasword2 : "",
    })


    const {name, email, password, password2} = formData;




    const handleChange = (e) => {
     setFormData({
       ...formData,
       [e.target.name] : e.target.value,
    } )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== password2){
            toast.error("password is not match")
        }
        dispatch(registerUser(formData));
    }

    useEffect(()=>{
        if(user){
            navigate("/")
        }

        if(isError || message){
            toast.error(message)
        }
    },[user, isError, message])

    const labelstyle = {
        margin : "10px 0px"
       }

       if(isLoading){
        return(
            <Container sx={{padding: " 80px 0px"}}>
                <LinearProgress/>
            </Container>
        )
       }

  return (
    <Container sx={{padding: " 80px 0px"}}>
    <Typography variant='h4' align='center' >
     Register 
    </Typography>
    <form onSubmit={handleSubmit}>
    <TextField
     variant='outlined'
     label=" Enter Name"
     onChange={handleChange}
     value={name}
     name='name'
     fullWidth sx={labelstyle}
     ></TextField>
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
       <TextField
     variant='outlined'
     label=" Enter confirm Password"
     type='password'
     onChange={handleChange}
     value={password2}
     name='password2'
     fullWidth sx={labelstyle}
     ></TextField>
     <Button variant='contained' type='submit' fullWidth sx={labelstyle} >
         Login
     </Button>
    </form>
 </Container>
  )
}

export default Register