import React from 'react'

const AddFriend = () => {
  return (
<div>
    <p 
     class='flex absolute item-center justify-center top-[104px]
            left-[352px] w-fit h-fit bg-gray-700 text-xs uppercase text-white'
     >
      
    </p> 
 <div class='flex flex-cols-3 overflow-y-auto absolute top-14 3xl:w-[1200px] 3xl:h-[360px] 2xl:h-[650px]
             2xl:w-[830px] bg-gray-700 left-[330px] border-r-8
           border-gray-800 '>    
    <p class='flex font-bold text-white indent-4'>ADD FRIEND</p>
     <form>
        <input 
         type="email" 
         placeholder="Enter a Username#0000" 
         name="" 
         class="flex absolute top-8 left-2 indent-3 bg-gray-900 rounded-lg w-[780px] h-12 border-blue-500 text-white">
       </input>
      </form>
      <div class='flex top-20 absolute h-1 w-[800px] divide-y-2 divide-black'></div>
      </div>
   <header>
  </header>   
</div>
  )
}

export default AddFriend;