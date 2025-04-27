import React from 'react';
import {motion} from 'motion/react'

const Motion = ()=>{
    const [isVisible,setIsVisible] = React.useState(true);
    
    const handleClick =()=>{
        setIsVisible((prevState)=>!prevState);
    }

    const bodyVariant = {
        hidden: {opacity:0},
        visible: {opacity:1}
    }

    return(
        <div className="flex justify-center items-center h-[100vh]">
        <div>
        <motion.div className="w-40 h-28 bg-blue-400"
        initial={{scale:1}}
        variants={bodyVariant}
        animate={isVisible ? "visible" : "hidden"}
        whileHover={{scale:2}}
        whileTap={{scale:1}}
        transition={{duration:0.2,ease:"easeOut",type:"spring",stiffness:300}}
        >
            <h1>From A Body Component</h1>
        </motion.div>
        </div>
        <button className="bg-green-300 px-6 py-2 rounded-lg" 
        onClick={handleClick}>
            {isVisible ? "Hide" : "Show"}
        </button>
        </div>
        
    )
}
export default Motion;