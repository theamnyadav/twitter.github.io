import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import { useMoralis } from 'react-moralis'
import Login from '../components/Login'
import Messages from '../components/Messages';
const Home =() => {
  const { isAuthenticated,logout} = useMoralis();

if(!isAuthenticated) return <Login/>
  return (
    <div className="m-4">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div className='flex flex-row justify-evenly'>
      <Sidebar/>
      
      <Messages/>
      <Widgets/>
      </div>
      
    </div>
  )
}

export default Home
