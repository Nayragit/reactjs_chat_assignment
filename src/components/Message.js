import React from 'react'

const Message = props => {
  const { message, loggedInUser, toggleMessageLikedStatus } = props;

  const toggleMessageLikeHandler = e => {
    toggleMessageLikedStatus(message.id);
  }

  return (
    <div className='messageBlock' style={{
      display: 'flex',
      flexDirection: message.userId === loggedInUser ? 'row-reverse' : 'row',
    }}  >
      <p>
        {message.message}
      </p>
      {
        message.liked 
        ?
        <button className="unlike-btn" onClick={toggleMessageLikeHandler} > <i class="fa-solid fa-heart"></i> </button>
        :
        <button className="like-btn" onClick={toggleMessageLikeHandler} > <i class="fa-solid fa-heart"></i> </button>
      }
    </div>
  )
}

export default Message
