import React, { useState, useEffect } from 'react';
import "../../assets/custom-module.css";
const ScrollCircle = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / scrollTotal) * 100;
        setScrollProgress(progress);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleCircleClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
      <div className="scroll-progress-circle-container">
        <svg viewBox="0 0 36 36" className="circular-chart" onClick={handleCircleClick}>
          <path className="circle-bg"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path className="circle"
            strokeDasharray={`${scrollProgress}, 100`}
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35" className="percentage">{Math.round(scrollProgress)}%</text>
        </svg>
      </div>
    );
  };

export default ScrollCircle;
