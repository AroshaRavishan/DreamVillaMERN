import React from 'react';
import '../assets/custom-module.css';

function Marquee({ text }) {
  return (
    <div className="marquee-container mt-10 relative">
      <div className="marquee">
        {text}
      </div>
    </div>
  );
}

export default Marquee;
