import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'motion/react';

const Dropdown = ({menu})=>{
    const hasSubMenu = menu?.subMenu?.length > 0;
    const [subMenuOpen,setSubMenuOpen] = React.useState(false);
    const [isRotate,setIsRotate] = React.useState(false);

    const handleDropdown = ()=>{
        setIsRotate((prevState)=>!isRotate);
        setSubMenuOpen((prevState)=> !prevState);
        // console.log(subMenuOpen);
    }

    // const handleRotate = ()=>{
    // }

    // let route;
    // function routeDecidor(){
    //     if(menu.id === 1)
    //         route ="/";
    //     else if(menu.id === 2)
    //         route="/onlinebooking";
    //     else if(menu.id === 3)
    //         route="/servicesbooking";
    //     else if(menu.id === 4)
    //         route="/about";
    //     else(menu.id === 5)
    //         route="/contact";
    // }
    return (
        <motion.li className="hover:text-green-500 rounded-sm transition-colors duration-400 ease-out"
            onHoverStart={handleDropdown}
            onHoverEnd={handleDropdown}
            // onClick={handleDropdown}
        >
            <span>
                <div className='flex items-center'>
                {
                    hasSubMenu ?
                    menu.name 
                    : 
                    <Link to={`${menu.route}`}> {menu.name} </Link>
                }
                
                {hasSubMenu && <span className={(isRotate?"rotate-180 mt-2 ml-2":"") + ` pl-1 pt-1 transition-all duration-400`} > <img src="/chevron-down-white.png" className="w-[25px]" alt="dropdown-icon" /> </span>}
                </div>
                {
                    hasSubMenu && subMenuOpen && (
                        <div className="absolute top-[45px] pt-[21px]">
                        { 
                        menu?.subMenu?.map((subMenu,index)=>{
                            return(
                                <motion.div 
                                initial={{opacity:0,y:-10}}
                                animate={{opacity:1,y:0}}
                                transition={{duration:0.8}}
                                key={index} className="bg-green-700 text-white">
                                    <Link to="/contact">
                                        <p className="py-2 px-6 text-center hover:bg-yellow-500 transition-colors duration-300">{subMenu.name}</p>
                                    </Link>
                                </motion.div>
                            )
                        })
                        }
                        </div>
                    )
                }
            </span>
        </motion.li>
    )
}

export default Dropdown;
