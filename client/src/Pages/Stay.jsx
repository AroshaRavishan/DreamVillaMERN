// AboutUs.js
import React from 'react';
import WebLayout from '../Layouts/WebLayout';
import Details from '../Components/Details';
import HeroBanner from '../Components/HeroBanner';
import { motion } from "framer-motion";
import Roomssuits from '../Components/Roomssuits';
import MainFacilities from "../Components/MainFacilities";

const backgroundImage = "https://www.ansonika.com/paradise/img/rooms/2.jpg";
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
            <HeroBanner backgroundImage={backgroundImage} heroText={heroText} heroDescription={heroDescription} heroDescription2={heroDescription2} />
            <Roomssuits/>
            <MainFacilities />
            </WebLayout>
        </motion.div>
    );
};

export default Stay;
