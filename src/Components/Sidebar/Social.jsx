import { motion } from "framer-motion"

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        }
    }
}
const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity:0,
    }
}

const Social = () => {

    const items = [
        "Homepage","Services","Portfolio","Contact","About"
    ]

    return (
        <motion.div variants={variants} className="absolute w-full h-full flex flex-col items-center justify-center gap-5 ">
            {
                items.map(item => (
                    <motion.a
                    whileHover={{scale: 1.1}}
                    whileTap={{scale:0.95}}
                    variants={itemVariants} className="text-2xl font-semibold" href={`#${item}`} key={item}>{item}</motion.a>
                ))
            }
        </motion.div>
    );
};

export default Social;