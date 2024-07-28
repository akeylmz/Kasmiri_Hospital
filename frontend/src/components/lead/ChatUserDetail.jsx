import React from 'react'

const ChatUserDetail = ( {setDetailIsShow, detailIsShow }) => {
  return (
    <div>ChatUserDetail
        <button  onClick={() => setDetailIsShow(prevState => !prevState)} > 
            gizle
        </button>
    </div>
  )
}

export default ChatUserDetail