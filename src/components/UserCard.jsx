import React from 'react'
import Hello from '../assets/hello there.png'
import { ImPencil } from 'react-icons/im'
import { BiMeteor } from 'react-icons/bi'
import { FaCircle, FaSmile } from 'react-icons/fa'
import Wraith from '../assets/wraith.png'

const UserCard = () => {
  return (
    
<div class="flex justify-center absolute bottom-14 w-[300px] h-96 bg-gray-800 text-white rounded-xl"> 
  <div class="flex flex-col w-full h-[96px] rounded-xl">
    <button 
     class="flex w-5 h-5 items-center justify-center text-white hover:bg-black
            absolute right-2 top-3"
    >
       <ImPencil size="1.1em"/> 
   </button>
    <div 
     class=
     "flex w-full h-12 bg-black"
     >
        <img class="flex absolute left-4 top-2 w-fit h-20 rounded-full" src={Hello} alt='' />
    </div>
    <div 
     class=
     "flex w-full h-12 bg-gray-800 items-center"
      > 
       <button class="flex w-6 h-6 items-center justify-center text-white
                     bg-black absolute right-2 rounded-md"
         > 
           <BiMeteor size="1.2em"/>
        </button>
    </div>
     <div 
      class=
      "flex flex-col left-6 absolute w-64 bg-black h-[274px] top-[96px] rounded-lg"
      >
        <title
         class=
         "flex hi-fit w-fit text-white text-base py-2 mx-2 font-semibold"
         > 
          Ventunos <span class="flex ml-1 w-fit h-fit text-gray-500">#0959</span>
        </title>
        <Divider />
        <p class="flex h-fit w-fit text-white text-xs py-2 mx-2 font-bold uppercase">About me</p>
         <img class="flex absolute left-2 top-[70px] w-fit h-7 rounded-full" src={Wraith} alt='' />
        <p class="flex absolute top-[102px] h-fit w-fit text-white text-xs indent-2 font-bold">DISCORD MEMBER SINCE</p>
        <p class="flex absolute top-[130px] h-fit w-fit text-white text-xs indent-2 font-normal">Mar 04, 2018</p>
         <div class="mt-20"><Divider /></div>
         <div
          class=
          "flex absolute top-[170px] text-xs left-4 h-fit w-fit font-normal text-green-300"
          >
            <FaCircle /> <p class="flex absolute bottom-3 h-1 w-fit text-white text-sm indent-5 font-normal">Online</p></div>
          <div 
           class=
           "mt-10 ml-4"
           >
              <FaSmile />  
              <p class="flex absolute top-[193px] h-fit w-fit text-white text-xs indent-5 font-normal">Set custom status</p> 
          </div>
          <div class="mt-3"><Divider /></div>
          <p class="flex absolute top-[240px] h-fit w-fit text-white text-xs indent-5 font-normal">Set custom status</p> 
      </div>
    </div>
</div> 
  )
}

const Divider = () => <hr className="sidebar-hr" />;

export default UserCard;