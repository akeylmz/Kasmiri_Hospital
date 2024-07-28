import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import classNames from 'classnames';

const ChatList = () => {
    const {chatId} = useParams()
    console.log(chatId);
    const chats = [
        {
          id: 1,
          user: {
            avatar: '/images/profile3.jpg',
            name: "Yusuf Kuru"
          },
          lastMessage: "Selam Ahmet",
          social: '/images/insta.png'
        },
        {
          id: 2,
          user: {
            avatar: '/images/profile1.jpg',
            name: "Mehmet Enes"
          },
          unread: true,
          lastMessage: "Naber?",
          social: '/images/face.png'
        },
        {
          id: 3,
          user: {
            avatar: '/images/profile2.jpg',
            name: "Yusuf Kuru"
          },
          lastMessage: "Selam Ahmet",
           social: '/images/insta.png'
        }
      ]
  return (
    <section className='h-[calc(100%-60px)] overflow-auto py-3'>
          <header className='flex items-center justify-between px-5 mb-1'>
            <h6 className='text-base font-semibold'>Messages</h6>
            <button className='text-blue-600 text-sm font-semibold'>16 request</button>
          </header>
          {chats.map(chat => (
            <NavLink 
              className={classNames({
                "h-[72px] flex items-center gap-x-4 hover:bg-zinc-50 px-5" : true,
                "font-semibold" : chat?.unread,
                "!bg-[#efefef]" : +chatId === chat.id
              })}
              key={chat.id} 
              to={`/lead/${chat.id}`}
            >
              <img src={chat.user.avatar} className='w-14 h-14 rounded-full object-cover' />
              <div>
                <h6 className='text-sm'>{chat.user.name}</h6>
                <p className={`text-sm ${!chat?.unread && "text-[#8e8e8e]"}`}>
                  {chat.lastMessage}
                </p>
              </div>
              {/* <img src={chat.user.social} className='w-14 h-14 rounded-full object-cover' /> */}
            </NavLink>
          ))}
      </section>
  )
}

export default ChatList