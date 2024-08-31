import React from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames';
import ChatList from './ChatList';

const SideBar = () => {  
  return (
    <aside className='h-[calc(100%-32px)] ml-4 w-[20%] rounded-xl border-r my-4 border-gray-300 bg-white'>
      <header className='h-[60px] border-b boder-gray-300'>

      </header>
      <ChatList />
    </aside>
  )
}

export default SideBar