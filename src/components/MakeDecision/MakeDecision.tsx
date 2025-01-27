import React from "react";

const MakeDecision: React.FC = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div>
          <div className="text-center text-white lg:my-[80px]">
            <h2 className="text-[42px] font-semibold leading-[50px] mx-auto lg:w-[500px]">
              Make the wise decision for your business
            </h2>
            <p className="text-[#b4b4b7] text-lg mt-5">
              Choose from our affordable 3 packages
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-6">
            <div className="bg-[#282a37] rounded-[15px] text-white">
              <div className="p-4 lg:p-8">
                <h2 className="text-base">Starter Plan</h2>
                <h2 className="text-[42px] font-semibold mt-7 mb-3">
                  $29<span className="text-lg font-normal">/month</span>
                </h2>
                <p className="text-[#bbbbbf] mb-10 lg:w-[250px]">
                  This package is suitable for teams 1-15 people.
                </p>
                <h2 className="text-base font-bold mb-4">What’s included:</h2>
                <div className="space-y-2 mb-[98px]">
                  <p className="text-base font-medium text-[#bbbbbf]">
                    10 GB Dedicated Hosting Free
                  </p>
                  <p className="text-base font-medium text-[#bbbbbf]">
                    Best for Developers, Freelancers
                  </p>
                  <p className="text-base font-medium text-[#bbbbbf]">
                    1 Year Support{" "}
                  </p>
                </div>
                <div>
                  <button className="text-base w-full font-bold border-2 border-[#12141d] py-2 lg:py-4 rounded-[10px]">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#282a37] rounded-[15px] text-white">
              <div className="p-4 lg:p-8">
                <h2 className="text-base">Basic Plan</h2>
                <h2 className="text-[42px] font-semibold mt-7 mb-3">
                  $79<span className="text-lg font-normal">/month</span>
                </h2>
                <p className="text-[#bbbbbf] mb-10 lg:w-[250px]">
                  This package is suitable for teams 1-50 people.
                </p>
                <h2 className="text-base font-bold mb-4">What’s included:</h2>
                <div className="space-y-2 mb-[35px]">
                  <p className="text-base font-medium text-[#bbbbbf]">
                    15 GB Dedicated Hosting Free
                  </p>
                  <p className="text-base font-medium text-[#bbbbbf]">
                    Best for Developers, Freelancers
                  </p>
                  <p className="text-base font-medium text-[#bbbbbf]">
                    5 Year Support
                  </p>
                  <p className="text-base font-medium text-[#bbbbbf]">
                    Free Custom Domain
                  </p>
                  <p className="text-base font-medium text-[#bbbbbf]">
                    Basic Statistics
                  </p>
                </div>
                <div>
                  <button className="rounded-[10px] w-full bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] text-sm lg:text-base font-medium  px-2 lg:py-4 text-white py-2">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#282a37] rounded-[15px] text-white">
              <div className="p-4 lg:p-8">
                <h2 className="text-base">Premium Plan</h2>
                <h2 className="text-[42px] font-semibold mt-7 mb-3">
                  $129<span className="text-lg font-normal">/month</span>
                </h2>
                <p className="text-[#bbbbbf] mb-10 lg:w-[250px]">
                  This package is suitable for teams 1-100 people.
                </p>
                <h2 className="text-base font-bold mb-4">What’s included:</h2>
                <div className="space-y-2 mb-[35px]">
                  <p className="text-base font-medium text-[#bbbbbf]">
                    20 GB Dedicated Hosting Free
                  </p>
                  <p className="text-base font-medium text-[#bbbbbf]">
                    Best for Developers, Freelancers
                  </p>
                  <p className="text-base font-medium text-[#bbbbbf]">
                    Unlimited Year Support
                  </p>
                  <p className="text-base font-medium text-[#bbbbbf]">
                    Free Custom Domain
                  </p>
                  <p className="text-base font-medium text-[#bbbbbf]">
                    Full Statistics
                  </p>
                </div>
                <div>
                  <button className="text-base w-full font-bold border-2 border-[#12141D] py-2 lg:py-4 rounded-[10px]">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeDecision;
