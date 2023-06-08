import React, { useEffect, useState } from 'react'
import './VideometaData.css'
import moment from 'moment'
import numeral from 'numeral'
import { MdWatchLater } from "react-icons/md";
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
// import { checkSubscriptionStatus } from '../../Redux/Actions/Channel'
import ShowMoreText from 'react-show-more-text'
import { useDispatch, useSelector } from 'react-redux'
import { getChannelDetails } from '../../Redux/Actions/Channel'
import { db } from '../../firbase';
import { addDoc ,collection } from 'firebase/firestore';
function VideoMetaData({video,videoId}) {
  const {channelId ,channelTitle ,description,title,publishedAt} = video.snippet;
  const {viewCount,likeCount,dislikeCount} = video.statistics
  const {snippet:channelSnippet,statistics:channelStatistics} = useSelector(state=>state.channelDetails.channel)
//   const subscriptionStatus = useSelector(state=>state.channelDetails.subscriptionStatus)
const [subscriptionStatus,setSubscriptionStatus] = useState(false)
const [like ,setlike] = useState(false)
const [dislike,setdislike] = useState(false)
let watchlaterVideos = [];
const saveLater =async (video)=>{
   watchlaterVideos.forEach((element)=>{
      if(element.id===video.id){
         return;
      }
   })
   watchlaterVideos.push(video)
   try {
      const docRef = await addDoc(collection(db ,"saveVideos"), {
       savevideos:video,
      });
      console.log("Document written with ID:",docRef);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(getChannelDetails(channelId))
      // dispatch(checkSubscriptionStatus(channelId))
  },[dispatch,channelId])
  return(
  <div className='py-2 videoMetaData'>
  {/* <HelmetCustom title={title} description={description} /> */}

  <div className='top'>
     <h5>{title}</h5>
     <div className='py-1 d-flex justify-content-between align-items-center'>
        <span>
           {numeral(viewCount).format('0.a')} Views •{' '}
           {moment(publishedAt).fromNow()}
        </span>

        <div className='d-flex gap-3'>
         <span className='mr-6'>
            <MdWatchLater size={26} onClick={()=>
            {  
               
               saveLater(video)
            }}/>
         </span>
           <span className='mr-3'>
              <MdThumbUp size={26} onClick={()=>{
               setlike(!like) 
            setdislike(!dislike)
            
            }} className={`${like?'like':'dislike'}`}/> {numeral(likeCount).format('0.a')}
           </span>
           <span className='mr-3'>
              <MdThumbDown onClick={()=>{
               setlike(!like) 
            setdislike(!dislike)
            }} 
               size={26} className={`${dislike?'dislike':'like'}`} />{' '}
              {numeral(dislikeCount).format('0.a')}
           </span>
        </div>
     </div>
  </div>
  <div className='py-3 my-2 channel d-flex justify-content-between align-items-center'>
     <div className='d-flex gap-3'>
        <img
           src={channelSnippet?.thumbnails?.default?.url}
          
           alt=''
           className='rounded-circle'
        />
        <div className='d-flex flex-column'>
           <span>{channelTitle}</span>
           <span>
              {' '}
              {numeral(
                channelStatistics?.subscriberCount
                ).format(
                 '0.a'
              )}{' '}
              Subscribers
           </span>
        </div>
     </div>

     <button onClick={()=>setSubscriptionStatus(!subscriptionStatus)}
        className={`p-2 m-2 border-0 btn ${
           subscriptionStatus && 'btn-gray'
        }`}>
        {subscriptionStatus ? 'Subscribed' : 'Subscribe'}
     </button>
  </div>
  <div className='description'>
     <ShowMoreText
        lines={3}
        more='SHOW MORE'
        less='SHOW LESS'
        anchorClass='showMoreText'
        expanded={false}>
        {description}
       
     </ShowMoreText>
  </div>
</div>
)
}

export default VideoMetaData