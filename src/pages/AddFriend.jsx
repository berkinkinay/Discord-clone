import React from 'react'
import Wampus from '../assets/Wampus.png'

const AddFriend = () => {
  return (
<div>
    <p 
     class='flex absolute item-center justify-center top-[104px]
            left-[352px] w-fit h-fit bg-gray-700 text-xs uppercase text-white'
     >  
    </p> 
 <div class='flex flex-col gap-3 overflow-y-auto absolute top-14 3xl:w-[1200px]
             3xl:h-[360px] 2xl:h-[650px] 2xl:w-[830px] bg-gray-700 left-[330px] border-r-8
           border-gray-800 '>    
    <p class='flex font-bold text-white indent-4'>ADD FRIEND</p>
    <p class='flex text-gray-500 font-semibold indent-4'>You can add friend with their Discord Tag.</p>
     <form>
        <input 
         type="email" 
         placeholder="Enter a Username#0000" 
         name="" 
         class="flex absolute top-18 left-2 indent-3 bg-gray-900 rounded-lg w-[780px] h-12 border-blue-500 text-white">
       </input>
         <div 
          type="button"
          class="cursor-not-allowed text-xs text-gray-400 flex items-center
                 justify-center absolute right-14 top-20 h-8 w-36 bg-blue-800 rounded-lg"
          >
             Send Friend Request
        </div>
      </form>
     <div class="flex absolute top-48 h-80 w-full items-center justify-center">
      <img class='h-80 w-fit' src={Wampus} alt='' />
        </div>
    </div>
</div>
  )
}

export default AddFriend;