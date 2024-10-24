import { Link } from "react-router-dom";
import Sidebar from "../sidebar/sidebar";
import "./navbar.scss"
// import { motion } from "framer-motion"
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { logout, useCurrentToken } from "../../redux/feature/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
const Navbar = () => {

    const dispatch = useAppDispatch();
    const handleLogout = () => {
        dispatch(logout());
    };
    const token = useAppSelector(useCurrentToken);
    let user;
    if (token) {
        user = verifyToken(token);
    }

    return (
        <div className="navbar">
            <div className="navbar shadow-md fixed w-full z-10">
                <div className="container mx-auto flex justify-between items-center p-4">
                    <Sidebar />
                    <div className="flex items-center gap-6">
                        <div className="hidden lg:flex gap-8">
                            <div>
                                {user ? <button onClick={handleLogout} className="btn bg-indigo-600 text-white px-4 py-2 rounded-sm hover:bg-indigo-700 transition-all duration-300">Logout</button> : <Link to='/login'><button className="btn bg-indigo-600 text-white px-4 py-2 rounded-sm hover:bg-indigo-700 transition-all duration-300">Login</button></Link>}
                            </div>
                            <div>
                                {user?.role === "ADMIN" ? <Link to='/admin/dashboard'><button className="btn bg-indigo-600 text-white px-4 py-2 rounded-sm hover:bg-indigo-700 transition-all duration-300">Admin Dashboard</button></Link> : ''}
                            </div>
                            <div>
                                {user?.role === "USER" ? <Link to='/userdashboard'><button className="btn bg-indigo-600 text-white px-4 py-2 rounded-sm hover:bg-indigo-700 transition-all duration-300">Dashboard</button></Link> : ''}
                            </div>
                            <div>
                                <Link to='/about'>
                                    <button className="btn bg-indigo-600 text-white px-4 py-2 rounded-sm hover:bg-indigo-700 transition-all duration-300">About</button>
                                </Link>
                            </div>
                            <a
                                download="resume.pdf"
                                href="https://drive.google.com/file/d/16XeTVzSrGrvVNNPid5NKmmlx3GeHV7eS/view?usp=drive_link"
                                className="text-xl font-semibold text-gray-700 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
                            >
                                <button className="btn bg-indigo-600 text-white px-4 py-2 rounded-sm hover:bg-indigo-700 transition-all duration-300">
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