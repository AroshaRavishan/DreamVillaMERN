import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function Hero({ backgroundImage, heroText, heroDescription,heroDescription2 }) {
    const sectionStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 2, delay: 0.5 } },
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 2, delay: 0.5 } },
    };

    const slideInFromBottom = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1 } },
    };

    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const offset = 200;

            if (scrollY > offset) {
                controls.start("hidden");
            } else {
                controls.start("visible");
            }
        };

        // Initial check for scroll position when the page is loaded or refreshed
        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [controls]);

    return (
        <React.Fragment>
            <section>
                <div style={sectionStyle} className="w-full h-[102vh] -mt-[100px] z-50">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="container text-center overflow-hidden">
                            <motion.div
                                initial="hidden"
                                animate={controls}
                                variants={fadeInLeft}
                                className="text-white"
                            >
                                <h1 className="text-sm md:text-lg font-normal">{heroText}</h1>
                            </motion.div>
                            <div className="border w-1/4 md:w-[10%] mx-auto my-5"></div>
                            <motion.div
                                initial="hidden"
                                animate={controls}
                                variants={fadeInRight}
                                className="text-white"
                            >
                                <p className="text-3xl md:text-6xl font-semibold mt-4">{heroDescription}</p>
                            </motion.div>
                            {/* <motion.div
                                initial="hidden"
                                animate={controls}
                                variants={slideInFromBottom}
                                className="text-white w-3/4 mx-auto"
                            >
                                <p className="text-sm md:text-lg mt-4">{heroDescription2}</p>
                            </motion.div> */}
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Hero;
