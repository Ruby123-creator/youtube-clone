import React from 'react'
import { useSelector } from 'react-redux'
import Video from '../../Components/video/Video'

const WatchlaterScreen = () => {
  let videos = useSelector(state=>state.watchLaterVideos.savedVideos)
  console.log(videos)
  return (
    <div style={{display:'flex'}}>
      {
        videos?.map((video ,i)=>(
          <Video video={video} key={i}/>
        ))
      }
    </div>
  )
}

export default WatchlaterScreen;