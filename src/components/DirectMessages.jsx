import React from 'react'
import  { AiOutlineUser } from 'react-icons/ai'
import { RiDiscordLine } from 'react-icons/ri'
import { BiX } from 'react-icons/bi'


const DirectMessages = () => {
  return (
    
<div class='absolute flex left-20 h-screen w-[240px] bg-gray-800 text-white'>
 <div class='flex'>
    <form>
       <input type="email" placeholder="Find or start a conversation" name="search" class="flex text-sm absolute top-3 left-2 indent-3 text-white bg-gray-900 rounded-lg w-[220px] h-7 border-slate-800">
       </input>
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
    <div class='flex 3xl:h-[750px] 2xl:h-[550px] w-full flex-col overflow-y-auto'>
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
    </button>
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