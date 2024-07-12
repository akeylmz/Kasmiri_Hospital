import React from 'react'
import { GrAttachment } from "react-icons/gr";
import { BsSend } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const LeadPage = () => {

  const chats = [
    {
      id: 1,
      user: {
        avatar: '/images/profile1.jpg',
        name: "Yusuf Kuru"
      },
      lastMessage: "Selam Ahmet"
    },
    {
      id: 2,
      user: {
        avatar: '/images/profile1.jpg',
        name: "Mehmet Enes"
      },
      unread: true,
      lastMessage: "Karnıyarık bozmuş mudur?"
    },
    {
      id: 3,
      user: {
        avatar: '/images/profile1.jpg',
        name: "Yusuf Kuru"
      },
      lastMessage: "Selam Ahmet"
    }
  ]


  return (
    <div className='w-full h-full flex border border-gray-300'>
        <div className='h-full w-20p border-r border-gray-300'>
          <header className='h-[60px] border-b boder-gray-300'>

          </header>
          <section className='h-[calc(100%-60px)] overflow-auto py-3'>
              <header className='flex items-center justify-between px-5 mb-1'>
                <h6 className='text-base font-semibold'>Messages</h6>
                <button className='text-blue-600 text-sm font-semibold'>16 request</button>
              </header>
              {chats.map(chat => (
                <NavLink 
                  className={classNames({
                    "h-[72px] flex items-center gap-x-4 hover:bg-zinc-50 px-5" : true,
                    "font-semibold" : chat?.unread
                  })}
                  key={chat.id} 
                  to={"/inbox"}
                >
                  <img src={chat.user.avatar} className='w-14 h-14 rounded-full ' />
                  <div>
                    <h6 className='text-sm'>{chat.user.name}</h6>
                    <p className={`text-sm ${!chat?.unread && "text-[#8e8e8e]"}`}>
                      {chat.lastMessage}
                    </p>
                  </div>
                </NavLink>
              ))}
          </section>
        </div>
        <div className='h-full w-80p flex flex-col'>
            <nav className='w-full h-[60px] border-b border-gray-300'>

            </nav>
            <section className='h-full-110 '>

            </section>
            <footer className='w-full h-[50px] px-[20px] flex gap-3 justify-start items-center border-t border-gray-300'>
                <div><GrAttachment className='w-[25px] h-[25px]'/></div>
                <input
                    className='h-[35px] w-full-50 rounded-lg !focus:outline-none'
                    type="text" />
                <div><BsSend className='w-[25px] h-[25px]'/></div>
            </footer>
        </div>
    </div>
  )
}

export default LeadPage