import React from 'react';
import Slider from 'react-slick';
import {motion} from 'motion/react';
import {useRef} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {corousalBg} from "../utils/corousalBg.jsx"; 
import PrevArrow from './PrevArrow.jsx';
import NextArrow from './NextArrow.jsx';
import { easeOut } from 'motion';

const Corousal = ({destinationRef,northRef,eastRef,southRef,westRef,handleDestinationScroll})=>{
    let settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

// const handleScroll = (extraValue)=>{
//     window.scrollTo({
//         top: 2400+extraValue,
//         behavior: "smooth"
//     })
// };

    return(
        <div className="relative">
            <Slider {...settings}>
                {
                    corousalBg.map((data,index)=>{
                        return(
                            <div key={index}>
                                <img src={data.img} alt="bg-image" className="w-full lg:h-[1000px] opacity-80" />
                            </div>
                        )
                    })
                }
            </Slider>
            <div ref={destinationRef} className="absolute top-[10%] bottom-[20%] left-[5%] right-[5%] sm:top-[10%] sm:bottom-[20%] sm:left-[10%] sm:right-[10%] sm:w-[70%] sm:h-[500px] m-auto flex flex-col justify-around">
                <div className="flex justify-center">
                    <div>
                    <motion.button
                    animate={{scale:0}}
                    whileInView={{scale:1}}
                    // whileInView={{scale:[0.8,1,0.8]}}
                    whileHover={{scale:1.2}}
                    transition={{duration:1,ease:easeOut}}
                     className="cursor-pointer bg-green-500/60 sm:text-3xl text-black px-10 py-4 rounded-md font-bold"
                    onClick={()=>{handleDestinationScroll(northRef)}}
                    >
                         North 
                    </motion.button>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                    <motion.button
                    animate={{scale:0}}
                    whileInView={{scale:1}}
                    // whileInView={{scale:[0.8,1,0.8]}}
                    whileHover={{scale:1.2}}
                    transition={{duration:2,ease:easeOut}}
                     className="cursor-pointer bg-green-500/60 sm:text-3xl text-black px-10 py-4 rounded-md font-bold"
                     onClick={()=>{handleDestinationScroll(westRef)}}
                     >
                         West 
                    </motion.button>
                    </div>
                    <div>
                    <motion.button
                    animate={{scale:0}}
                    whileInView={{scale:1}}
                    whileHover={{scale:1.2}}
                    // whileInView={{scale:[0.8,1,0.8]}}
                    transition={{duration:2,ease:easeOut}}
                     className="cursor-pointer bg-green-500/60 sm:text-3xl text-black px-10 py-4 rounded-md font-bold"
                     onClick={()=>{handleDestinationScroll(eastRef)}}
                     >
                         East
                    </motion.button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div>
                    <motion.button
                    animate={{scale:0}}
                    whileInView={{scale:1}}
                    whileHover={{scale:1.2}}
                    // whileInView={{scale:[0.8,1,0.8]}}
                    transition={{duration:2,ease:easeOut}}
                     className="cursor-pointer bg-green-500/60 sm:text-3xl text-black px-10 py-4 rounded-md font-bold"
                     onClick={()=>{handleDestinationScroll(southRef)}}
                     >
                        South 
                    </motion.button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Corousal;