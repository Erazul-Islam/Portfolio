import { motion } from "framer-motion"
import { useState } from "react";
const Test = () => {

   const [open,setOpen] = useState(false) 

    const variants = {
        visible: {opacity:1, x:1000, transition:{duration:2}},
        hidden: {opacity:0}
    }

    return (
        <div className="h-screen flex items-center justify-center">
            <motion.div 
            variants={variants} 
            transition={{duration:2}}
            animate={open ? "visible" : "hidden"}
            className=" h-[200px] w-[200px] bg-white">
            </motion.div>
            <button onClick={() =>setOpen(prev => !prev)}>click</button>
        </div>
    );
};

export default Test;