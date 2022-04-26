import React from 'react'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import Messages from '../components/Messages'

function profile() {
  return (
  <div className="flex flex-row">
    <Sidebar/>
    <div className='w-[500px] justify-center'>This is Profile page</div>
    <Messages/>
    <Widgets/>
    </div>
  )
}

export default profile