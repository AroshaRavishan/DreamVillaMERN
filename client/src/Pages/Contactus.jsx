// AboutUs.js
import React from 'react';
import WebLayout from '../Layouts/WebLayout';
import { motion } from 'framer-motion';
import Hero from '../Components/Hero';
import ContactusForm from '../Components/ContactusForm';


const Contactus = () => {

  const backgroundImage = "https://www.boutiquecollectionbyamaya.com/tri-koggala/wp-content/uploads/sites/8/2021/12/home-deskt-header.jpg";
  const heroText = "GET IN TOUCH WITH US"; // Replace this with the data you want to pass
  const heroDescription = "DREAM VILLA";
  const heroDescription2 = 'Choose from an extensive collection of courses and enhance your career opportunities and earning potential. Gain a strong foundation for professional and personal growth. Our popular qualifications are widely recognised and highly respected by employers and organisations, worldwide.';


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <WebLayout title="Contact Us - Dream Villa">
        <Hero backgroundImage={backgroundImage} heroText={heroText} heroDescription={heroDescription} heroDescription2={heroDescription2} />
        <ContactusForm />
      </WebLayout>
    </motion.div>
  );
};

export default Contactus;
