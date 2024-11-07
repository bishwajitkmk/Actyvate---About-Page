import React from "react";
import h31 from "./../assets/h31.png";
import h32 from "./../assets/h32.png";
import g1 from "./../assets/graphic1.png";
import g2 from "./../assets/graphic2.png";

const HeroSection3 = () => {
  return (
    <>
      <main>
        <div id="hero-container" className="w-full h-[1500px] bg-[#ff5e000e] ">
          <div
            id="frame1"
            className="flex flex-row items-center justify-center"
          >
            <div id="text-sections" className="mt-[117px]">
              <h1
                id="main"
                className="text-[50px] font-jakarta font-bold text-[#153158]"
              >
                What you can achieve
              </h1>
              <h2
                id="main-2"
                className="font-jakarta font-normal text-[24px] w-[792px] text-[#153158] opacity-[60%] mt-[32px]"
              >
                Empowering your business to thrive by harnessing targeted lead
                generation strategies that convert potential customers into
                loyal advocates, driving sustainable growth and success.
              </h2>
              <h1 className="text-[24px] mt-[25px] font-jakarta font-medium text-[#153158]">
                Increased Quality Leads
              </h1>
              <h2 className="font-jakarta font-normal text-[22px] text-[#153158] opacity-[60%] w-[792px] mt-[14px]">
                Attract and engage high-quality prospects that align with your
                ideal customer profile, boosting conversion rates and sales
                opportunities.
              </h2>
              <h1 className="text-[24px] mt-[21px] font-jakarta font-medium text-[#153158]">
                Enhanced Brand Visibility
              </h1>
              <h2 className="font-jakarta font-normal mt-[14px] text-[22px] text-[#153158] opacity-[60%] w-[792px] leading-tight">
                Elevate your brand presence in the marketplace, making it easier
                for potential customers to find and connect with you.
              </h2>
              <h1 className="text-[24px]  font-jakarta font-medium mt-[21px] text-[#153158]">
                Stronger Customer Relationships
              </h1>
              <h2 className="font-jakarta font-normal text-[22px] mt-[14px] text-[#153158] opacity-[60%] w-[792px]">
                Build lasting connections with your audience through
                personalized engagement and effective communication strategies.
              </h2>
            </div>

            <div id="img-section" className="mt-[117px]">
              <img src={h31} alt="" />
            </div>
            <img src={g1} alt="" className="absolute ml-[1600px] -mt-72" />
          </div>

          <img src={g2} className="absolute mt-[55px] -ml-12" />

          {/* Frame 2 */}
          <div
            id="frame2"
            className="mt-[144px] flex flex-row space-x-[100px] items-center justify-center"
          >
            <div id="img-section">
              <img src={h32} alt="" />
            </div>
            <div id="text-section">
              <h1 className="font-bold font-jakarta text-[#153158] text-[50px]">
                Mission & Vision
              </h1>
              <h2 className="font-jakarta mt-[32px] font-medium text-[24px] text-[#153158] opacity-[60%] w-[792px]">
                Empowering your business to thrive by harnessing targeted lead
                generation strategies that convert potential customers into
                loyal advocates, driving sustainable growth and success.
              </h2>
              <br />
              <h2 className="font-jakarta font-medium text-[24px] text-[#153158] opacity-[60%] w-[792px]">
                Empowering your business to thrive by harnessing targeted lead
                generation strategies that convert potential customers into
                loyal advocates, driving sustainable growth and success.
                Empowering your business to thrive by harnessing targeted lead
                generation strategies that convert potential customers into
                loyal advocates, driving sustainable growth and success.
              </h2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroSection3;
