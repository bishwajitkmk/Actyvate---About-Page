import React from "react";
import jas from "./../assets/jas.png";
import paul from "./../assets/paul.png";
import david from "./../assets/david.png";
import james from "./../assets/james.png";
import g3 from "./../assets/graphic3.png";
import line from "./../assets/line.png";

const Team = () => {
  return (
    <>
      <main>
        <div id="header-section" className="flex items-center justify-center">
          <h1 className="font-jakarta font-bold text-[#153158] text-[50px] mb-[66px]">
            Meet our leadership team
          </h1>
        </div>
        <div
          id="img-frames"
          className="flex items-center justify-center space-x-[39px]"
        >
          <div
            id="frame1"
            className="flex flex-col items-center justify-center"
          >
            <img
              src={jas}
              className="rounded-[20px] w-[324px] h-[399px] object-cover"
            />
            <h1 className="mt-[20px] text-[24px] font-jakarta font-semibold text-[#153158]">
              Jas Saran
            </h1>
            <h2 className="text-[18px] font-jakarta font-medium mt-[1px] text-[#153158] opacity-[60%]">
              Cheif Executive Officer
            </h2>
          </div>

          <div
            id="frame2"
            className="flex flex-col items-center justify-center"
          >
            <img
              src={paul}
              className="rounded-[20px] w-[324px] h-[399px] object-cover"
            />
            <h1 className="mt-[20px] text-[24px] font-jakarta font-semibold text-[#153158]">
              Paul Lehal
            </h1>
            <h2 className="text-[18px] font-jakarta font-medium mt-[1px] text-[#153158] opacity-[60%]">
              Chief Technology Officer
            </h2>
          </div>

          <div
            id="frame3"
            className="flex flex-col items-center justify-center"
          >
            <img
              src={david}
              className="rounded-[20px] w-[324px] h-[399px] object-cover"
            />
            <h1 className="mt-[20px] text-[24px] font-jakarta font-semibold text-[#153158]">
              David Pitt
            </h1>
            <h2 className="text-[18px] font-jakarta font-medium mt-[1px] text-[#153158] opacity-[60%]">
              VP of Product
            </h2>
          </div>

          <div
            id="frame4"
            className="flex flex-col items-center justify-center"
          >
            <img
              src={james}
              className="rounded-[20px] w-[324px] h-[399px] object-cover"
            />
            <h1 className="mt-[20px] text-[24px] font-jakarta font-semibold text-[#153158]">
              James Philip
            </h1>
            <h2 className="text-[18px] font-jakarta font-medium mt-[1px] text-[#153158] opacity-[60%]">
              VP of Engineering
            </h2>
          </div>
        </div>

        {/* Button */}
        <div
          id="button-seemore"
          className="flex mt-[69px] items-center justify-center"
        >
          <button className="px-8 py-4 border-[#153158] text-[#153158] text-[18px] font-jakarta font-semibold border-2 rounded-md">
            See more
          </button>
        </div>
        <div
          id="graphic"
          className="mt-[93px] items-center justify-center flex"
        >
          <img src={g3} alt="" />
        </div>
        <div id="line" className="mt-[93px]">
          <img src={line} alt="" />
        </div>
      </main>
    </>
  );
};

export default Team;
