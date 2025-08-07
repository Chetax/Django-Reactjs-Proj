import React from 'react'
import {assets} from '../assets/assets'
const Navabr = () => {
  return (
    <div className='top-0 left-0 w-full ' >
      <div className='container mx-auto flex justify-between items-center py-4 px-6 '>
        <img src={assets.logo} alt="img" />
       <ul className="hidden md:flex justify-between gap-15 items-center mx-5">
  <li><a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a></li>
  <li><a href="#about" className="cursor-pointer hover:text-gray-400">About</a></li>
  <li><a href="#project" className="cursor-pointer hover:text-gray-400">Project</a></li>
</ul >
        <button className='hidden md:block w-48 bg-white px-15 mx-5 py-2 '>Sign Up</button>
      </div>
    </div> 
  )
}

export default Navabr