import { AppBar, Modal, Tabs,Tab } from '@mui/material'
import React,{useState} from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
function ModalOpen() {
    const [open ,setOpen] = useState(false)
    const [value ,setValue] = useState(0)
    
    
  const handleModalOpen =()=>{
    
    setOpen(true);
    
  }
  const handleClose=()=>{
    setOpen(false)
  }
  const handleChange=(e,v)=>{
    setValue(v)
  }

  
  
    return (
    <div>
      <div style={{display:'flex' ,gap:'20px'}}>
      <button onClick={handleModalOpen} >SignIn/Signup with Email & password</button>

      </div> 
        <Modal
         open={open}
         onClose={handleClose}
        style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
            
        }}
        >
        <div style={{width:"360px",
         border:`1px solid red`,
         padding:'2px',
         borderRadius:'5px',
         textAlign:'center'
      }}>
        <AppBar position='static' 
        style={{background:"transparent"}}
        >
            <Tabs
            value={value}
            onChange ={handleChange}
            
            variant ='fullWidth'>
                <Tab  label='Login' style={{color:'red'}}></Tab>
                <Tab  label='Signup' style={{color:'red'}}></Tab>

            </Tabs>
        </AppBar>
         {value===0 && <LoginForm handleClose ={handleClose}/> }
        {value===1 && <SignUpForm handleClose ={handleClose}/> }
        
        
        </div>
        </Modal>
    </div>
  )
}

export default ModalOpen;