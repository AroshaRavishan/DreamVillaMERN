import React from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

function Details({title1 , title2 ,description}) {
    return (
        <motion.div
          initial={{ opacity: 0, x: -50 }}  // Initial state: invisible and shifted left
          animate={{ opacity: 1, x: 0 }}  
          transition={{ duration: 1 }}   // Animation: fade in and move to the original position
        >
            <div className="container mt-10 md:mt-30 relative">
                <div class="">
                    <div class="px-4 text-center mx-auto">
                        <h1 class="text-sm md:text-lg font-medium">{title1}</h1>
                        <div className="border-2 border-black-900 w-1/4 md:w-[10%] mx-auto my-5"></div>
                        <p class="text-3xl md:text-6xl font-semibold mt-4">{title2}</p>
                        <p class="text-sm md:text-lg font-light mt-5">{description}</p>
                        <Link to="/contactus">
                            <button class="mt-5 md:mt-10 border-2 border-solid border-indigo-600 rounded py-2 px-12 text-base md:text-xl text-indigo-600 hover:bg-indigo-600 hover:text-white mt-4 transition-color duration-300">Learn More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Details;
