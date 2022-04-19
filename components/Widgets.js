import React from 'react'
import { BiSearch } from 'react-icons/bi'
function Widgets() {
  return (
    <div className='w-[25%] border-l-[2px] px-4'>
      <div className="flex  items-center justify-center border-[2px] rounded-full border-gray-300 ">
        <BiSearch />
        <span className='px-2'></span>
      <input type='text' className='bg-state-600 outline-none rounded-full   items-center py-2 ' placeholder='Search Twitter'/>
      </div>
    </div>
  )
}

export default Widgets