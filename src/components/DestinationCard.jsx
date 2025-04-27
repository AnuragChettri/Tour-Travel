import React from 'react';
import {motion} from 'motion/react';
import {Link} from 'react-router-dom';

const DestinationCard = ({place})=>{

    const cardVariant = {
        "hover": {scale:1.05}
    };

    return (
        <motion.div 
        animate={{opacity:0,scale:0.6}}
        whileInView={{opacity:1,scale:1}}
        // transition={{duration:0.5,ease:easeOut}}
        whileHover={{scale:1.05,border:"1px solid green",boxShadow:"2px 2px 10px green"}}
        transition={{duration:0.8,type:"spring"}}
        viewport={{once:true}}
        className="max-w-[400px] bg-white flex flex-col justify-between">
            <div className="pt-2">
                <motion.img
                 src={`/public/${place.img}`} className="w-[95%] m-auto"/>
            </div>
            <div className="pt-8">
                <h1 className="text-center text-[1.12rem] font-[600] mb-4">{place.placeName} Tour </h1>
                <hr className="w-[90%] m-auto text-gray-300" />
                <div className='flex flex-row justify-between pt-3 px-4'>
                    <p className="text-[0.9rem]">{place.district} SIKKIM</p>
                    <p className="text-[0.9rem]">{place.duration} Days Tour</p>
                    <p className="text-[0.9rem]">March - June</p>
                </div>
                <div className="flex flex-row justify-center pb-5">
                    <Link to={`/destination/place/${place.id}`}>
                    <button className="bg-green-500 mt-6 px-16 py-2 text-white cursor-pointer hover:bg-green-700 transition-colors duration-400">
                        View More
                    </button>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default DestinationCard;