import React, { useEffect } from 'react'
import './comments.css'
import Comment from '../Comment/Comment'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCommentsById } from '../../Redux/Actions/CommentAction'
function Comments({videoId,totalComments}) {
    const [text,setText] = useState("")
    const dispatch = useDispatch()
    const comments = useSelector(state=>state.commentList.comments)
   const commnetList = comments?.map(comment=>comment.snippet.topLevelComment.snippet)
   const handleComment =(e)=>{
    e.preventDefault()
    if(text==='')return
    setText('')
   }
   let user = useSelector(state=>state.auth?.user)
    useEffect(()=>{
       dispatch(getCommentsById(videoId))
    },[dispatch,videoId])
  return (
    <div className='comments'>
        <p>{totalComments} comments</p>
        <div className="form d-flex w-100 my-2">
            <img src={user?.photoUrl}
             alt="" 
             className='rounded-circle mr-3'/>
        
        <form action="">
            <input type="text" name="" placeholder='Write a comment'
            value={text}
            onChange={(e)=>setText(e.target.value)}
            id="" />
            <button onClick={handleComment} className='border-0'>Comment</button>
        </form>
        </div>
        <div className="list">
            {
                commnetList?.map((comment,index)=>(
                    <Comment comment={comment} key ={index}/>
                ))
            }
        </div>
    </div>
  )
}

export default Comments