import React, { useState } from 'react';
import './App.css';
import CompanyLogoList from './Components/CompanyLogoList';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import Navigation from './Components/Navigation';
import StepsSection from './Components/StepsSection';
import ApplyToJoinForm from './Pages/ApplyToJoinForm';
import { Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch

import Authentication from './Pages/Athentication';

function App() {
  const [showApplyForm, setShowApplyForm] = useState(false);

  const handleApplyClick = () => {
    setShowApplyForm(true);
  };

  return (
    <div className="App">
      <Navigation />
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={ /* Use 'element' prop instead of 'component' */
          !showApplyForm ? (
            <>
              <HeroSection onApplyClick={handleApplyClick} />
              <StepsSection />
              <CompanyLogoList />
              <Footer />
            </>
          ) : (
            <ApplyToJoinForm onClose={() => setShowApplyForm(false)} />
          )
        } />
        <Route path="/login" element={<Authentication />} /> {/* Use 'element' prop for the component */}
      </Routes>
    </div>
  );
}

export default App;
