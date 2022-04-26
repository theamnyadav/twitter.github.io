import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { RiHome7Fill } from 'react-icons/ri'
import { BiHash } from 'react-icons/bi'
import { FiMail } from 'react-icons/fi'
import { FiBell } from 'react-icons/fi'
import { CgMoreO } from 'react-icons/cg'
import { BiBookmark } from 'react-icons/bi'
import { MdOutlineLibraryBooks } from 'react-icons/md'
import { HiOutlineUser } from 'react-icons/hi'



const style = {button: `text-xl  cursor-pointer hover:bg-gray-200 rounded-full  px-5 py-[5px] w-3/4 my-2 flex  items-center `}
function Sidebar() {
  return (
    <div className=' w-[20%]  border-r-[1px] '>
        <div className='justify-center ml-7 items-center'>
        <Image className=' hover:bg-blue-500 cursor-pointer' src="/twitter.png" width={50} height={30} />
        </div>
        <div>
<ul className='flex flex-col cursor-pointer justify-between ml-4 my-3'>
    <li className={style.button}><RiHome7Fill className='h-8 w-8'/><span className='px-4'>Home</span></li>

    <li className={style.button}><BiHash className='h-8 w-8'/> <span className='px-4'>Explore</span></li>
    <li className={style.button}><FiBell className='h-8 w-8'/> <span className='px-4'>Notification</span></li>
    <li className={style.button}><FiMail className='h-8 w-8'/> <span className='px-4'>Message</span></li>
    <li className={style.button}><BiBookmark className='h-8 w-8'/> <span className='px-4'>Bookmark</span></li>
    <li className={style.button}><MdOutlineLibraryBooks className='h-8 w-8'/> <span className='px-4'>Lists</span></li>
    <Link href='/profile'><li className={style.button}><HiOutlineUser className='h-8 w-8'/> <span className='px-4'>Profile</span></li></Link>
    <li className={style.button}><CgMoreO className='h-8 w-8'/> <span className='px-4'>More</span></li>
</ul>
<button className='text-2xl text-white shadow-2xl font-medium cursor-pointer hover:opacity-90 bg-[#15a2fa] justify-center items-center rounded-full px-4 py-[5px] ml-4 p-4 w-[80%]'>Tweet</button>
        </div>
    </div>
  )
}

export default Sidebar