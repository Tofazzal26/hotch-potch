import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-[#12141d]">
      <div className="container mx-auto">
        <div>
          <div className="pt-4 lg:pt-[130px]">
            <div className="rounded-[10px] bg-gradient-to-r from-[#2B59FF] to-[#BB2BFF] text-sm lg:text-base font-medium lg:px-8 px-4 lg:py-6 text-white py-2">
              <div className="flex justify-between items-center">
                <h2 className="text-[15px] lg:text-[32px] font-semibold w-[530px] lg:leading-[40px]">
                  It will help you improve your writing & bring ideas more c
                  learly.
                </h2>
                <button className="font-semibold text-[12px] lg:text-base bg-white text-black rounded-[5px] lg:px-5 lg:py-4">
                  Start 14 Days Free Trial
                </button>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-wrap justify-between py-4 lg:py-[90px]">
            <div>
              <h2 className="text-base font-semibold text-white">Company</h2>
              <ul className="text-gray-300 mt-5 space-y-2">
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
              </ul>
            </div>
            <div>
              <h2 className="text-base font-semibold text-white">Help</h2>
              <ul className="text-gray-300 mt-5 space-y-2">
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h2 className="text-base font-semibold text-white">Resources</h2>
              <ul className="text-gray-300 mt-5 space-y-2">
                <li>Free eBooks</li>
                <li>Development Tutorial</li>
                <li>How to - Blog</li>
                <li>Youtube Playlist</li>
              </ul>
            </div>
            <div>
              <h2 className="text-base font-semibold text-white">Links</h2>
              <ul className="text-gray-300 mt-5 space-y-2">
                <li>Free eBooks</li>
                <li>Development Tutorial</li>
                <li>How to - Blog</li>
                <li>Youtube Playlist</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
