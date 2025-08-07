import React from 'react'
import {assets} from '../assets/assets'
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const Navabr = () => {
    const location = useLocation();
    const navigate=useNavigate();
    console.log("location : ",location)
  return (
    <div className='top-0 left-0 w-full ' >
      <div className='container mx-auto flex justify-between items-center py-4 px-6 '>
        <img src="https://picsum.photos/200/300" style={{width:"60px",height:"60px",borderRadius:'20%'}} alt="img" />
       <ul className="hidden md:flex justify-between gap-15 items-center mx-5">
  <li><a href="#Header" className="cursor-pointer hover:text-gray-400" onClick={()=>navigate('/home')}>Home</a></li>
  <li><a href="#about" className="cursor-pointer hover:text-gray-400" onClick={()=>navigate('/about')}>About</a></li>
  <li><a href="#project" className="cursor-pointer hover:text-gray-400" onClick={()=>navigate('/project')}>Project</a></li>
</ul >
       {location.pathname==="" ? <button className='hidden md:block w-48 bg-white px-15 mx-5 py-2 '>Sign Up</button> : <></>}
        
      </div>
    </div> 
  )
}

export default Navabr