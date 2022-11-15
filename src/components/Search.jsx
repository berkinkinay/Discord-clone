import React from 'react'

const Search = () => {
  return (

<div class='flex absolute top-12 ml-80 h-12 w-[850px] items-center justify-center'>
  <div class='flex'>
    <form>
       <input 
        type="email" 
        placeholder="Search" 
        name="search" 
        class="flex absolute top-3 left-5 indent-3 text-white bg-gray-900 rounded-lg w-[820px] h-8 border-slate-800">
       </input>
    </form>
  </div>
  <div class='flex absolute h-fit w-fit'>
  </div>
</div>
  )
}
export default Search;