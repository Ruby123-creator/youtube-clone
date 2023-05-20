import './App.css';
import Header from './Components/header/Header';
import Sidebar from './Components/sidebar/Sidebar';
import HomeScreen from './Screens/homeScreen/HomeScreen';
import { Container } from 'react-bootstrap';
import { Route,Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import LoginScreen from './Screens/loginScreen/LoginScreen';
import WatchScreen from './Screens/WatchScreen/WatchScreen';
import SearchScreen from './Screens/searchScreen/SearchScreen';
import ChannelScreen from './Screens/channelScreen/ChannelScreen';
const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false)
   //   console.log('sidebar' ,sidebar)
  const handleToggleSidebar = () => toggleSidebar(value => !value)

  return (
     <>
        <Header handleToggleSidebar={handleToggleSidebar} />
        <div className='app__container'>
           <Sidebar
              sidebar={sidebar}
              handleToggleSidebar={handleToggleSidebar}
           />
           <Container fluid className='app__main '>
              {children}
           </Container>
        </div>
     </>
  )
}

function App() {
   const {Token ,loading} =useSelector(state=>state.auth)
  const Navigate = useNavigate()
  useEffect(()=>{
    if(!sessionStorage.getItem("userToken")){
         Navigate('/auth')
    }
   //  else{
   //    Navigate('/')
   //  }
  },[Token,loading,Navigate])
  return (
    <div className="App">
      <Routes>
       <Route path='/' element={<Layout>
               <HomeScreen />
            </Layout>}/>
        <Route path="/auth" element={<Layout><LoginScreen/></Layout>}/>    
        <Route path="/watch/:id" element={<Layout><WatchScreen/></Layout>}/>    
        <Route path="/search/:query" element={<Layout><SearchScreen/></Layout>}/>  
        <Route path="/channel/:channelid" element={<Layout><ChannelScreen/></Layout>}/>    
        <Route path="/feed/subscriptions" element={<Layout><ChannelScreen/></Layout>}/>    


         </Routes> 
    </div>
  );
}

export default App;
