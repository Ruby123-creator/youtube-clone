import React from 'react'
import './homeScreen.css'
import { getPopularVideos } from '../../Redux/Actions/Videoaction'
import { useDispatch ,useSelector } from 'react-redux'
import { Container,Col } from 'react-bootstrap'
import InfiniteScroll from 'react-infinite-scroll-component'
import SkeletonVideo from '../../Components/Skeleton'
import { getVideosByCategory } from '../../Redux/Actions/Videoaction'
import Video from '../../Components/video/Video'
import { useEffect } from 'react'
import CategoryBar from '../../Components/categoryBar/CategoryBar'
function HomeScreen() {
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getPopularVideos())
    }, [dispatch])
 
    const { videos, activeCategory, loading } = useSelector(
       state => state.homeVideos
    )
 
    const fetchData = () => {
       if (activeCategory === 'All') dispatch(getPopularVideos())
       else {
          dispatch(getVideosByCategory(activeCategory))
       }
    }
 
  return (
    <Container>
        <CategoryBar/>
        <InfiniteScroll
            dataLength={videos.length}
            next={fetchData}
            hasMore={true}
            loader={
               <div className='spinner-border text-danger d-block mx-auto'></div>
            }
            >
               <div className='videoBox'>
            {!loading
               ? videos.map((video,i) => (
                  //   <Col lg={3} md={4}>
                       <Video video={video} key={i} />
                  //   {/* </Col> */}
                 ))
               : [...Array(20)].map(() => (
                    <Col lg={3} md={4}>
                       <SkeletonVideo />
                    </Col>
                 ))}
                 </div>
         </InfiniteScroll>
    </Container>
  )
}

export default HomeScreen