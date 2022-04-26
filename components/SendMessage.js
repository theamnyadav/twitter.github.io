import { MdStarOutline }  from 'react-icons/md'
import { BiUserCircle }  from 'react-icons/bi'
import { BsImageFill }  from 'react-icons/bs'
import { AiOutlineFileGif }  from 'react-icons/ai'
import { BsEmojiSmile }  from 'react-icons/bs'
import { GrLocation }  from 'react-icons/gr'
import { useMoralis } from 'react-moralis'

import React, {useState,useEffect} from 'react'
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
  } from "firebase/storage";
  import { storage } from "../components/firebase";
  import { v4 } from "uuid";

function SendMessage() {
  const [imageuplad, setImageuplad] = useState(null)
  const [imageurl,setImageurl] = useState([])
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
  
  const imagelisRef = ref(storage,'image2/');
  
  const uploadFile = () => {
      if(imageuplad == null) return;
      const imageRef = ref(storage,`image2/${imageuplad.name + v4()}`);
      uploadBytes(imageRef, imageuplad).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url)=>{
              setImageurl((prev)=>[...prev, url]);
          });
      });
  };
  
  useEffect(()=>{
      listAll(imagelisRef).then((response)=>{
          response.items.forEach((item)=>{
              getDownloadURL(item).then((url)=>{
                  setImageurl((prev)=>[...prev,url]);
              });
          });
  
      });
  },[]);
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
<h1>
<input type='file' onChange={(event)=>{
setImageuplad(event.target.files[0]);
        }}/>
        <button onClick={uploadFile}>Uplad files
  <BsImageFill className='text-blue-400 '/><span className="px-4"></span></button>
  
        {imageurl.map((url) => {
        return <img src={url} className='w-56 h-30'/>
})}
        
        </h1>
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