import React from 'react'
import {useMoralis} from 'react-moralis'
import Image from 'next/image'
function Message({ message }) {
    
    const {user} = useMoralis();
    const isUserMessage = message.get('ethAddress') === user.get('ethAddress');

    
  return (
    
    <div className={`hover:bg-gray-100 cursor-pointer mt-10 px-5  w-full relative ${isUserMessage && 'justify-center w-full px-10'}`}>

    <div className={` ${isUserMessage && 'w-full ml-2'}`}>
    </div>
    <div className=''>
      <div className='flex ml-[40px]'>
        <h1 className='font-semibold'>Aman Yadav</h1>
      <h1 className='px-2'>@theamnyadav</h1>
    <h1 className='items-center justify-center'>.</h1>
    <h1>3h</h1>
      </div>
<div className='flex '>
<Image className=' ml-20 cursor-pointer rounded-full' src="/twitter2.png" width={30} height={10} />
    <div className={`flex w-[250px] px-3 rounded-lg ${isUserMessage &&"rounded-br-none my-2 w-full" }`}>
        <p>{message.get('message')}</p>
        
        </div>
        </div>
        </div>
        <div className=' ml-[40px]'>
          <Image className='hover:text-blue-400 hover:p-2 hover:bg-blue-200 hover:rounded-full hover:cursor-pointer' src='/speech-bubble.png' width={20} height={20} /><span className='px-6'/>
        <Image className='hover:text-blue-400 hover:p-8 hover:bg-blue-200 hover:rounded-full hover:cursor-pointer' src='/refresh.png' width={20} height={20} /><span className='px-6'/>
        <Image className='hover:text-pink-500 hover:p-2 hover:bg-pink-200 hover:rounded-full hover:cursor-pointer' src='/heart.png' width={20} height={20} /><span className='px-6'/>
        <Image className='hover:text-blue-400 hover:p-2 hover:bg-blue-200 hover:rounded-full hover:cursor-pointer' src='/upload.png' width={20} height={20} /><span className='px-6'/>
        
</div>
    </div>    
    
    
    
  )
}

export default Message