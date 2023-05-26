import React, {useState } from 'react'
import './header.css'
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps ,MdMic } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Header({handleToggleSidebar }) {
const [searchinput ,setSearchInput] = useState("")
const Navigate = useNavigate()
     const handleSubmit =(e)=>{
      e.preventDefault();
      Navigate(`/search/${searchinput}`)
      
     }
  const user = useSelector(state=>state.auth?.user)
  
    return (
        <div className='header '>
         <div style={{display:'flex' ,gap:'20px' ,alignItems:'center'}}>
            <div>
           <FaBars
              className='menu'
              size={26}
              onClick={() => handleToggleSidebar()}
           />
       </div>
       <div style={{display:'flex' ,alignItems:'center' ,gap:'5px'}} className='brand-icon'>
           <img
              src='https://cdn-icons-png.flaticon.com/512/1384/1384060.png'
              alt=''
              width={"20px"}
              className='logo'
           />
           <span style={{color:'#fff' ,fontWeight:'600'}}>YouTube <sup style={{color:'grey'}}>IN</sup> </span>
           </div>
           </div>
      

      <div style={{display:'flex' , alignItems:'center' ,justifyContent:'center'}}>
           <form onSubmit={handleSubmit} >
              <input
                 type='text'
                 placeholder='Search'
                 
                 onChange={(e)=>setSearchInput(e.target.value)}
              />
             <button type='submit'>                 <AiOutlineSearch size={22} />
            </button> 
           </form>
            <div className='Mic'>
               <MdMic size={26}/>
            </div>
           </div>
           
  
           <div className='icons'>
              <MdNotifications size={28} />
              <MdApps size={28} />
              <img src={user?.photoUrl} alt="avtar" />
           </div>
        </div>
  )
}

export default Header