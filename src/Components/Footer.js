import React from 'react';
import './Footer.css'; // Create a CSS file for styling

const Footer = () => {
  return (
    <div className="footer">
      <div className="column">
        {/* Column 1 content */}
        <h4>Hiring App</h4>
        <p>Hiring App is on a mission to make it dead simple for leading Indian startups to hire the top 2% of tech talent.</p>
      </div>
      <div className="column">
        {/* Column 2 content */}
        <h4>CANDIDATES</h4>
        <a href="#">Candidate Sign Up</a>
        <a href="#">Invite & Earn ₹15k</a>
        <a href="#">Candidate FAQ</a>
      </div>
      <div className="column">
        {/* Column 3 content */}
        <h4>EMPLOYERS</h4>
        <a href="#">Employer Sign Up</a>
        <a href="#">Employer FAQ</a>
      </div>
      <div className="column">
        {/* Column 4 content */}
        <h4>COMPANY</h4>
        <a href="#">Careers</a>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  );
};

export default Footer;
