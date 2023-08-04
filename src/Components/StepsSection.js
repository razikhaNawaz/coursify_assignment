import React from 'react';
import './StepsSection.css'; // Make sure to create the CSS file with the provided styles

const StepsSection = () => {
  return (
    <div className="steps-section">
      <div className="step">
        <img src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/feature_icon_2.png" alt="Step 1" />
        <h3>STEP 1: COMPLETE PROFILE</h3>
        <p>Once you are approved, we showcase you to leading Indian technology startups.</p>
      </div>
      <div className="step">
        <img src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon1.png" alt="Step 2" />
        <h3>STEP 2: RECEIVE JOB OFFERS</h3>
        <p>Companies start sending interview requests. Talk to only the ones you like.</p>
      </div>
      <div className="step">
        <img src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon2.png" alt="Step 3" />
        <h3>STEP 3: ACCEPT DREAM JOB</h3>
        <p>Compare your offers and accept the best one. Hired!</p>
      </div>
    </div>
  );
};

export default StepsSection;
