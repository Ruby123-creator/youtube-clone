import {RELATED_VIDEO_REQUEST,RELATED_VIDEO_SUCCESS,RELATED_VIDEO_FAIL, HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS,SELECTED_VIDEO_FAIL,SELECTED_VIDEO_REQUEST,SELECTED_VIDEO_SUCCESS } from "../ActionTypes"

const initialstate ={
    videos:[],
    loading:false,
    nextPageToken:null,
    activeCategory:'All'
}

export const HomeVideoReducer =(state=initialstate,action)=>{
     const {type,payload} = action
    switch(type){
      case HOME_VIDEOS_SUCCESS:
        return{
            ...state,
            videos:
            state.activeCategory === payload.category
                              ? [...state.videos, ...payload.videos]
                              : payload.videos,
            loading:false,
            nextPageToken:payload.nextPageToken,
            activeCategory:payload.category
        }
        case HOME_VIDEOS_FAIL:
        return{
            ...state,
            error:payload,
            loading:false,
        }
        case HOME_VIDEOS_REQUEST:
        return{
            ...state,
            loading:true,
        }
        default:
            return state;
    }
}


export const selectedVideoReducer = (
    state = {
       loading: true,
       video: null,
    },
    action
 ) => {
    const { payload, type } = action
 
    switch (type) {
       case SELECTED_VIDEO_REQUEST:
          return {
             ...state,
             loading: true,
          }
       case SELECTED_VIDEO_SUCCESS:
      //   console.log(payload)
          return {
             ...state,
             video: payload,
             loading: false,
          }
       case SELECTED_VIDEO_FAIL:
          return {
             ...state,
             video: null,
             loading: false,
             error: payload,
          }
 
       default:
          return state
    }
 }
 
 export const relatedVideoReducer = (
   state = {
      loading: true,
      videos: [],
   },
   action
) => {
   const { payload, type } = action

   switch (type) {
      case RELATED_VIDEO_REQUEST:
         return {
            ...state,
            loading: true,
         }
      case RELATED_VIDEO_SUCCESS:
         return {
            ...state,
            videos: payload,
            loading: false,
         }
      case RELATED_VIDEO_FAIL:
         return {
            ...state,
            loading: false,
            error: payload,
         }

      default:
         return state
   }
}