import { WATCH_LATER_VIDEOS } from "../ActionTypes";



export const watchLater =(state={
   savedVideos:[],
},action)=>{
   switch(action.type){
    case WATCH_LATER_VIDEOS:
    return {...state ,
   savedVideos:[...state.savedVideos ,{...action.payload}]
   }
    // case"REMOVE_FAV_VIDEOS":
    // return state.filter((Element)=>
    //     Element.id!==action.payload.id
    // )
    default: return state;
   }
}