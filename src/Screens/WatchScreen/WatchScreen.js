import React, { useEffect } from 'react'
import './watchscreen.css'
import { Row,Col } from 'react-bootstrap'
import VideoMetaData from '../../Components/VideometaData/VideoMetaData'
import VideoHor from '../../Components/VideoHorizontal/VideoHor'
import Comments from '../../Components/Comments/Comments'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { getRelatedVideos, getVideosById } from '../../Redux/Actions/Videoaction'
function WatchScreen() {
  const {id} = useParams()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getVideosById(id))
    dispatch(getRelatedVideos(id))
  },[dispatch,id])
  const {video ,loading} = useSelector(state=>state.selectedVideo)
  const {videos} =useSelector(state=>state.relatedVideos)
  document.title = video?.snippet?.title;
  return (
    <Row>
     <Col lg={8}>
        <div className="watchScreen">
        <iframe width="100%" height="100%"
        allowFullScreen
        className='ScreenVideo'
        title={video?.snippet?.title}
       src={`https://www.youtube.com/embed/${id}`}
>
</iframe>
        </div>
        {
          !loading? <VideoMetaData video={video} videoId={id}/>:<h6>loading...</h6>

        }
        <Comments videoId={id} totalComments={video?.statistics.commentCount}/>
     </Col >
     <Col lg={4}>
     {!loading ? (
               videos
                  ?.filter(video => video.snippet)
                  .map(video => (
                     <VideoHor video={video} key={video.id.videoId}/>
                  ))
            ) : (
               <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                  <Skeleton width='100%' height='130px' count={15} />
               </SkeletonTheme>
            )
            }
     </Col>
    </Row>
  )
}

export default WatchScreen