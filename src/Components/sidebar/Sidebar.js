import React from 'react'
import './sidebar.css'
// import { useNavigate } from 'react-router-dom'
import {
   MdSubscriptions,
   MdExitToApp,
   MdThumbUp,
   MdHistory,
   MdLibraryBooks,
   MdHome,
   MdSentimentDissatisfied,
} from 'react-icons/md'
import { log_out } from '../../Redux/Actions/Authaction'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
function Sidebar({handleToggleSidebar,sidebar}) {
   const dispatch = useDispatch()
   const Navigate = useNavigate()
   //  console.log("sidebar",sidebar)
    return (
        <nav
           
           >

           <Link to='/'>
              <li>
                 <MdHome size={23} />
                 <span>Home</span>
              </li>
           </Link>
           <Link to='/feed/subscriptions'>
              <li>
                 <MdSubscriptions size={23} />
                 <span>Subscriptions</span>
              </li>
           </Link>
  
           <li>
              <MdThumbUp size={23} />
              <span>Liked Video</span>
           </li>
  
           <li>
              <MdHistory size={23} />
              <span>History</span>
           </li>
  
           <li>
              <MdLibraryBooks size={23} />
              <span>Library</span>
           </li>
           <li>
              <MdSentimentDissatisfied size={23} />
              <span>I don't Know</span>
           </li>
  
           <hr />
  
           <li onClick={()=>{
            dispatch(log_out)
            Navigate('/auth')
            }} >
              <MdExitToApp size={23} />
              <span>Log Out</span>
           </li>
  
           <hr />
        </nav>
     )
}

export default Sidebar