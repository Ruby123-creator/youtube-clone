import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { auth } from '../../firbase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
function SignUpForm({handleClose}) {
    const [email,setEmail] = useState('')
    const [confirmpassword ,setConfirmPassword] = useState('')
    const [password,setPassword] = useState('')
    const handleSubmit =()=>{
        if(!email||!password||!confirmpassword){
              alert("all the fields are required")            
                 return;
        }
        if(password!==confirmpassword){
              alert("password mismatch")            
                 return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          
          
     alert("SignUp successfully")           
            handleClose()
        })
        .catch((error) => {
            alert(error.message)
          // ..
        });
      
    }
    return (
    <div>
        <Box
        p={3}
        style={{
            display:'flex',
            flexDirection:'column',
            gap:'20px'
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
            <TextField
            variant='outlined'
            type='password'
            label='Confirm Password'
            onChange={(e)=>{setConfirmPassword(e.target.value)}}
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
            >SignUp</Button>
       
        </Box>
    </div>
  )
}

export default SignUpForm