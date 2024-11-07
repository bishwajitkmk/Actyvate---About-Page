import React from "react";
import value from "./../assets/value.png";
import innovation from "./../assets/innovation.png";
import result from "./../assets/result.png";
import client from "./../assets/client.png";

const HeroSection2 = () => {
  return (
    <>
      <div id="hero-section-2" className="flex items-center justify-center">
        <div id="heading" className="flex flex-col">
          <h1 className="flex justify-center text-[50px] text-[#153158] font-bold font-jakarta">
            Our core values guide how we work
          </h1>
          <div
            id="subsection-group"
            className="flex flex-row mt-[64px] justify-between space-x-8"
          >
            <div
              id="sub1"
              className="w-[374px] h-[245px] bg-[#ff5e0023] rounded-[20px]"
            >
              <div id="icon" className="flex ">
                <img src={value} alt="" className="mt-[41px] ml-[24px]" />
              </div>
              <div
                id="sub-heading"
                className="text-black font-jakarta mt-[16px] font-semibold text-[24px] ml-[24px]"
              >
                Integrity
              </div>
              <div
                id="details"
                className="text-black font-jakarta mt-[16px] font-normal w-[337px] text-[18px] ml-[24px]"
              >
                Explore various articles, videos, and other materials to learn
                about the functionality of Actyvate.
              </div>
            </div>

            <div
              id="sub2"
              className="w-[374px] h-[245px] bg-[#00a2ff1f] rounded-[20px]"
            >
              <div id="icon" className="flex ">
                <img src={innovation} alt="" className="mt-[40px] ml-[24px]" />
              </div>
              <div
                id="sub-heading"
                className="text-black font-jakarta mt-[16px] font-semibold text-[24px] ml-[24px]"
              >
                Innovation
              </div>
              <div
                id="details"
                className="text-black font-jakarta mt-[16px] font-normal w-[337px] text-[18px] ml-[24px]"
              >
                Explore various articles, videos, and other materials to learn
                about the functionality of Actyvate.
              </div>
            </div>

            <div
              id="sub3"
              className="w-[374px] h-[245px] bg-[#1531581a] rounded-[20px]"
            >
              <div id="icon" className="flex ">
                <img src={client} alt="" className="mt-[40px] ml-[24px]" />
              </div>
              <div
                id="sub-heading"
                className="text-black font-jakarta mt-[16px] font-semibold text-[24px] ml-[24px]"
              >
                Client-Centricity
              </div>
              <div
                id="details"
                className="text-black font-jakarta mt-[16px] font-normal w-[337px] text-[18px] ml-[24px]"
              >
                Explore various articles, videos, and other materials to learn
                about the functionality of Actyvate.
              </div>
            </div>

            <div
              id="sub4"
              className="w-[374px] h-[245px] bg-[#80d0ff23] rounded-[20px]"
            >
              <div id="icon" className="flex ">
                <img src={result} alt="" className="mt-[40px] ml-[24px]" />
              </div>
              <div
                id="sub-heading"
                className="text-black font-jakarta mt-[16px] font-semibold text-[24px] ml-[24px]"
              >
                Results-Driven
              </div>
              <div
                id="details"
                className="text-black font-jakarta mt-[16px] font-normal w-[337px] text-[18px] ml-[24px]"
              >
                Explore various articles, videos, and other materials to learn
                about the functionality of Actyvate.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection2;
