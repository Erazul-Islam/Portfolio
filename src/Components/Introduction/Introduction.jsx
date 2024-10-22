/* eslint-disable react/no-unescaped-entities */

import { motion } from 'framer-motion';


const Introduction = () => {
    return (
        <div>
            <section className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-center p-4">
                {/* Animated Name */}
                <motion.h1
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl font-bold text-gray-900 dark:text-white"
                >
                    John Doe
                </motion.h1>

                {/* Animated Designation */}
                <motion.p
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
                    className="text-xl text-blue-600 dark:text-blue-400 mt-2"
                >
                    Web Developer | Frontend Specialist
                </motion.p>

                {/* Animated Introduction */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                    className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl"
                >
                    I'm a skilled web developer with a passion for creating dynamic and responsive web applications.
                    With expertise in JavaScript, React, and Tailwind CSS, I focus on building user-centric interfaces
                    that are both visually appealing and performance-optimized.
                </motion.p>
            </section>


        </div>
    );
};

export default Introduction;