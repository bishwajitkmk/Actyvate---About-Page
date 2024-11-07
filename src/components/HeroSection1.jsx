import React from "react";
import hero1 from "./../assets/Hero1.png";
import r from "./../assets/r.png";

const HeroSection1 = () => {
  return (
    <>
      <div
        id="hero-background"
        className="flex bg-gradient-to-t -mt-[320px] from-[#ffffff] to-white max-w-auto"
        style={{
          backgroundImage: `url(${r})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundPositionY: "-170px",
        }}
      >
        <div
          id="top-container"
          className="flex flex-row items-center justify-between px-10 -mt-[325px]"
        >
          {/* Text Section */}
          <div id="main-text" className="flex ml-[156px]  flex-col max-w-lg">
            <h1 className="font-jakarta font-bold w-[886px] text-[50px]">
              Empowering Success Through <br /> Creative Solutions and
              Expertise.
            </h1>
            <h2 className="mt-4 text-[32px] text-[#153158] opacity-[60%] w-[886px] leading-tight">
              Empowering your business to thrive by harnessing targeted lead
              generation strategies that convert potential customers into loyal
              advocates, driving sustainable growth and success.
            </h2>
          </div>

          {/* Image Section */}
          <div
            id="image-section"
            className="flex-shrink-0 ml-[300px] mt-[320px]"
          >
            <img
              className="w-[1100px] h-auto object-contain"
              src={hero1}
              alt="Hero"
            />
          </div>
        </div>

        {/* Stat Section */}
        <div
          id="stat"
          className="flex flex-col absolute mt-[988px] space-y-6 items-center justify-center ml-80"
        >
          <div
            id="block1"
            className="flex align-middle w-[423px] h-[205px] bg-white shadow-md rounded-[20px] flex-col justify-center items-center"
          >
            <h1 className="text-[64px] font-jakarta font-bold leading-[80px] text-[#153158]">
              200+
            </h1>
            <h2 className="text-[32px] font-jakarta font-medium leading-normal text-[#153158] opacity-[80%]">
              Team Members
            </h2>
          </div>

          <div
            id="block2"
            className="flex align-middle w-[423px] h-[205px] bg-white shadow-md rounded-[20px] flex-col justify-center items-center"
          >
            <h1 className="text-[64px] font-jakarta font-bold leading-[80px] text-[#FF5D00]">
              10+
            </h1>
            <h2 className="text-[32px] font-jakarta font-medium leading-normal text-[#153158] opacity-[80%]">
              Countries
            </h2>
          </div>

          <div
            id="block3"
            className="flex align-middle w-[423px] h-[205px] bg-white shadow-md rounded-[20px] flex-col justify-center items-center"
          >
            <h1 className="text-[64px] font-jakarta font-bold leading-[80px] text-[#00A2FF]">
              2300+
            </h1>
            <h2 className="text-[32px] font-jakarta font-medium leading-normal text-[#153158] opacity-[80%]">
              Customers
            </h2>
          </div>
        </div>

        {/* Who Are We */}
        <div id="side-text-area" className="flex flex-col mr-96 mt-[1275px]">
          <div id="title-text" className="relative">
            <h1 className="font-jakarta font-bold text-[50px] text-[#153158]">
              Who Are We
            </h1>
          </div>
          <div id="main-text" className="w-[923px]">
            <h1 className="text-[24px] mt-[32px] font-normal font-jakarta">
              Empowering your business to thrive by harnessing targeted lead
              generation strategies that convert potential customers into loyal
              advocates, driving sustainable growth and success.
            </h1>
            <h1 className="text-[24px] font-normal font-jakarta mt-[32px]">
              Empowering your business to thrive by harnessing targeted lead
              generation strategies that convert potential customers into loyal
              advocates, driving sustainable growth and success.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection1;
