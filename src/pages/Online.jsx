import React from 'react'
import  { AiOutlineUser } from 'react-icons/ai'
import { RiDiscordLine } from 'react-icons/ri'


const Online = () => {
  return (
    
<div class='absolute flex left-20 2xl:h-screen w-[240px] bg-gray-800 text-white'>
    <p class='flex absolute item-center justify-center top-[104px] left-[270px] w-16 h-fit bg-gray-700 text-sm text-white'>
        Online-6
    </p>
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

</div>
  )
}

const DMList  = ({ icon }) => (

  <div class="dmlist">

  </div>
  );

export default Online;