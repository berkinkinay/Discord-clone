import React from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'

const FriendsList = () => {
  return (
    <div>
    <div class='flex absolute 3xl:w-[1200px] 3xl:h-[360px] 2xl:h-[550px] 2xl:w-[800px] bg-gray-700 top-32 left-[350px]  border-r-8 border-gray-800'>
    <button class='flex flex-col w-full text-white divide-y divide-gray-600'>
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
 </div>
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
export default FriendsList;