import { useState } from "react";
import Social from "./Social";
import Toggle from "./Toggle";
import { motion } from "framer-motion"

const Sidebar = () => {

    const [open,setOpen] = useState(false)

    const variants = {
        open:{
            clipPath: "circle(1200px at 50px 50px)",
            transition:{
                type: 'spring',
                stiffness: 20,
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40,
            }
        }
    }

    return (
        <div>
            <motion.div animate={open ? "open" : "closed"} className="sidebar flex flex-col items-center justify-center bg-whitem text-black">
                <motion.div variants={variants} className="bg fixed bottom-0 top-0 left-0 w-[300px] bg-white">
                    <Social> </Social>
                </motion.div>
                    <Toggle setOpen={setOpen} ></Toggle>
            </motion.div>
        </div>
    );
};

export default Sidebar;