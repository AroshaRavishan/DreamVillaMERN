// layout/WebLayout.js
import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Helmet } from 'react-helmet';

const WebLayout = ({ children, title, removemargin }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Navbar />
      {children}
      <Footer removemargin={removemargin} />
    </div>
  );
};


export default WebLayout;
