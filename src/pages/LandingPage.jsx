import React from 'react';
import HeaderMenuLeft from '../components/HeaderMenuLeft.jsx';
import HeroImageSplitScreen from '../components/HeroImageSplitScreen.jsx';
import SocialProofCarousel from '../components/SocialProofCarousel.jsx';
import FeaturesTextCards from '../components/FeaturesTextCards.jsx';
import HeroVideoSplitScreen from '../components/HeroVideoSplitScreen.jsx';
import SingleCardPricing from '../components/SingleCardPricing.jsx'; // New Pricing Section


function LandingPage() {
  return (
    <div>
      <HeaderMenuLeft />
      <HeroImageSplitScreen />
      <SocialProofCarousel />
      <FeaturesTextCards />
      <HeroVideoSplitScreen />
      <SingleCardPricing />  
    </div>
  );
}

export default LandingPage;