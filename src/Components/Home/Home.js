import React from "react";
import HomePackages from "./HomePackages";
import SliderVew from "./SliderVew";
import VisaProcessing from "./VisaProcessing";
import WhyChooseUs from "./WhyChooseUs";


const Home = () => {
  return (
    <div id="home"> 
        <SliderVew />
        <HomePackages />
        <VisaProcessing />
        <WhyChooseUs />
    </div>

  );
};

export default Home;
