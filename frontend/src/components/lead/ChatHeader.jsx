import React from 'react'

const ChatHeader = ({user}) => {
  return (
    <header className='h-[60px] border-b boder-gray-300 flex items-center px-6'>
        <button className='flex items-center gap-x-4'>
            <img src={user.avatar} className='w-12 h-12 rounded-full object-cover' />
            <h6 className='text-base font-semibold'>{user.name}</h6>
        </button>
    </header>
  )
}

export default ChatHeader