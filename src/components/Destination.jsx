import React from 'react';
import {motion} from 'motion/react';
import { easeOut } from 'motion';
import { Link } from 'react-router-dom';
import { districtInfo } from '../utils/constant.jsx';


const Destination = ({northRef,southRef,eastRef,westRef})=>{

    return(
        <div className="pt-16 w-full mx-2 sm:w-[80%] sm:m-auto">
            <p className="fon-light text-green-500">Most Popular</p>
            <h1 className="text-3xl font-medium"><span className="text-green-500">TRAVEL</span> PLACES</h1>

            {/* North Sikkim */}
            <div ref={northRef} className="mt-10 mb-10 sm:mb-0 sm:flex sm:flex-row sm:justify-between">
                <div className="sm:h-[400px] basis-[50%] flex flex-col justify-center">
                    <motion.div
                        initial={{x:-100}}
                        whileInView={{x:0,opacity:[0,0.2,0.5,0.7,0.9,1]}}
                        transition={{duration:1.5,ease:easeOut}}
                    >
                        <h1 className="text-2xl font-medium">{districtInfo[0].districtName} SIKKIM</h1>
                        <p className=" my-8">{districtInfo[0].description}</p>
                        <div className="my-6 grid grid-cols-3 gap-6">
                        {
                            districtInfo[0].popularPlaces.map((place,index)=>{
                                return (
                                <div key={index} className="flex items-center">
                                    <img src="./location-icon.jpg" className="h-[20px]" />
                                    <p className="text-[14px] cursor-pointer text-sky-500">{place}</p>
                                </div>
                                )
                            })
                        }
                        </div>
                        <div>
                        <Link to={`/destinationList/${districtInfo[0].districtName}`}>
                            <button className="bg-green-500 mt-6 px-16 py-2 text-white cursor-pointer hover:bg-green-700 transition-colors duration-400">
                                All Tours
                            </button>
                        </Link>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    initial={{x:100}}
                    whileInView={{x:0}}
                    transition={{duration:1.5,ease:easeOut}} 
                className=" mt-4 sm:mt-0 basis-[50%] sm:flex sm:flex-col sm:justify-center sm:ml-6">
                    <motion.img 
                    whileHover={{scale:1.08}}
                    transition={{duration:0.1,type:"spring",stiffness:200}}
                    src="./gurudongmar.jpg" className="" />
                </motion.div>
            </div>

            {/* East Sikkim */}
            <div ref={eastRef} className="mt-10 sm:flex sm:flex-row sm:justify-between">
                <motion.div
                 initial={{x:-100}}
                 whileInView={{x:0}}
                 transition={{duration:1.5,ease:easeOut}}
                 className="basis-[50%] mb-4 sm:mb-0 sm:flex sm:flex-col sm:justify-center sm:mr-16">
                    <motion.img 
                    whileHover={{scale:1.05}}
                    transition={{duration:0.1,type:"spring",stiffness:200}}
                    src="./gangtok.jpg" className="" />
                </motion.div>
                <motion.div
                initial={{x:100}}
                whileInView={{x:0}}
                transition={{duration:1.5,ease:easeOut}} 
                className="sm:h-[400px] basis-[50%] flex flex-col justify-center">
                    <div>
                        <h1 className="text-2xl font-medium">{districtInfo[1].districtName} SIKKIM</h1>
                        <p className=" my-8">{districtInfo[1].description}</p>
                        <div className="my-6 grid grid-cols-3 gap-6">
                        {
                            districtInfo[1].popularPlaces.map((place,index)=>{
                                return (
                                <div key={index} className="flex items-center">
                                    <img src="./location-icon.jpg" className="h-[20px]" />
                                    <p className="text-[14px] cursor-pointer text-sky-500">{place}</p>
                                </div>
                                )
                            })
                        }
                        </div>
                        <div>
                        <Link to={`/destinationList/${districtInfo[1].districtName}`}>
                            <button className="bg-green-500 mt-6 px-16 py-2 text-white cursor-pointer hover:bg-green-700 transition-colors duration-400">
                                All Tours
                            </button>
                        </Link>
                        </div>
                    </div>
                </motion.div>
            </div>

             {/* West Sikkim */}
             <div ref={westRef} className="mt-10 mb-10 sm:mb-0 sm:flex sm:flex-row sm:justify-between">
                <div className="sm:h-[400px] basis-[50%] flex flex-col justify-center">
                    <motion.div
                    initial={{x:100}}
                    whileInView={{x:0}}
                    transition={{duration:1.5,ease:easeOut}}
                    >
                        <h1 className="text-2xl font-medium">{districtInfo[2].districtName} SIKKIM</h1>
                        <p className=" my-8">{districtInfo[2].description}</p>
                        <div className="my-6 grid grid-cols-3 gap-6">
                        {
                            districtInfo[2].popularPlaces.map((place,index)=>{
                                return (
                                <div key={index} className="flex items-center">
                                    <img src="./location-icon.jpg" className="h-[20px]" />
                                    <p className="text-[14px] cursor-pointer text-sky-500">{place}</p>
                                </div>
                                )
                            })
                        }
                        </div>
                        <div>
                        <Link to={`/destinationList/${districtInfo[2].districtName}`}>
                            <button className="bg-green-500 mt-6 px-16 py-2 text-white cursor-pointer hover:bg-green-700 transition-colors duration-400">
                                All Tours
                            </button>
                        </Link>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                 initial={{x:100}}
                 whileInView={{x:0}}
                 transition={{duration:1.5,ease:easeOut}}
                 className=" mt-4 sm:mt-0 basis-[50%] sm:flex sm:flex-col sm:justify-center sm:ml-6">
                    <motion.img 
                    whileHover={{scale:1.05}}
                    transition={{duration:0.1,type:"spring",stiffness:200}}
                    src="./pelling.jpg" className="" />
                </motion.div>
            </div>

             {/* South Sikkim */}
             <div ref={southRef} className="mt-10 sm:flex sm:flex-row sm:justify-between">
                <motion.div
                initial={{x:-100}}
                whileInView={{x:0}}
                transition={{duration:1.5,ease:easeOut}} 
                className="basis-[50%] mb-4 sm:mb-0 sm:flex sm:flex-col sm:justify-center sm:mr-16">
                    <motion.img 
                    whileHover={{scale:1.05}}
                    transition={{duration:0.1,type:"spring",stiffness:200}}
                    src="./chardham.jpg" className="" />
                </motion.div>
                <div className="sm:h-[400px] basis-[50%] flex flex-col justify-center">
                    <motion.div
                    initial={{x:100}}
                    whileInView={{x:0}}
                    transition={{duration:1.5,ease:easeOut}}
                    >
                        <h1 className="text-2xl font-medium">{districtInfo[3].districtName} SIKKIM</h1>
                        <p className=" my-8">{districtInfo[3].description}</p>
                        <div className="my-6 grid grid-cols-3 gap-6">
                        {
                            districtInfo[3].popularPlaces.map((place,index)=>{
                                return (
                                <div key={index} className="flex items-center">
                                    <img src="./location-icon.jpg" className="h-[20px]" />
                                    <p className="text-[14px] cursor-pointer text-sky-500">{place}</p>
                                </div>
                                )
                            })
                        }
                        </div>
                        <div>
                        <Link to={`/destinationList/${districtInfo[3].districtName}`}>
                            <button className="bg-green-500 mt-6 px-16 py-2 text-white cursor-pointer hover:bg-green-700 transition-colors duration-400">
                                All Tours
                            </button>
                        </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default Destination;