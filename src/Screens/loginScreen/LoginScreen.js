import './loginScreen.css'
import React, { useEffect } from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Login } from '../../Redux/Actions/Authaction'
import ModalOpen from '../../Components/ModalOpen/Modal'


const LoginScreen = () => {

 const dispatch = useDispatch()
 const accessToken = useSelector(state=>state.auth.accessToken)
 const handleLogin =()=>{
   dispatch(Login)
 }
 const Navigate = useNavigate();
 useEffect(()=>{
   if(accessToken){
      Navigate('/')
   }
 },[accessToken,Navigate])


   return (
      <div className='login'>
         <div className='container'>
            <h2>Youtube Clone</h2>
            <img width="50px"
               src='http://pngimg.com/uploads/youtube/youtube_PNG2.png'
               alt=''
            />
            <button onClick={handleLogin} >Login With google</button>
              <ModalOpen/>
            <p>This Project is made using YOUTUBE DATA API</p>
         </div>
      </div>
   )
}

export default LoginScreen