import React from 'react'
import SendMessage from '../components/SendMessage';
import {useMoralisQuery} from 'react-moralis'
import Message from './Message';
const MINS_DURATION = 190000;

function Messages() {
  const {data,loading,error} = useMoralisQuery(
    'Messages',
    (query) => query.descending("createdAt").greaterThan("createdAt",new Date(Date.now() -1000 * 60 *MINS_DURATION)
    ),[],
    {
      live:true,
    }
  );
  console.log(data);
  return (
    <div >
      <div className='w-[120%]'>
        <SendMessage />
        </div>
    <div className='w-full '>
      {data.map((message)=>(
        <Message key={message.id} message={message}/>
      ))};
    
      
      
        </div>
   
    </div>
  )
}

export default Messages