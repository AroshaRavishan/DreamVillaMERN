// AboutUs.js
import React from 'react';
import WebLayout from '../Layouts/WebLayout';
import Details from '../Components/Details';
import Hero from '../Components/Hero';
import { motion } from "framer-motion";



const backgroundImage = "https://cdn.pixabay.com/photo/2022/10/22/06/03/mountains-7538471_1280.jpg";
const heroText = "STAY WITH US"; // Replace this with the data you want to pass
const heroDescription = "DREAM VILLA";
const heroDescription2 = 'Choose from an extensive collection of courses and enhance your career opportunities and earning potential. Gain a strong foundation for professional and personal growth. Our popular qualifications are widely recognised and highly respected by employers and organisations, worldwide.';


const Stay = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}>
            <WebLayout title='Stay - Dream Villa'>
                <Hero backgroundImage={backgroundImage} heroText={heroText} heroDescription={heroDescription} heroDescription2={heroDescription2} />
                <Details title1={'Stay'} title2={'DREAM VILLA'} description={'Villa 700 boasts 5 spacious and luxurious rooms that offer guests a taste of luxury with a rustic Sri Lankan touch in terms of design. Each room comprises Wi-Fi, a flat-screen TV, and a host of thoughtful amenities you can expect from an elegant Induruwa hotel and villa.'} />
            </WebLayout>
        </motion.div>
    );
};

export default Stay;
