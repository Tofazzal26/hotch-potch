"use client";

import Image from "next/image";
import ResultStyle from "./ResultStyle/ResultStyle.module.css";

const Results: React.FC = () => {
  return (
    <div className="lg:mt-[170px]">
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col items-center lg:gap-[218px] justify-center ">
          <div
            className="bg-white lg:w-[415px] rounded-[10px] relative z-10 lg:mt-0 mt-4
          "
          >
            <div className="p-4 lg:p-6 z-20">
              <div>
                <h2 className="text-[18px] font-semibold">Results</h2>
                <p className="text-[#818488] mb-5">
                  Here's what our AI came up with.
                </p>
              </div>
              <div>
                <div className="bg-[#f4f7ff] rounded-[10px]">
                  <div className="p-2 lg:p-4">
                    <p>
                      Pain: You are an e-commerce business, and you want to sell
                      your products all over the country, but you are confused
                      about how to handle sales tax.
                    </p>
                    <br />
                    <p>
                      Agitate: You have no idea how much sales tax to charge
                      your customers in each state.
                    </p>
                    <br />
                    <p>
                      Solution: Use TaxSol, our full stack sales tax solution,
                      to manage your sales tax for you!
                    </p>
                  </div>
                </div>
                <div className="bg-[#f4f7ff] rounded-[10px] mt-[18px]">
                  <div className="p-2 lg:p-4">
                    <p>
                      Pain: e-commerce business owners are struggling to keep up
                      with the ever changing sales tax laws.
                    </p>
                    <br />
                    <p>Agitate: Sales tax is a complicated, confusing</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[295px] right-[-100px] lg:flex hidden">
              <Image
                src="/loading.png"
                alt="loading"
                width={240}
                height={100}
                className="rounded-md"
              />
            </div>
            <div className={ResultStyle.ellipse}></div>
            <div className="w-[200px] h-[200px] border-2 lg:flex hidden border-dashed absolute right-[-110px] top-[140px] border-gray-500"></div>
          </div>
          <div>
            <div className="my-4 lg:my-0">
              <h2 className="text-[20px] lg:text-[42px] font-semibold text-white lg:w-[500px] lg:leading-[50px]">
                Create content efficiently and quickly with great AI writing
                tools
              </h2>
              <p className="text-base lg:text-[18px] text-[#b4b4b7] lg:w-[490px] lg:mt-[30px] my-2 lg:mb-[42px]">
                150k+ users. No Credit Card Required. Pro designs and writing at
                no cost. Start for free. Ai Writer Tool | Generate text for
                ecom, social media, website, sales, blogs etc.
              </p>
              <button
                className={`${ResultStyle.btnAnimation} ${ResultStyle.btn} rounded-[5px] bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] text-sm lg:text-base font-semibold lg:px-6 px-2 lg:py-[16px] text-white py-2`}
              >
                Start 14 Days Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
