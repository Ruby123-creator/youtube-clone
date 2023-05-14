import React from 'react'
import './comment.css'
import moment from 'moment'
function Comment({comment}) {
  const {
    authorDisplayName,
    authorProfileImageUrl,
    publishedAt,
    textDisplay,
 } = comment
   return (
    <div className='comment p-2 d-flex'>
        <img src={authorProfileImageUrl}
         alt="img" 
         className='rounded-circle mr-3'
         />
         <div className="comment-body">
            <p className="comment-header">
            {authorDisplayName} • {moment(publishedAt).fromNow()}

            </p>
            <p>
              {textDisplay}
            </p>
         </div>
    </div>
  )
}

export default Comment