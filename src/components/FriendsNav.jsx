import React from 'react'
import  { AiOutlineUser } from 'react-icons/ai'

const FriendsNav = () => {
  return (

<div class='flex absolute top-0 ml-80 h-screen 2xl:w-[1214px] 3xl:w-[1600px] bg-gray-700'>
  <header class='flex absolute top-0 w-full h-12 bg-gray-700 items-center'>
    <div class='flex flex-cols-9 gap-4 ml-4 text-base text-gray-200'>
    <AiOutlineUser class='mt-1 ' color='' size='1.2em' /> 
    <div class='flex absolute left-10 font-bold text-lg text-white'> Friends</div>
    <div class='text-base font-light ml-20 mb-1'> I </div>
    <button class='hover:bg-gray-600 w-14 h-fit rounded-lg ml-1'>
    <div class=''>Online</div>
    </button>
    <button class='hover:bg-gray-600 w-8 h-fit rounded-lg'>
    <div>All</div>
    </button>
    <button class='hover:bg-gray-600 w-16 h-fit rounded-lg'>
    <div>Pending</div>
    </button>
    <button class='hover:bg-gray-600 w-24 h-fit rounded-lg'>
    <div>Suggestions</div>
    </button>
    <button class='hover:bg-gray-600 w-16 h-fit rounded-lg'>
    <div class=''>Blocked</div>
    </button>
    <button class='bg-green-600 w-24 h-fit rounded-lg'>
    <div class='font-semibold'>Add Friend</div>
    </button> 
    </div>
  </header>

</div>
  )
}
export default FriendsNav;