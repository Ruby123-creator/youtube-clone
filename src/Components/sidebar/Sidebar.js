import React from 'react'
import './sidebar.css'
import { MdWatchLater } from "react-icons/md";

// import { useNavigate } from 'react-router-dom'
import {
   MdSubscriptions,
   MdExitToApp,
   MdThumbUp,
   MdHistory,
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
        className={sidebar ? 'sidebar open' : 'sidebar'}
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
  
           <Link to='/feed/watchlater'>
            <li>
              <MdWatchLater size={23} />
              <span>Watch Later</span>
              </li>
           </Link>
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