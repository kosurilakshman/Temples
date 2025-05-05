import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
           <h2>Divine Trinity of Grace,<br />Wisdom & Power</h2>
        <p>
          Experience the divine presence of Mother Gayatri, Lord Shiva, and Lord Krishna.
          Each temple is built to uplift the spirit, calm the mind, and deepen your devotion.
        </p>
      </div>

      <div className="hero-images">
        <img src="src/assets/img3.png" alt="Deity 1" className="deity-image deity-1" />
        <img src="src/assets/img2.png" alt="Deity 2" className="deity-image deity-2" />
        <img src="src/assets/img1.png" alt="Deity 3" className="deity-image deity-3" />
      </div>
    </div>
  );
};

export default HeroSection;
