import React from 'react';
import Slider from 'react-slick';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { destinationListData } from '../utils/constant.jsx';



const PopularDestination = ()=>{

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            }
        ]
    };

    return(
        <div className="mt-30">
            <div className="w-full mx-3 sm:w-[80%] sm:m-auto">
            <p className=" text-green-500">TOP DESTINATION</p>
            <h1 className="mb-10 text-3xl font-medium">POPULAR <span className="text-green-500">DESTINATION</span></h1> 
             <Slider {...settings}>
                {
                    destinationListData.map((data,index)=>{
                        return(
                            <Link to={`destination/place/${data.id}`} key={index}>
                            <motion.div 
                                whileHover={{scale: 1.05}}
                                key={index}
                                className="pr-4 relative cursor-pointer">
                                <img src={data.img} alt="bg-image" className="h-[375px]" />
                                <motion.div 
                                whileHover={{opacity:1, y: [100,0]}}
                                transition={{duration:0.3}}
                                className="absolute bottom-0 top-0 left-0 right-[16px] flex items-end font-medium text-white bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-800 ease-out">
                                    <div className="bg-black/60 w-full flex-col place-items-center">
                                    <div className="flex items-center">
                                    <img src="location-icon.jpg" className="rounded-full h-[20px] w-[20px]"/>
                                    <p className="py-2 pl-2">
                                        {data.placeName}
                                    </p>
                                    </div>
                                    <p>{data.difficultyLevel}</p>
                                    <p className="py-1">{data.price}</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                            </Link>
                        )
                    })
                }
            </Slider>
            </div>
        </div>
    )
}

export default PopularDestination;