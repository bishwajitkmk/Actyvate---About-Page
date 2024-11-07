import React from "react";
import HeroSection1 from "./components/HeroSection1";
import HeroSection2 from "./components/HeroSection2";
import HeroSection3 from "./components/HeroSection3";
import Team from "./components/Team";
import GallarySegment from "./components/GallarySegment";

const App = () => {
  return (
    <>
      <HeroSection1 />
      <div className="mt-[150px]">
        <HeroSection2 />
      </div>
      <div className="mt-[122px]">
        <HeroSection3 />
      </div>
      <div className="mt-[95px]">
        <Team />
      </div>
      <div className="mt-[120px] mb-[100px]">
        <GallarySegment />
      </div>
    </>
  );
};

export default App;
