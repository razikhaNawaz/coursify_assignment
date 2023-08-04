import React from 'react';
import { FaReact, FaGoogle, FaFacebook, FaTwitter, FaApple, FaAmazon, FaMicrosoft } from 'react-icons/fa';
import { SiNetflix, SiAirbnb, SiUber, SiSpotify, SiTesla, SiSlack, SiGithub } from 'react-icons/si';
import './CompanyLogoList.css';

const companies = [
  { name: 'React', logo: <FaReact size={50} /> },
  { name: 'Google', logo: <FaGoogle size={50} /> },
  { name: 'Facebook', logo: <FaFacebook size={50} /> },
  { name: 'Twitter', logo: <FaTwitter size={50} /> },
  { name: 'Apple', logo: <FaApple size={50} /> },
  { name: 'Amazon', logo: <FaAmazon size={50} /> },
  { name: 'Microsoft', logo: <FaMicrosoft size={50} /> },
  { name: 'Netflix', logo: <SiNetflix size={50} /> },
  { name: 'Airbnb', logo: <SiAirbnb size={50} /> },
  { name: 'Uber', logo: <SiUber size={50} /> },
  { name: 'Spotify', logo: <SiSpotify size={50} /> },
  { name: 'Tesla', logo: <SiTesla size={50} /> },
  { name: 'Slack', logo: <SiSlack size={50} /> },
  { name: 'GitHub', logo: <SiGithub size={50} /> },
];

const CompanyLogoList = () => {
  return (
    <div>
        <h3>LEADING COMPANIES BUILD TEAMS ON TOPHIRE HOW IT WORKS</h3>
    <div className="company-list">
      {companies.map((company, index) => (
        <div key={index} className="company-item">
          {company.logo}
          <span>{company.name}</span>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CompanyLogoList;
