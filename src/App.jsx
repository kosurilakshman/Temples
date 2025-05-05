import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import KrishnaMandir from './Components/KrishnaMandir/KrishnaMandir';
import GayatriMandir from './Components/GayatriMandir/GayatriMandir';
import ShivaMandir from './Components/ShivaMandir/ShivaMandir';
import Footer from './Components/Footer/Footer';
import './App.css';

const TempleInfo = () => {
  return (
    <div className="temple-info-page">
      <Navbar/>
      <HeroSection />
      <KrishnaMandir />
      <GayatriMandir />
      <ShivaMandir />
      <Footer/>
    </div>
  );
};

export default TempleInfo;
