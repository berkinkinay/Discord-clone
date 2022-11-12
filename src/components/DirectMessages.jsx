import React from 'react'
import  { AiOutlineUser } from 'react-icons/ai'
import { RiDiscordLine, RiSettings2Line } from 'react-icons/ri'
import { BsFillMicFill, BsHeadphones } from 'react-icons/bs'
import Me from '../assets/ventunos.png'
import UserCard from './UserCard';

const DirectMessages = () => {
  return (
    
<div class='absolute flex left-20 2xl:h-screen w-[240px] bg-gray-800 text-white'>
 <div class='flex shadow-2xl'>
    <form>
      <div class='flex absolute text-sm top-0 left-0 indent-3 text-white shadow-xl
                  w-full h-[50px] border-slate-800'>
       <input
        type="email" 
        placeholder="Find or start a conversation"
        name="search" 
        class="flex absolute text-sm top-2 left-2 indent-3 text-white bg-gray-900
              rounded-lg w-[220px] h-7 border-slate-800"
       >
      </input>
      </div>
   </form>
  </div>
  <div
   class=
   'flex flex-col mt-12 divide-y w-96 h-[120px] bg-gray-800 gap-1'
   >  
    <button
      class='flex items-center text-base font-semibold h-12 indent-4 hover:bg-gray-600
      rounded-sm transition-all duration-150 ease-linear cursor-pointer shadow-base'
     >
      <AiOutlineUser class='ml-2' color='' size='1.4em' /> 
      Friends
    </button>
    <button 
      class='flex items-center text-base font-semibold h-12 indent-4 hover:bg-gray-600
      rounded-sm transition-all duration-150 ease-linear cursor-pointer shadow-base'
     >
      <RiDiscordLine class='ml-2' color='' size='1.4em' /> 
      Nitro
     </button>
  </div>
  <div class='flex absolute right-0 w-[240px] top-36 mt-4 divide-gray-300'>
    <div class='flex 3xl:h-[750px] 2xl:h-[530px] w-full flex-col overflow-y-auto'>
    <button class='flex flex-col w-full text-white rounded-xl divide-y divide-gray-700'>
      <DMList />
      <DMList />
      <DMList /> 
      <DMList /> 
      <DMList /> 
      <DMList />
      <DMList /> 
      <DMList /> 
      <DMList /> 
      <DMList /> 
      <DMList /> 
      <DMList /> 
      <DMList /> 
      <DMList />
      <DMList /> 
      <DMList />  
      <DMList /> 
      <DMList />  
      <DMList /> 
      <DMList />
      <DMList /> 
      <DMList />
    </button>
    </div>
 </div>
 <div className='user'> 
  <div class='flex! absolute! h-16 w-full bg-gray-900 divide-x-2 items-center justify-center'>
     <p 
     class=
     'flex text-sm items-center justify-center h-full'
     >
      Apex Legends
     </p>
  </div>
  <div class='flex! absolute! h-16 w-full bg-gray-900'>
      <div class='grid grid-cols-2'>
        <div
         class='grid grid-cols-2 absolute left-0 h-[47px] w-[120px] bg-gray-900
                text-xs hover:bg-gray-700 rounded-lg'
         >
           <UserCard />
          
          <img  class='w-fit h-10 mt-1 ml-3 bg-sky-600 rounded-3xl' src={Me} alt='' /> 
          <p class='w-fit h-fit mt-3'>Ventunos <p class="flex text-xs w-fit h-fit text-gray-400">#0959</p></p>
        </div>
      </div>
      <div
       class=
       'flex absolute bg-gray-900 h-fit w-fit mt-2 right-0 gap-2'
      >
        <button 
         class=
         'flex h-6 w-6 items-center justify-center hover:bg-gray-600'>
          <BsFillMicFill class='' size='0.9em' color=''/>
        </button>
        <button
         class=
         'flex h-6 w-6 items-center justify-center hover:bg-gray-600'>
          <BsHeadphones class='' size='1.2em' color=''/>
        </button>
        <button 
         class=
         'flex h-6 w-6 items-center justify-center hover:bg-gray-600 mr-2'>
          <RiSettings2Line class='' size='1.2em' color=''/>
        </button>
      </div>
  </div>
 </div>
</div>
  )
}

const DMList  = ({ icon }) => (

  <div class="dmlist">

  </div>
  );

export default DirectMessages;