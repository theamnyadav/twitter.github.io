import React, {useState} from 'react'
import { MdStarOutline }  from 'react-icons/md'
import { BiUserCircle }  from 'react-icons/bi'
import { BsImageFill }  from 'react-icons/bs'
import { AiOutlineFileGif }  from 'react-icons/ai'
import { BsEmojiSmile }  from 'react-icons/bs'
import { GrLocation }  from 'react-icons/gr'
import { useMoralis } from 'react-moralis'

function SendMessage() {
  const {user,Moralis} = useMoralis();
  const [message, setMessage] = useState("");
  const sendMessage = (e) =>{
    e.preventDefault();



if(!message) return;

    const Message = Moralis.Object.extend("Messages")
    const messages = new Message();

    messages.save({
      message:message,
       ethAddress : user.get('ethAddress')
    }).then((message)=>{
      // The object was saved successfully
    })
    setMessage("")
  }
  return (
    <div className='w-full items-center justify-center  '>
      <div className='flex justify-between my-1'>
        <h1 className='text-2xl font-bold cursor-pointer'>
          Home
        </h1>
        <h1><MdStarOutline className='h-8 w-8 cursor-pointer'/></h1>
      </div>
      <div className='flex items-center my-6'>
        <BiUserCircle className="h-8 w-8"/><span className='px-3'></span>
      <input type="text" 
       value={message}
       onChange={(e)=>setMessage(e.target.value)}
      className="placeholder:text-slate-400 outline-none text-xl w-full" placeholder="What's happening?"/>
      </div>
      <div className='flex justify-between items-center'>
        <div className="flex px-6">
<h1><BsImageFill className='text-blue-400 '/><span className="px-4"></span></h1>
<h1><AiOutlineFileGif className='text-blue-400'/><span className="px-4"></span></h1>
<h1><BsEmojiSmile className='text-blue-400'/><span className="px-4"></span></h1>
<h1><GrLocation className='text-blue-400'/></h1>
</div>
<button className='text-2xl text-white shadow-xl font-medium cursor-pointer hover:opacity-90 bg-[#15a2fa] justify-center items-center rounded-full px-4 py-[5px] p-4 ' type='submit' onClick={sendMessage}>Tweet</button>

        </div>
        <hr className='border-b-[1px] mt-4'/>
    </div>
  )
}

export default SendMessage