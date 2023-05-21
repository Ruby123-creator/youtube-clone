import { COMMENT_LIST_FAIL, COMMENT_LIST_REQUEST, COMMENT_LIST_SUCCESS, CREATE_COMMENT_FAIL, CREATE_COMMENT_SUCCESS } from "../ActionTypes"
import request from "../../api"

export const getCommentsById =id=>async dispatch=>{
    try{
       dispatch({
          type:COMMENT_LIST_REQUEST,
       })
     const {data} = await request('/commentThreads',{
         params:{
          part:'snippet',
          videoId:id,
         }
       })
      //  console.log(data.items)
       dispatch({
          type:COMMENT_LIST_SUCCESS,
          payload:data.items,
       })
    }
    catch(error){
      console.log(error.message)
      dispatch({
       type:COMMENT_LIST_FAIL,
       paylaod:error.message
      })
    }
 }




//  export const addComment =(id,text)=>async (getState,dispatch)=>{
//     try{
//        const obj ={
//         snippet:{
//             videoId:id,
//             topLevelComment:{
//                 snippet:{
//                     textOriginal:text,
//                 }
//             }
//         }
//        }
//      await request('/commentThreads',obj,{
//          params:{
//           part:'snippet',
//          },
//          headers: {
//             Authorization: `Bearer ${getState().auth.accessToken}`,
//          },
//        })
//     //    console.log(data.items)
//        dispatch({
//           type:CREATE_COMMENT_SUCCESS,
//        })
//        setInterval(()=>dispatch(getCommentsById(id))
//        ,2000)
//     }
//     catch(error){
//       console.log(error.message)
//       dispatch({
//        type:CREATE_COMMENT_FAIL,
//        paylaod:error.message
//       })
//     }
//  }
