import React from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import '../assets/custom-module.css';

function Details({ title1, title2, description }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}  // Initial state: invisible and shifted left
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}   // Animation: fade in and move to the original position
        >
            <div className="container mt-10 md:mt-30 relative">
                <div class="">
                    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
                        <div class="flex items-center">
                            <div class="text-left">
                                <div className="">
                                    <img src="https://themewagon.github.io/seapalace/img/home/bed-icon.png" alt="image"></img>
                                </div>
                                <h1 class="text-sm md:text-base font-medium mt-4 text-gold-100 tracking-[3px] uppercase">{title1}</h1>
                                <p class="text-2xl md:text-4xl font-semibold mt-1 text-black-900">{title2}</p>
                                <p class="text-sm md:text-base font-light mt-5">{description}</p>
                                <p class="mt-6 text-gold-200 text-xl intro"><em>Maria...the Owner</em></p>
                            </div>
                        </div>
                        <div class="hidden lg:block"><img loading="lazy" src="https://themewagon.github.io/harbor-lights/images/room-5.jpg" alt="Coporate-training-image" class="w-full" /></div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Details;
