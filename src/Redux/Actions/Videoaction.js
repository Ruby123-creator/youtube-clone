import { RELATED_VIDEO_REQUEST,RELATED_VIDEO_SUCCESS,RELATED_VIDEO_FAIL,HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS, SELECTED_VIDEO_FAIL, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS } from "../ActionTypes"
import request from "../../api";
import axios from "axios"
// console.log(key)

export const getPopularVideos =()=>async (dispatch)=>{
  const key = process.env.REACT_APP_YT_API_KEY;
//   console.log(key)

    try{
          dispatch({
            type: HOME_VIDEOS_REQUEST,
          })
         //  console.log(dispatch,"dispatch")
     const {data} = await axios.get('https://youtube.googleapis.com/youtube/v3/videos',{
            params:{
                part:'snippet,contentDetails,statistics',
                chart:"mostPopular",
                regionCode:'IN',
                maxResults:24,
                pageToken:'',
                key:key,

            },

          })
          dispatch({
            type:HOME_VIDEOS_SUCCESS,
            payload:{
              videos:data.items,
              nextPageToken:data.nextPageToken,
              category:'All'
            }
          })

    }
    catch(error){
           console.log(error.message)
           dispatch({
            type:HOME_VIDEOS_FAIL,
            paylaod:error.message,
           })
    } 
}




export const getVideosByCategory = keyword => async (dispatch, getState) => {
  try {
     dispatch({
        type: HOME_VIDEOS_REQUEST,
     })
     const { data } = await request('/search', {
        params: {
           part: 'snippet',

           maxResults: 24,
           pageToken: getState().homeVideos.nextPageToken,
           q: keyword,
           type: 'video',
        },
     })

     dispatch({
        type: HOME_VIDEOS_SUCCESS,
        payload: {
           videos: data.items,
           nextPageToken: data.nextPageToken,
           category: keyword,
        },
     })
  } catch (error) {
     console.log(error.message)
     dispatch({
        type: HOME_VIDEOS_FAIL,
        payload: error.message,
     })
  }
}


export const getVideosById =id=>async dispatch=>{
   try{
      dispatch({
         type:SELECTED_VIDEO_REQUEST,
      })
    const {data} = await request('/videos',{
        params:{
         part:'snippet,statistics',
         id:id,
        }
      })
      // console.log(data.items[0])
      dispatch({
         type:SELECTED_VIDEO_SUCCESS,
         payload:data.items[0]
      })
   }
   catch(error){
     console.log(error.message)
     dispatch({
      type:SELECTED_VIDEO_FAIL,
      paylaod:error.message
     })
   }
}




export const getRelatedVideos = id => async dispatch => {
   try {
      dispatch({
         type: RELATED_VIDEO_REQUEST,
      })

      const { data } = await request('/search', {
         params: {
            part: 'snippet',
            relatedToVideoId: id,
            maxResults: 15,
            type: 'video',
         },
      })
      console.log(data)
      dispatch({
         type: RELATED_VIDEO_SUCCESS,
         payload: data.items,
      })
   } catch (error) {
      console.log(error.response.data.message)
      dispatch({
         type: RELATED_VIDEO_FAIL,
         payload: error.response.data.message,
      })
   }
}
