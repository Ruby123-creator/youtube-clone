import React from 'react'
import './header.css'
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'
function Header({handleToggleSidebar }) {
    return (
        <div className='header '>
           <FaBars
              className='menu'
              size={26}
              onClick={() => handleToggleSidebar()}
           />
  
           <img
              src='https://1000logos.net/wp-content/uploads/2017/05/Color-YouTube-logo.jpg'
              alt=''
              className='logo'
           />
  
           <form >
              <input
                 type='text'
                 placeholder='Search'
                 
                 
              />
              <button type='submit'>
                 <AiOutlineSearch size={22} />
              </button>
           </form>
  
           <div className='icons'>
              <MdNotifications size={28} />
              <MdApps size={28} />
              <img src='' alt='avatar' />
           </div>
        </div>
  )
}

export default Header