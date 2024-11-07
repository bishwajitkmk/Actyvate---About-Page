import React from "react";
import gs1 from "./../assets/gs1.png";
import gs2 from "./../assets/gs2.png";
import gs3 from "./../assets/gs3.png";
import gs4 from "./../assets/gs4.png";

const GallarySegment = () => {
  return (
    <>
      <main className="flex flex-col items-center">
        <div
          id="image-sections"
          className="flex flex-row justify-around space-x-36 "
        >
          <div id="img1">
            <img src={gs1} alt="" className="-mt-[55px]" />
          </div>
          <div id="img2">
            <img src={gs2} alt="" />
          </div>
          <div id="img3">
            <img src={gs3} alt="" className="-mt-[55px]" />
          </div>
          <div id="img4">
            <img src={gs4} alt="" />
          </div>
        </div>

        {/* Box */}

        <div
          id="box"
          className="w-[1616px] h-[256px] mt-[124px] rounded-[20px] bg-[#80D1FF] flex items-center justify-between px-10"
        >
          {/* Text Section - Aligned on the left */}
          <div id="text-section" className="space-y-2">
            <h1 className="font-jakarta font-bold ml-[56px] text-[#153158] text-[40px]">
              Start growing with Actyvate today
            </h1>
            <h2 className="text-[#153158] ml-[56px] text-[20px] mt-[24px]">
              Grow and scale your business with an all-in-one lead conversion
              platform.
            </h2>
          </div>

          {/* Button Section - Aligned on the right */}
          <div id="button-section" className="flex space-x-4 mr-[56px]">
            <button
              id="Button1"
              className="px-6 py-2 rounded-[6px] text-[18px] bg-white text-[#153158] font-semibold"
            >
              Product Review
            </button>
            <button
              id="Button2"
              className="px-6 py-2 rounded-[6px] bg-[#153158] text-white font-semibold"
            >
              Request a Demo
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default GallarySegment;
