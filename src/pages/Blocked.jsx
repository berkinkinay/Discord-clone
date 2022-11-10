import React from 'react'
import { BiX } from 'react-icons/bi'

const Suggestions = () => {
  return (
 <div>
    <p 
     class='flex absolute item-center justify-center top-[104px] left-[352px] w-fit h-fit bg-gray-700 text-xs uppercase text-white'>
       Blocked-2
    </p>
    <button 
     class='flex flex-col overflow-y-auto absolute 3xl:w-[1200px] 3xl:h-[360px] 2xl:h-[580px]
            2xl:w-[800px] bg-gray-700 top-32 left-[350px] border-r-8
           border-gray-800'>
         <ListBox icon={<BiX class='flex absolute right-4 mt-4 rounded-full bg-gray-800 h-7 w-7 hover:text-red-500' size="22" />} />
         <ListBox icon={<BiX class='flex absolute right-4 mt-4 rounded-full bg-gray-800 h-7 w-7 hover:text-red-500' size="22" />} />
    </button>
  </div>
  )
}

const ListBox = ({ icon, text = 'tooltip 💡'}) => (

    <div className="listbox">
        <span className="list-tooltip group-hover:scale-200">
            {text}
        </span>
        {icon}
    </div>
)
export default Suggestions;
