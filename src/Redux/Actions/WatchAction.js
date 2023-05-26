import { WATCH_LATER_VIDEOS ,REMOVE_WATCH_LATER_VIDEOS } from "../ActionTypes";

export const saveVideos =(data)=>{
    // console.log(data)
    return{
        type:WATCH_LATER_VIDEOS,
        payload:data,
    }
}
export const RemovesaveVideos =(id)=>{
    return{
        type:REMOVE_WATCH_LATER_VIDEOS,
        payload:id,
    }
}