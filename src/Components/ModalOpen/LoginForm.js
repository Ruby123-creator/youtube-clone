import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { auth } from '../../firbase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function LoginForm({handleClose}) {
    const [email,setEmail] = useState('')

    const [password,setPassword] = useState('')
    const Navigate = useNavigate()
    const handleSubmit =()=>{
        if(!email||!password){
           alert("please enter email and password") 
          return;
        }
        signInWithEmailAndPassword(auth, email, password)
  .then(() => {
          alert("login successfully")
          sessionStorage.setItem("userToken" ,email)
        handleClose(); 
        Navigate('/')   
    
  })
  .catch((error) => {
      alert(error.message) 
  });
      
    }

    return (
    <div>
        <Box
        p={3}
        style={{
            display:'flex',
            flexDirection:'column',
            gap:'20px',
        }}
        >
            <TextField
            variant='outlined'
            type='email'
            label='Enter Email'
            onChange={(e)=>{setEmail(e.target.value)}}
            InputLabelProps={{
                style:{
                    color:'white',
                }
            }}
            inputProps={{
                style:{
                    color:'white',
                }
            }}
            />
            <TextField
            variant='outlined'
            type='password'
            label='Enter Password'
            onChange={(e)=>{setPassword(e.target.value)}}
            InputLabelProps={{
                style:{
                    color:'white',
                }
            }}
            inputProps={{
                style:{
                    color:'white',
                }
            }}
            />
            <Button
            variant='outlined'
            size='large'
            onClick={handleSubmit}
            style={{
                backgroundColor:'red',
                color:'white'
            }}
            >Login</Button>
       
        </Box>
    </div>
  )
}

export default LoginForm