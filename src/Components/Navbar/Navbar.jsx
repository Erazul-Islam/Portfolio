import { Link } from "react-router-dom";
import Sidebar from "../sidebar/sidebar";
import "./navbar.scss"
import { motion } from "framer-motion"
const Navbar = () => {
    return (
        <div className="navbar">
            <Sidebar></Sidebar>
            <div className="flex lg:ml-96 gap-6 h-full justify-between">

                <div className="flex gap-4">
                    {/* <a href="#">
                        <img className="w-7 h-7" src="https://i.ibb.co/p4m4tq0/youtube.png" alt="" />
                    </a>
                    <a href="#">
                        <img className="w-7 h-7" src="https://i.ibb.co/VTmBs4R/instagram.png" alt="" />
                    </a>
                    <a href="#">
                        <img className="w-7 h-7" src="https://i.ibb.co/bPJhLsM/dribbble.png" alt="" />
                    </a> */}
                    <Link to='/introduction'>  <motion.div className="ml-36 text-xl font-bold lg:ml-0 " initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} >Introduction</motion.div></Link>
                    <a download={'Erazul Islam_resume'} href="resume.pdf"><button className="btn bg-indigo-800">Resume download</button></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;