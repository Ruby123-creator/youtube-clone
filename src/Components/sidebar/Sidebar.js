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
import { useNavigate } from 'react-router-dom'
function Sidebar({handleToggleSidebar,sidebar}) {
   //  console.log("sidebar",sidebar)
   const Navigate = useNavigate()
    return (
        <nav
           className={sidebar ? 'sidebar open' : 'sidebar'}
           onClick={() => handleToggleSidebar(false)}
           >

           <a to='/'>
              <li>
                 <MdHome size={23} />
                 <span>Home</span>
              </li>
           </a>
           <a to='/feed/subscriptions'>
              <li>
                 <MdSubscriptions size={23} />
                 <span>Subscriptions</span>
              </li>
           </a>
  
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
  
           <li onClick={()=>Navigate('/auth')} >
              <MdExitToApp size={23} />
              <span>Log Out</span>
           </li>
  
           <hr />
        </nav>
     )
}

export default Sidebar