/* eslint-disable react/no-unescaped-entities */

import { FaReact, FaNodeJs, FaJsSquare, FaDatabase, FaNpm, FaUserGraduate, FaClipboardList, FaRedoAlt } from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiExpress, SiMongodb, SiTypescript, SiNextdotjs } from 'react-icons/si';

const About = () => {
    return (
        <section className=" py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-8">About me</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-2xl  font-semibold text-pink-600 flex items-center">
                            <FaUserGraduate className="text-pink-600 mr-2" />
                            Designation
                        </h3>
                        <p className="mt-2 text-gray-600">
                            I am a MERN stack developer.
                        </p>

                        <h3 className="text-2xl font-semibold text-pink-600 flex items-center mt-4">
                            <FaClipboardList className="text-pink-600 mr-2" />
                            Introduction
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Hi, I am Erazul Islam. I am a dedicated and innovative web developer with a strong passion for creating dynamic and user-friendly web applications. With a solid foundation in both frontend and backend technologies, I strive to build seamless user experiences that solve real-world problems. My expertise includes modern JavaScript frameworks like React and Next.js, as well as backend technologies such as Node.js and Express. I believe in the power of collaboration and am eager to contribute to impactful projects that make a difference.
                        </p>

                        <h3 className="text-2xl font-semibold text-pink-600 flex items-center mt-4">
                            <FaRedoAlt className="text-pink-600 mr-2" />
                            Education
                        </h3>
                        <p className="mt-2 text-gray-600">
                        Bachelor of Business Administration at
                        Department of Accounting and Informaition Systems, (Jahangirnagar University) — [2023] to Present
                        </p>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-2xl text-pink-600 justify-center font-semibold flex items-center">
                            <FaDatabase className=" text-pink-600 mr-2" />
                            Skill Set
                        </h3>
                        <div className="mt-4 flex justify-evenly flex-wrap">
                            <div>
                                <div>
                                    <h1 className='text-xl font-bold mb-2 text-purple-700'>FrontEnd</h1>
                                </div>
                                <div className="flex items-center mr-4 mb-4">
                                    <FaReact className="h-8 w-8 text-blue-500 mr-2" />
                                    <span className="text-gray-600">React</span>
                                </div>
                                <div className="flex items-center mr-4 mb-4">
                                    <SiTailwindcss className="h-8 w-8 text-cyan-500 mr-2" />
                                    <span className="text-gray-600">Tailwind CSS</span>
                                </div>
                                <div className="flex items-center mr-4 mb-4">
                                    <FaJsSquare className="h-8 w-8 text-yellow-500 mr-2" />
                                    <span className="text-gray-600">JavaScript</span>
                                </div>
                                <div className="flex items-center mr-4 mb-4">
                                    <SiNextdotjs className="h-8 w-8 text-black mr-2" />
                                    <span className="text-gray-600">Next.js</span>
                                </div>
                                <div className="flex items-center mr-4 mb-4">
                                    <SiRedux className="h-8 w-8 text-purple-500 mr-2" />
                                    <span className="text-gray-600">Redux</span>
                                </div>
                            </div>
                            <div>
                                <h1 className='text-xl mb-2 font-bold text-purple-700'>Backend</h1>
                                <div className="flex items-center mr-4 mb-4">
                                    <FaNodeJs className="h-8 w-8 text-green-500 mr-2" />
                                    <span className="text-gray-600">Node.js</span>
                                </div>
                                <div className="flex items-center mr-4 mb-4">
                                    <SiTypescript className="h-8 w-8 text-blue-500 mr-2" />
                                    <span className="text-gray-600">TypeScript</span>
                                </div>
                                <div className="flex items-center mr-4 mb-4">
                                    <SiExpress className="h-8 w-8 text-gray-600 mr-2" />
                                    <span className="text-gray-600">Express.js</span>
                                </div>
                                <div className="flex items-center mr-4 mb-4">
                                    <SiMongodb className="h-8 w-8 text-green-600 mr-2" />
                                    <span className="text-gray-600">MongoDB</span>
                                </div>
                                <div className="flex items-center mr-4 mb-4">
                                    <FaNpm className="h-8 w-8 text-red-500 mr-2" />
                                    <span className="text-gray-600">NPM Packages</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;