import React from "react";
import { motion } from "framer-motion"; // Import motion components
import '../assets/custom-module.css';

function VideoBanner({ backgroundVideoBanner, bannerText, bannerDescription }) {
    const videoStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };

    // Define motion variants
    const fadeInLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    };

    const slideInFromBottom = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div>
            <section>
                <div className="w-full h-[75vh] z-50 mt-10 md:mt-30 relative">
                    <video style={videoStyle} autoPlay loop muted>
                        <source src={backgroundVideoBanner} type="video/mp4" />
                    </video>
                    <div class="pinned-image__container-overlay"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="container text-center overflow-hidden">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={fadeInLeft}
                                className="text-gold-900"
                            >
                                <h1 className="text-sm md:text-lg font-normal tracking-[3px] uppercase">{bannerText}</h1>
                            </motion.div>
                            <div className="border w-1/4 md:w-[10%] mx-auto my-5"></div>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={fadeInRight}
                                className="text-white"
                            >
                                <p className="text-3xl md:text-6xl font-semibold mt-4">{bannerDescription}</p>
                            </motion.div>
                            {/* <div
                                initial="hidden"
                                animate={controls}
                                variants={slideInFromBottom}
                                className="text-white w-3/4 mx-auto"
                            >
                                <p className="text-sm md:text-lg mt-4">{heroDescription2}</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default VideoBanner;
