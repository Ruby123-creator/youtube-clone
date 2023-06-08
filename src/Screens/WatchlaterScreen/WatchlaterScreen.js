import React, { useEffect ,useState } from 'react'
import Video from '../../Components/video/Video'
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../../firbase';

const WatchlaterScreen = () => {
  const [data, setData] = useState([]);

  const fetchData = async()=>{
    let videos =[]

    const querySnapshot = await getDocs(collection(db, "saveVideos"));
    querySnapshot.forEach((doc) => {
      // console.log(doc.data().savevideos)
      videos.push({ ...doc.data().savevideos });

      // console.log(`${doc.id} => ${doc.data()}`);

    });
    setData(videos)
  }
  useEffect(()=>{
    fetchData();
  },[])
  // console.log(data)
  
  return (
    <div style={{display:'flex' ,flexWrap:'wrap' ,justifyContent:'center' ,alignItems:'center'}}>
      {
        data?.map((video ,i)=>(
          <Video video={video} key={i}/>
        ))
      }
    </div>
  )
}

export default WatchlaterScreen;