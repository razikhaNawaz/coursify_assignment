import React from 'react';
import './HeroSection.css'; // Make sure to create the CSS file with the provided styles

const HeroSection = ({ onApplyClick }) => {
    

    
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Find your next top tech job in 1 week.</h1>
        <h6>Are you a top 2% Software Engineer, Product Manager, or Data Scientist?</h6>
        <h6>Let leading Indian technology companies compete to hire you.</h6>
        <button onClick={onApplyClick} type="button" class="btn btn-primary">Apply to Join</button>
        <p>100% free. It takes only 5 minutes</p>
      </div>
    </div>
  );
};

export default HeroSection;
