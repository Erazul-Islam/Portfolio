import { Link } from "react-router-dom";
import Sidebar from "../sidebar/sidebar";
import "./navbar.scss"
import { motion } from "framer-motion"
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar shadow-md fixed w-full z-10">
                <div className="container mx-auto flex justify-between items-center p-4">
                    <Sidebar />
                    <div className="flex items-center gap-6">
                        <div className="hidden lg:flex gap-8">
                            {/* Smooth animated links */}
                            <Link to="/introduction">
                                <motion.div
                                    className="text-xl font-semibold text-gray-700 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    Introduction
                                </motion.div>
                            </Link>
                            <Link to="/signup" className="text-xl font-semibold text-gray-700 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400">
                                Signup
                            </Link>
                            <a
                                download="resume.pdf"
                                href="/src/assets/resume.pdf"
                                className="text-xl font-semibold text-gray-700 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
                            >
                                <button className="btn bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300">
                                    Download Resume
                                </button>
                            </a>
                        </div>

                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default Navbar;