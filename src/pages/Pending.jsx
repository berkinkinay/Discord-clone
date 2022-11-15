import React from 'react'
import Discord from '../assets/discord.png'

const Pending = () => {
  return (
  <div  class=''>
    <p class='flex absolute item-center justify-center top-[104px] left-[350px] w-16 h-fit bg-gray-700 text-sm text-white'>
        Pending
    </p>
    <div class='flex flex-col overflow-y-auto absolute 3xl:w-[1200px] 3xl:h-[360px] 2xl:h-[580px]
                 2xl:w-[800px] bg-gray-700 top-32 left-[350px] border-r-8 border-gray-800
                 items-center justify-center'>
      <img class='h-56 w-fit mb-1' src={Discord} alt='' />
      <p 
       class=
       'h-fit w-fit flex text-base text-gray-400 mb-36'
        >
          There are no pending friends requests. Here's Wampus for now.
        </p>
    </div>
  </div>
  )
}

export default Pending;