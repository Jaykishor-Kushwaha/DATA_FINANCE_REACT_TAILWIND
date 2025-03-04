
import { useState } from "react";
import { AiOutlineClose,AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const [nav,setNav]=useState(false)

    const handleNav=()=>{
        setNav(!nav)
    }
  return (
    <div className=" flex text-white justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        <h1 className="w-full  text-3xl font-bold text-[#00df9a] ">REACT.</h1>
        <ul className="flex  md:flex">
            <li className="p-4">HOME</li>
            <li className="p-4">ABOUT</li>
            <li className="p-4">RESOURCES</li>
            <li  className="p-4">COMPANY</li>

        </ul>
        <div onClick={handleNav}>
        {!nav ? <AiOutlineMenu size={20}/>:<AiOutlineClose size={20}/>}

        </div>
        

        <div className={nav ?'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500':"fixed left-[-100%] "}>
        <h1 className="w-full  text-3xl font-bold text-[#00df9a] m-4 ">REACT.</h1>

            <ul className="p-4">
            <li className="p-4 border-b border-gray-600">HOME</li>
            <li className="p-4  border-b border-gray-600">ABOUT</li>
            <li className="p-4  border-b border-gray-600">RESOURCES</li>
            <li  className="p-4">COMPANY</li>  
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
