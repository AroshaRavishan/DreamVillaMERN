// AboutUs.js
import React from 'react';
import WebLayout from '../Layouts/WebLayout';
import { motion } from 'framer-motion';

const Contactus = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <WebLayout title="Contact Us - Dream Villa">
        {/* Your content goes here */}
        hiiiiiiiiiiiiiii
      </WebLayout>
    </motion.div>
  );
};

export default Contactus;
