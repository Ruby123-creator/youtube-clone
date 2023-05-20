import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getVideosBySearch } from '../../Redux/Actions/Videoaction'
import  { Container } from 'react-bootstrap'
import Skeleton , { SkeletonTheme } from 'react-loading-skeleton'
import VideoHor from '../../Components/VideoHorizontal/VideoHor'

function SearchScreen() {
    const {query} = useParams()
    console.log(query)

    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(getVideosBySearch(query))
    } ,[query,dispatch])
    const {videos ,loading} = useSelector(state=>state.searchedVideo)
    console.log(videos)
  return (
    <Container>
        
        {
            !loading?(
                videos.videos.map(video=>(
                    <VideoHor video={video} key ={video.id.videoId} searchScreen ={true}/>
                ))
            ):
            (
                <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                   <Skeleton width='100%' height='160px' count={20} />
                </SkeletonTheme>
             )        }
    </Container>
  )
}

export default SearchScreen