"use client";
import Image from "next/image";
import BannerStyle from "./BannerStyle/BannerStyle.module.css";

const Banner: React.FC = () => {
  return (
    <div>
      <div className="lg:py-[125px]">
        <div className="flex justify-center items-center text-center relative">
          <div>
            <h2 className="text-[20px] lg:text-[60px] font-medium text-white mx-auto lg:w-[500px] leading-[70px]">
              Write better content for your{" "}
              <span
                className={`bg-gradient-to-r from-[#FC6739] to-[#FFC947] bg-clip-text text-transparent ${BannerStyle.line} relative`}
              >
                Facebook Ads
              </span>
            </h2>
            <p className="text-sm lg:text-[18px] text-[#b4b4b7] lg:mb-[46px] lg:mt-[36px] lg:w-[450px] mb-4 mx-auto">
              Artificial intelligence writting tool helps you create blogs,
              social media websites and much more.
            </p>

            <div className="flex flex-col justify-center items-center gap-5 lg:pb-0 pb-[40px]">
              <button className="rounded-[5px] bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] text-sm lg:text-base font-semibold lg:px-6 px-2 lg:py-[16px] text-white py-2">
                Start 14 Days Free Trial
              </button>
              <button className="font-semibold text-base text-white flex items-center gap-2">
                <span className="border-2 border-dotted border-gray-400 rounded-sm p-1">
                  <Image src="/play.png" width={15} height={15} alt="play" />
                </span>
                Watch A Demo
              </button>
            </div>
          </div>
        </div>
        <div className={`${BannerStyle.ellipse} lg:block hidden`}></div>
      </div>
    </div>
  );
};

export default Banner;
