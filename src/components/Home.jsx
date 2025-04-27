import React from 'react';
import {useRef} from 'react';
import {motion} from 'motion/react';
import Corousal from './Corousal.jsx';
import { easeOut } from 'motion';
import Destination from './Destination.jsx';
import PopularDestination from './PopularDestination.jsx';
import Testemonial from './Testemonial.jsx';
import GoTop from './GoTop.jsx';
import Search from './Search.jsx';

const Home = ()=>{

    const destinationRef = useRef(null);
    const northRef = useRef(null);
    const southRef = useRef(null);
    const eastRef = useRef(null);
    const westRef = useRef(null);

    const handleDestinationScroll = (ref)=>{
        if(ref.current){
            ref.current.scrollIntoView({
                behavior: "smooth"
            })
        }
    } 

    const handleScroll = ()=>{
        if(destinationRef.current)
        {
            destinationRef.current.scrollIntoView({
                behavior: "smooth"
            })
        }
    }

    return (
        <div>
            <div className="relative flex flex-col justify-end pb-10  mb-[20px] bg-[url(/lake.jpg)] bg-cover h-[550px] w-full">
            <motion.div
             initial={{x:-250,scale:1}}
             whileInView={{x:0,scale:1}}
             transition={{duration:1.4,ease:easeOut,delay:0}}
             viewport={{once:true}}
             className="sm:w-[50%]">
            <div 
            className="ml-2 sm:ml-16">
                <p className="text-3xl text-green-500 font-extrabold mb-4">Tour & Travel</p>
                <h1 className="text-4xl text-green-500 lg:text-6xl font-extrabold mb-10">Let's <span className="text-yellow-500">Explore</span> The <span className="text-yellow-500">Beautiful</span> Places With <span className="text-yellow-500">Us</span></h1>
                <button className="bg-green-500 text-white text-xl font-extrabold px-10 py-4 rounded-md cursor-pointer hover:bg-yellow-500 transition-colors duration-500 ease-out"
                onClick={handleScroll}
                >
                    Explore
                </button>
            </div>
            </motion.div>
            </div>
            <div className="rounded-xl mb-[50px] w-[95%] sm:w-[90%] m-auto border-1 border-gray-400 shadow-lg">
                <Search />
                {/* <form className="sm:flex sm:items-end p-5 text-gray-600">
                    <div className="basis-[30%] mb-4 sm:mb-0">
                        <p className="pl-4">Destination</p>
                        <input type="text" className="w-full text-sm font-medium pl-4 h-12 outline-yellow-500 border-[1px] border-gray-400" placeholder="Search Your Destination"/>
                    </div>
                    <div className="basis-[20%] mb-4 sm:mb-0 sm:ml-5">
                        <p className="pl-4">Tour Duration</p>
                        <select className="w-full text-sm font-medium pl-4 sm:w-[300px] h-12 outline-yellow-500 border-[1px] border-gray-400">
                            <option>1 to 3 days</option>
                            <option>4 to 7 days</option>
                            <option>1 to 2 weeks</option>
                            <option>2 weeks to 1 month </option>
                        </select>
                    </div>
                    <div className="basis-[20%] mb-4 sm:mb-0 sm:ml-5">
                        <p className="pl-4">Total Guest</p>
                        <input type="number" min="0" max="10" value="0" className="w-full font-medium pl-4 sm:w-[] h-12 outline-yellow-500 border-[1px] border-gray-400"/>
                    </div>
                    <div className="basis-[20%] sm:px-4 ">
                        <button className="bg-yellow-500 text-white text-xl font-medium h-12 w-full hover:bg-green-500 transition-colors duration-400">Search</button>
                    </div>
                </form> */}
            </div>
            <Corousal 
                destinationRef={destinationRef}
                northRef={northRef}
                southRef={southRef}
                westRef={westRef}
                eastRef={eastRef}
                handleDestinationScroll={handleDestinationScroll}
             />

            {/* Popular Destination */}
            <PopularDestination />            

            {/* Sikkim District Destination Places  */}
            <Destination  
                northRef={northRef}
                southRef={southRef}
                westRef={westRef}
                eastRef={eastRef}
            />

            {/* About Section */}
            <div className="w-full mx-2 pt-25 sm:w-[80%] sm:m-auto sm:flex sm:pb-10">
                <div className="sm:basis-[60%]">
                <p className="text-green-500">BEST TRAVEL GUIDE</p>
                <h1 className=" mt-2 text-3xl font-medium"> DISCOVER THE <span className="text-green-500"> BEAUTIFUL PLACES </span> WITH OUR US </h1>
                <p className="my-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, qui 
                    fugit itaque expedita numquam iusto quas sapiente placeat, nulla quae sint! Reiciendis tenetur fugiat praesentium cupiditate tempora illum fuga commodi!
                </p>
                <ul className="mb-10">
                    <li>Best Guide Experience</li>
                    <li> 100+ Tour Destination</li>
                    <li> Best Experience with least expense</li>
                </ul>
                </div>
                <motion.div 
                animate={{rotate:2,scale:1}}
                whileHover={{rotate:0,scale:1.05}}
                transition={{duration:1.5,type:"spring",stiffness:300}}
                className="sm:basis-[40%] bg-sky-500">
                    <img src="home.jpg" className="h-full p-2 " />
                </motion.div>
            </div>

            {/* Testemonial (Feedback) */}

            <Testemonial />
        <GoTop/>
        </div>
    )
}

export default Home;