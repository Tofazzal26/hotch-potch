"use client";
import AuthenticStyle from "./AuthenticStyle/AuthenticStyle.module.css";

const AuthenticResult: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-4 lg:mt-[150px]">
        <div className="flex lg:flex-row flex-col items-center justify-center lg:gap-[100px]">
          <div className="my-4 lg:my-0">
            <h2 className="text-[20px] lg:text-[42px] font-semibold text-white lg:w-[500px] lg:leading-[50px]">
              Write what you want to convey through clear, & authentic writing
            </h2>
            <p className="text-base lg:text-[18px] text-[#b4b4b7] lg:w-[490px] lg:mt-[30px] my-2 lg:mb-[42px]">
              AI-Writer is the most accurate content generation platform and
              writing tool that helps you transform your text into a completely
              personalized.
            </p>
            <button
              className={`${AuthenticStyle.btnAnimation} ${AuthenticStyle.btn} rounded-[5px] bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] text-sm lg:text-base font-semibold lg:px-6 px-2 lg:py-[16px] text-white py-2`}
            >
              Start 14 Days Free Trial
            </button>
          </div>
          <div>
            <div className="bg-white rounded-[10px] relative">
              <div className="px-6 py-4">
                <div className="flex lg:flex-row flex-col lg:gap-[40px]">
                  <div>
                    <ul className="text-sm text-[#a0a1a5] space-y-2">
                      <li>Blog Outline</li>
                      <li>Blog Intro</li>
                      <li>Blog Conclusion</li>
                      <li>AIDA </li>
                      <li>PAS</li>
                      <li>Content Rewriter</li>
                    </ul>
                    <div className="mt-3">
                      <ul className="space-y-[18px]">
                        <li className=" w-[90px] h-[5px] rounded-full bg-[#e4e8ef]"></li>
                        <li className=" w-[70px] h-[5px] rounded-full bg-[#e4e8ef]"></li>
                        <li className=" w-[82px] h-[5px] rounded-full bg-[#e4e8ef]"></li>
                        <li className=" w-[57px] h-[5px] rounded-full bg-[#e4e8ef]"></li>
                        <li className=" w-[75px] h-[5px] rounded-full bg-[#e4e8ef]"></li>
                        <li className=" w-[87px] h-[5px] rounded-full bg-[#e4e8ef]"></li>
                        <li className=" w-[64px] h-[5px] rounded-full bg-[#e4e8ef]"></li>
                        <li className=" w-[77px] h-[5px] rounded-full bg-[#e4e8ef]"></li>
                        <li className=" w-[57px] h-[5px] rounded-full bg-[#e4e8ef]"></li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h2 className="text-[18px] font-semibold">Results</h2>
                      <p className="text-sm text-[#818488] mb-5">
                        Here's what our AI came up with.
                      </p>
                    </div>
                    <div className="space-y-[10px]">
                      <div className="bg-[#12141d] rounded-[10px]">
                        <div className="px-6 py-6">
                          <ul className="space-y-[18px]">
                            <li className=" w-[50px] h-[5px] mb-4 rounded-full bg-[#3b3d47]"></li>
                            <li className=" w-[312px] h-[5px] rounded-full bg-[#3b3d47]"></li>
                            <li className=" w-[288px] h-[5px] rounded-full bg-[#3b3d47]"></li>
                            <li className=" w-[254px] h-[5px] rounded-full bg-[#3b3d47]"></li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-[#f8faff] rounded-[10px]">
                        <div className="px-6 py-6">
                          <ul className="space-y-[18px]">
                            <li className=" w-[50px] h-[5px] mb-4 rounded-full bg-[#dde2ed]"></li>
                            <li className=" w-[312px] h-[5px] rounded-full bg-[#dde2ed]"></li>
                            <li className=" w-[288px] h-[5px] rounded-full bg-[#dde2ed]"></li>
                            <li className=" w-[254px] h-[5px] rounded-full bg-[#dde2ed]"></li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-[#f8faff] rounded-[10px]">
                        <div className="px-6 py-6">
                          <ul className="space-y-[18px]">
                            <li className=" w-[50px] h-[5px] mb-4 rounded-full bg-[#dde2ed]"></li>
                            <li className=" w-[312px] h-[5px] rounded-full bg-[#dde2ed]"></li>
                            <li className=" w-[288px] h-[5px] rounded-full bg-[#dde2ed]"></li>
                            <li className=" w-[254px] h-[5px] rounded-full bg-[#dde2ed]"></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={AuthenticStyle.ellipse}></div>
              <div className="w-[200px] h-[200px] border-2 lg:flex hidden border-dashed absolute left-[-40px] top-[120px] border-gray-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticResult;
