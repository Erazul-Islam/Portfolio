import "./hero.scss"
import { motion } from "framer-motion"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity
        }
    }
}

const slideVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 20,
        }
    }
}

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div variants={textVariants}
                    initial="initial"
                    animate="animate"
                    className="textContainer lg:mr-[800px]">
                    <motion.h2 variants={textVariants}>Md. Erazul Islam</motion.h2>
                    <motion.h1 variants={textVariants}>MERN Stack Developer</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button variants={textVariants}>See Latest Works</motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img animate="scrollButton" variants={textVariants} src="https://i.ibb.co/nLFctWW/scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div
                variants={slideVariants}
                initial="initial"
                animate="animate"
                className="slidingText">
                I lOVE WEB-DEVELOPMENT
            </motion.div>
            {/* <img className="lg:ml-[1000px]" src="https://i.ibb.co.com/ZYTVfbJ/Fiverr-removebg-preview.png" alt="" /> */}
            <motion.div
                className="profileImageContainer"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.2, rotate: 360 }}
            >
                <motion.img
                    src="https://i.ibb.co.com/bsvRysF/Fiverr.jpg"
                    alt="Md. Erazul Islam"
                    className="profileImage lg:ml-[1000px] object-cover rounded-full border-8"
                />
            </motion.div>
        </div >
    );
};

export default Hero;