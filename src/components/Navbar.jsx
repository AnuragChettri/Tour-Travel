import React from 'react';
import {motion} from 'motion/react';
import {Link} from 'react-router-dom';

const Navbar = ()=>{

    const [menuOpen,setMenuOpen] = React.useState(false);

    const handleMenuClick = ()=>{
        setMenuOpen(prevState=>!prevState);
    }
    
    return(
        <div className="h-[65px] relative text-[20px] flex flex-col justify-start pt-8 sm:pt-0 sm:flex-row sm:items-center sm:h-[65px] text-white bg-green-800 ">
            <div onClick={handleMenuClick} 
            className="sm:hidden absolute top-[16px] right-[30px] flex flex-col justify-around items-center h-[35px] w-[35px] border-2 border-gray-400 p-1">
                <span className={menuOpen ? "h-[2px] w-full bg-gray-400":"h-[2px] w-full bg-gray-400"}></span>
                <span className={menuOpen ? "h-[2px] w-[26px] bg-gray-400 rotate-[50deg]":"h-[2px] w-[26px] bg-gray-400 "}></span>
                <span className={menuOpen ? "hidden":"h-[2px] w-full bg-gray-400"}></span>
            </div>
            <div className="sm:basis-[40%] pl-14">
                <p className="text-left">Logo</p>
            </div>
            
            <div 
            className={(menuOpen?"block":"hidden")+  ` sm:block bg-green-700 opacity-90 sm:bg-transparent w-full sm:basis-[60%] sm:pr-10`
            }>
                        <ul
                        className="flex flex-col justify-between items-center sm:flex-row">
                            <li className="pt-4 sm:pt-0">
                                Home
                            </li>
                            <li className="pt-4 sm:pt-0">About</li>
                            <li className="pt-4 sm:pt-0">Contact</li>
                            <li className="py-4 sm:py-0">Services</li>
                        </ul>
            </div>
        </div>
    )
}

export default Navbar;