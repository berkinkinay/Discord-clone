import React from 'react'
import  { AiOutlineUser } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const activeLink = "flex bg-gray-600 w-20 h-fit rounded-lg items-center justify-center";
  const activeLinkAdd = "active-link-add";

  const normalLink = "normal-link";
  const normalLinkAdd = "normal-link-add"

  return (
<React.Fragment>
<div
 class=
 'flex absolute top-0 ml-80 h-screen 2xl:w-[1210px] 3xl:w-[1600px] bg-gray-700'>
   <header
    class=
    'flex absolute top-0 w-full h-12 bg-gray-700 items-center shadow-xl '
    >   
     <div class='flex flex-cols-9 gap-4 ml-2 w-full text-base text-gray-200'> 
       <AiOutlineUser class='mt-1 ' color='' size='1.2em' /> 
       <div class='flex absolute left-10 font-bold text-lg text-white'> Friends</div>
       <div class='text-base font-light ml-24'> I </div>
       <div class='flex flex-cols-6 gap-5 ml-2 text-base text-gray-200'>
        <NavLink
          to = "/"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <p class=''>Online</p>
         </NavLink>
        <NavLink
          to = "/all"
          className={({ isActive }) => (isActive ? activeLink : normalLink)} 
          >
            <p>All</p>
        </NavLink>
        <NavLink
          to = "/pending"
          className={({ isActive }) => (isActive ? activeLink : normalLink)} 
          >
            <p>Pending</p>
        </NavLink>
        <NavLink
          to = "/suggestions"
          className={({ isActive }) => (isActive ? activeLink : normalLink)} 
          >
            <p>Suggestions</p>
        </NavLink>
        <NavLink
          to = "/blocked"
          className={({ isActive }) => (isActive ? activeLink : normalLink)} 
          >
            <p>Blocked</p>
        </NavLink>
        <NavLink
          to = "/addfriend"
          className={({ isActive }) => (isActive ? activeLinkAdd : normalLinkAdd)} 
          >
            <p>Add Friend</p> 
        </NavLink>
      </div>
    </div>
   </header>
</div>
</React.Fragment>
  )
}

export default Navbar;