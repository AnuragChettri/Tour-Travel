import React from 'react';
import { menuData } from '../utils/menu.jsx';
import Dropdown from './Dropdown.jsx';
import {motion} from 'motion/react';
import { easeOut } from 'motion';
import { AnimatePresence } from "motion/react"
import {Link} from 'react-router-dom';

const MultiLevelNavbar = ()=>{
    const [menuOpen,setMenuOpen] = React.useState(false);
    const [isDropdownOpen,setIsDropDownOpen] = React.useState(false);

    const handleMenuClick = ()=>{
        setMenuOpen(prevState=>!prevState);
        setIsDropDownOpen(false);
        }

    console.log(isDropdownOpen);
    return(
        <div className="h-[65px] text-white font-medium bg-black/40  absolute top-0 left-0 right-0 z-100 text-[16px] flex flex-col pt-4 sm:pt-0 sm:flex-row sm:justify-between sm:items-center sm:h-[65px]">
            <div onClick={handleMenuClick} 
            className="sm:hidden absolute top-[16px] right-[30px] flex flex-col justify-around items-center h-[40px] w-[40px] border-[3px] border-yellow-300 p-1 cursor-pointer">
                <span className={menuOpen ? "h-[2px] w-full bg-yellow-500":"h-[2px] w-full bg-yellow-500"}></span>
                <span className={menuOpen ? "h-[2px] w-full bg-yellow-500":"h-[2px] w-[26px] bg-yellow-500 "}></span>
                <span className={menuOpen ? "h-[2px] w-full bg-yellow-500":"h-[2px] w-full bg-yellow-500"}></span>
                {/* {/* <img src="./public/filter.png" alt="filter-icon" className="bg-white h-[40px] w-[40px]" /> */}
            </div>
            <div className="sm:basis-[20%] pl-4">
                {/* <img src="./public/logo.png" alt="logo" className="h-[40px]" /> */}
                <h2 className="text-[20px] font-extrabold text-green-400">TRAVEL<span className="text-yellow-500">NOW </span></h2>
            </div>
            
            <div className="hidden sm:block sm:basis-[60%]">
                <ul className="flex flex-col justify-between items-center sm:flex-row">
                   {
                    menuData.map((menu,index)=>{
                        return <Dropdown menu={menu} key={index} />
                    })
                   }
                </ul>
            </div>
            <div className="basis-[20%] hidden sm:flex sm:justify-end sm:mr-7">
                   <Link to="/contact">
                        <button className="bg-green-500 px-4 py-2 rounded-full cursor-pointer hover:bg-yellow-500 transition-colors duration-500 ease-out">Book Now</button>
                   </Link>
            </div>
            {/* <AnimatePresence> */}
            <motion.div 
            // initial={{opacity:0,scale:0.5}}
            animate={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            // exit={{x:-100}}
            transition={{duration:0.5,ease:easeOut}}

            className={(menuOpen?"block":"hidden")+  ` sm:hidden bg-black/70 mt-5 border-b-2 border-yellow-500`}
            >
                        <ul
                        className="flex flex-col justify-between items-center sm:flex-row">
                            <li className="pt-4 sm:pt-0 text-lg hover:text-yellow-500" >
                            <Link to="/" onClick={()=>{setMenuOpen(false)}}>  Home </Link>
                            </li>
                            <li className="flex items-center cursor-pointer pt-4 sm:pt-0 text-lg hover:text-yellow-500"
                                onClick={()=>{setIsDropDownOpen(prevState=>!prevState)}}
                            >
                                Online Booking
                                <span className={(isDropdownOpen?"rotate-180 ml-2":"") + ` inline-block pl-1 transition-all duration-400`} > <img src="/chevron-down-white.png" className="w-[25px]" alt="dropdown-icon" /> </span>
                            </li>
                            {
                                isDropdownOpen &&
                                (<motion.ul
                                    animate={{scale:0}}
                                    whileInView={{scale:1}}
                                    transition={{duration:2,ease:easeOut}}
                                >
                                    <Link to="/contact" onClick={()=>{setMenuOpen(false)}}><li className="pt-2 text-lg text-green-400">Permits</li></Link>
                                    <Link to="/contact" onClick={()=>{setMenuOpen(false)}}><li className="pt-2 text-lg text-green-400">Vehicle Rents</li></Link>
                                    <Link to="/contact" onClick={()=>{setMenuOpen(false)}}><li className="pt-2 text-lg text-green-400">Hotels</li></Link>
                                    <Link to="/contact" onClick={()=>{setMenuOpen(false)}}><li className="pt-2 text-lg text-green-400">Sight Seeing</li></Link>
                                    <Link to="/contact" onClick={()=>{setMenuOpen(false)}}><li className="pt-2 text-lg text-green-400">Flight Booking</li></Link>
                                </motion.ul>)
                            }
                            <li className="pt-4 sm:pt-0 text-lg hover:text-yellow-500">
                                <Link to="/contact" onClick={()=>{setMenuOpen(false)}}>Contact</Link>
                            </li>
                            <li className="py-4 sm:py-0 text-lg hover:text-yellow-500">
                                <Link to="/about" onClick={()=>{setMenuOpen(false)}}>About</Link>
                            </li>
                        </ul>
            </motion.div>
            {/* </AnimatePresence> */}
        </div>
    )
}

export default MultiLevelNavbar;