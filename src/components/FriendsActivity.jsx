import React from 'react'
import { BsSpotify } from 'react-icons/bs'
import { SiVisualstudio, SiSteam } from 'react-icons/si'

const FriendsActivity = () => {
  return ( 
<div class='flex absolute 3xl:h-[740px] 2xl:h-[640px] right-4 w-[340px] top-12 rounded-lg mt-2 border-l border-gray-500'>
<div 
 class=
 'flex absolute top-1 right-[196px] w-fit h-fit text-white 3xl:text-xl 3xl:font-extrabold 2xl:text-lg 2xl:font-semibold'
 >
   Active Now
</div>
 <div class='flex absolute right-1 w-[310px] top-12 rounded-xl mt-2'>
    <button class='flex flex-col w-full text-white divide-y divide-gray-600 rounded-xl gap-4'>
      <ListActivity icon={ <SiVisualstudio class='flex absolute right-4 mt-5' size="22" />} /> 
      <ListActivity icon={ <BsSpotify class='flex absolute right-4 mt-5' size="22" />} /> 
      <ListActivity icon={ <SiSteam class='flex absolute right-4 mt-5' size="22" />} /> 
    </button>
 </div>
 </div>
  )
}

const ListActivity  = ({ icon }) => (

<div className="listactivity">
    {icon}
  </div>
);
export default FriendsActivity;