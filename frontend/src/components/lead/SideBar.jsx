import React from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames';
import ChatList from './ChatList';

const SideBar = () => {  
  return (
    <aside className='h-full w-20p border-r border-gray-300'>
      <header className='h-[60px] border-b boder-gray-300'>

      </header>
      <ChatList />
    </aside>
  )
}

export default SideBar