import classNames from 'classnames'
import React from 'react'

const Message = ({message}) => {
  return (
    <div className={classNames({
        'flex gap-x-2 max-w-[45%]': true,
        'self-end': message.fromMe
    })}>
        {!message.fromMe && <img src={message.avatar} className='w-6 h-6 rounded-full self-end object-cover' />}
        <p 
            style={{hyphens: 'auto'}}
            className={classNames({
                'min-h-[44px] inline-flex items-center py-2 px-4 text-sm rounded-3xl': true,
                'border border-gray-200': !message.fromMe,
                'bg-[#efefef]': message.fromMe
        })}>
            {message.message}
        </p>    
    </div>
  )
}

export default Message