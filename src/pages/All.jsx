import React from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'

const All = () => {
  return (
  <h1>
     <p 
      class=
      'flex absolute item-center justify-center top-[104px] left-[344px] w-16 h-fit bg-gray-700 text-sm text-white'
       >
         ALL-12
     </p>
    <div 
     class='flex flex-col overflow-y-auto absolute 3xl:w-[1200px] 3xl:h-[360px] 2xl:h-[580px]
            2xl:w-[800px] bg-gray-700 top-32 left-[350px] border-r-8
            border-gray-800'
    >
      <button class='flex absolute flex-col w-full text-white divide-y divide-gray-600'>
          <ListBox icon={<BiDotsVerticalRounded class='flex absolute right-4 mt-5 rounded-full bg-gray-800 h-5 w-5' size="22" />} />
          <ListBox icon={<BiDotsVerticalRounded class='flex absolute right-4 mt-5 rounded-full bg-gray-800 h-5 w-5' size="22" />} />
          <ListBox icon={<BiDotsVerticalRounded class='flex absolute right-4 mt-5 rounded-full bg-gray-800 h-5 w-5' size="22" />} />
          <ListBox icon={<BiDotsVerticalRounded class='flex absolute right-4 mt-5 rounded-full bg-gray-800 h-5 w-5' size="22" />} />
          <ListBox icon={<BiDotsVerticalRounded class='flex absolute right-4 mt-5 rounded-full bg-gray-800 h-5 w-5' size="22" />} />
          <ListBox icon={<BiDotsVerticalRounded class='flex absolute right-4 mt-5 rounded-full bg-gray-800 h-5 w-5' size="22" />} />
          <ListBox icon={<BiDotsVerticalRounded class='flex absolute right-4 mt-5 rounded-full bg-gray-800 h-5 w-5' size="22" />} />
          <ListBox icon={<BiDotsVerticalRounded class='flex absolute right-4 mt-5 rounded-full bg-gray-800 h-5 w-5' size="22" />} />
          <ListBox icon={<BiDotsVerticalRounded class='flex absolute right-4 mt-5 rounded-full bg-gray-800 h-5 w-5' size="22" />} />
          <ListBox icon={<BiDotsVerticalRounded class='flex absolute right-4 mt-5 rounded-full bg-gray-800 h-5 w-5' size="22" />} />
          <ListBox icon={<BiDotsVerticalRounded class='flex absolute right-4 mt-5 rounded-full bg-gray-800 h-5 w-5' size="22" />} />
          <ListBox icon={<BiDotsVerticalRounded class='flex absolute right-4 mt-5 rounded-full bg-gray-800 h-5 w-5' size="22" />} />
      </button>
    </div>
 </h1>
  )
}

const ListBox = ({ icon, text }) => ( 

<div className="listbox">
    {icon}
   <span class="list-tooltip group-hover:scale-200">
     {text}
   </span>
</div>  
);
export default All;