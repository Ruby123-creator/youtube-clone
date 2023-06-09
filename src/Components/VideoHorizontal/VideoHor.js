import React, { useEffect, useState } from 'react'
import './videohor.css'

import { AiFillEye } from 'react-icons/ai'
import request from '../../api'

import moment from 'moment'
import numeral from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function VideoHor({video}) {
   const [views, setViews] = useState(null)
   const [duration, setDuration] = useState(null)
   const [channelIcon, setChannelIcon] = useState(null)
  const Navigate = useNavigate();
  
   const {
      id,
      snippet: {
         channelId,
         channelTitle,
         title,
         publishedAt,
         thumbnails: { medium },
      },
   } = video
   useEffect(() => {
      const get_video_details = async () => {
         const {
            data: { items },
         } = await request('/videos', {
            params: {
               part: 'contentDetails,statistics',
               id: id.videoId,
            },
         })
         setDuration(items[0].contentDetails.duration)
         setViews(items[0].statistics.viewCount)
      }
    get_video_details()
   }, [id])
   const HandleClick =()=>{
   
     Navigate(`/watch/${id.videoId}`)

   }
   useEffect(() => {
      const get_channel_icon = async () => {
         const {
            data: { items },
         } = await request('/channels', {
            params: {
               part: 'snippet',
               id: channelId,
            },
         })
         setChannelIcon(items[0].snippet.thumbnails.default)
      }
      get_channel_icon()
   }, [channelId])
   const seconds = moment.duration(duration).asSeconds()
   const _duration = moment.utc(seconds * 1000).format('mm:ss')



  return (
    <Row className='videoHorizontal m-1 w-full align-align-items-center' onClick={HandleClick}>
   <Col
            xs={6}
            className='left'>



          <div className="video-img">
          <LazyLoadImage
               src={medium.url}
               effect='blur'
               className='thumbnail'
               wrapperClassName='thumbnail-wrapper'
            />

            
            <span className='duration'>{_duration}</span>

          </div>
 
         
         </Col>
         <Col
            xs={6}
         
            className='p-0 right'>
            <p className='mb-1 title'>{title}</p>

            
               <div className='details'>
                  <AiFillEye /> {numeral(views).format('0.a')} Views •
                  {moment(publishedAt).fromNow()}
               </div>
               
<div className='mb-2 channel d-flex align-items-center'>
            
                  <LazyLoadImage src={channelIcon?.url} effect='blur' />
               
               <p className='mb-0'>{channelTitle}</p>
            </div>
            
         </Col>
    </Row>
  )
}

export default VideoHor