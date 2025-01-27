"use client";
import Image from "next/image";
import OurCustomerStyle from "./OurCustomerStyle/OurCustomerStyle.module.css";

const OurCustomer = () => {
  return (
    <div className="bg-[#161823] mt-4 lg:mt-[100px]">
      <div className="container mx-auto">
        <div className="text-center text-white lg:pt-[80px]">
          <h2 className="text-[20px] lg:text-[42px]">What our customers say</h2>
          <p className="text-lg text-[#b5b6b9] mx-auto lg:w-[400px] mt-3">
            Read why thousands of marketers, writers, and entrepreneurs love us
            so much.
          </p>
        </div>
        <div className="columns-1 lg:columns-4 gap-5 space-y-5 lg:mt-[70px]">
          <div className={`bg-white rounded-[5px] break-inside-avoid`}>
            <div className="px-6 py-6">
              <div>
                <div className="flex justify-between">
                  <div className="flex gap-[10px]">
                    <Image src="/user.png" width={45} height={45} alt="user" />
                    <div>
                      <h2 className="text-base font-semibold">
                        Darrell Steward
                      </h2>
                      <p className="text-[13px] text-[#5a5b61]">@darrels</p>
                    </div>
                  </div>
                  <div>
                    <Image
                      width={20}
                      height={20}
                      src="/twitter.png"
                      alt="twitter"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-base lg:w-[240px] lg:mt-6">
                    You made it so simple. My new site is so much faster and
                    easier to work with than my old site. I just choose the
                    page, make the change and click save.
                  </p>
                  <button className="text-[#0EA5E9] text-base">#another</button>
                </div>
              </div>
            </div>
          </div>
          <div className={`bg-white rounded-[5px] break-inside-avoid`}>
            <div className="px-6 py-6">
              <div>
                <div className="flex justify-between">
                  <div className="flex gap-[10px]">
                    <Image src="/user2.png" width={45} height={45} alt="user" />
                    <div>
                      <h2 className="text-base font-semibold">
                        Leslie Alexander
                      </h2>
                      <p className="text-[13px] text-[#5a5b61]">@lesslie</p>
                    </div>
                  </div>
                  <div>
                    <Image
                      width={20}
                      height={20}
                      src="/twitter.png"
                      alt="twitter"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-base lg:w-[240px] lg:mt-6 ">
                    Simply the best. Better than all the rest. I’d recommend
                    this product to beginners and advanced users.
                  </p>
                  <button className="text-[#0EA5E9] text-base">
                    #postcrafts
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={`bg-white rounded-[5px] break-inside-avoid`}>
            <div className="px-6 py-6">
              <div>
                <div className="flex justify-between">
                  <div className="flex gap-[10px]">
                    <Image src="/user3.png" width={45} height={45} alt="user" />
                    <div>
                      <h2 className="text-base font-semibold">Jenny Wilson</h2>
                      <p className="text-[13px] text-[#5a5b61]">@jennywilson</p>
                    </div>
                  </div>
                  <div>
                    <Image
                      width={20}
                      height={20}
                      src="/twitter.png"
                      alt="twitter"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-base lg:w-[240px] lg:mt-6">
                    This is a top quality product. No need to think twice before
                    making it live on web.
                  </p>
                  <button className="text-[#0EA5E9] text-base">
                    #make_it_fast
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={`bg-white rounded-[5px] break-inside-avoid`}>
            <div className="px-6 py-6">
              <div>
                <div className="flex justify-between">
                  <div className="flex gap-[10px]">
                    <Image src="/user4.png" width={45} height={45} alt="user" />
                    <div>
                      <h2 className="text-base font-semibold">
                        Kristin Watson
                      </h2>
                      <p className="text-[13px] text-[#5a5b61]">
                        @kristinwatson2
                      </p>
                    </div>
                  </div>
                  <div>
                    <Image
                      width={20}
                      height={20}
                      src="/twitter.png"
                      alt="twitter"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-base lg:w-[240px] lg:mt-6">
                    Finally, I’ve found a template that covers all bases for a
                    bootstrapped startup. We were able to launch in days, not
                    months.
                  </p>
                  <button className="text-[#0EA5E9] text-base">#another</button>
                </div>
              </div>
            </div>
          </div>
          <div className={`bg-white rounded-[5px] break-inside-avoid`}>
            <div className="px-6 py-6">
              <div>
                <div className="flex justify-between">
                  <div className="flex gap-[10px]">
                    <Image src="/user5.png" width={45} height={45} alt="user" />
                    <div>
                      <h2 className="text-base font-semibold">Guy Hawkins</h2>
                      <p className="text-[13px] text-[#5a5b61]">@jennywilson</p>
                    </div>
                  </div>
                  <div>
                    <Image
                      width={20}
                      height={20}
                      src="/twitter.png"
                      alt="twitter"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-base lg:w-[240px] lg:mt-6">
                    This is a top quality product. No need to think twice before
                    making it live on web.
                  </p>
                  <button className="text-[#0EA5E9] text-base">
                    #make_it_fast
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={`bg-white rounded-[5px] break-inside-avoid`}>
            <div className="px-6 py-6">
              <div>
                <div className="flex justify-between">
                  <div className="flex gap-[10px]">
                    <Image src="/user6.png" width={45} height={45} alt="user" />
                    <div>
                      <h2 className="text-base font-semibold">
                        Marvin McKinney
                      </h2>
                      <p className="text-[13px] text-[#5a5b61]">@jennywilson</p>
                    </div>
                  </div>
                  <div>
                    <Image
                      width={20}
                      height={20}
                      src="/twitter.png"
                      alt="twitter"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-base lg:w-[240px] lg:mt-6">
                    With Postcrafts, it’s quicker with the customer, the
                    customer is more ensured of getting exactly what they
                    ordered, and I’m all for the efficiency.
                  </p>
                  <button className="text-[#0EA5E9] text-base">
                    #dev #tools
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={`bg-white rounded-[5px] break-inside-avoid`}>
            <div className="px-6 py-6">
              <div>
                <div className="flex justify-between">
                  <div className="flex gap-[10px]">
                    <Image src="/user7.png" width={45} height={45} alt="user" />
                    <div>
                      <h2 className="text-base font-semibold">Annette Black</h2>
                      <p className="text-[13px] text-[#5a5b61]">@jennywilson</p>
                    </div>
                  </div>
                  <div>
                    <Image
                      width={20}
                      height={20}
                      src="/twitter.png"
                      alt="twitter"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-base lg:w-[240px] lg:mt-6">
                    You made it so simple. My new site is so much faster and
                    easier to work with than my old site. I just choose the
                    page, make the change and click save.
                  </p>
                  <button className="text-[#0EA5E9] text-base">#another</button>
                </div>
              </div>
            </div>
          </div>
          <div className={`bg-white rounded-[5px] break-inside-avoid`}>
            <div className="px-6 py-6">
              <div>
                <div className="flex justify-between">
                  <div className="flex gap-[10px]">
                    <Image src="/user8.png" width={45} height={45} alt="user" />
                    <div>
                      <h2 className="text-base font-semibold">Floyd Miles</h2>
                      <p className="text-[13px] text-[#5a5b61]">@jennywilson</p>
                    </div>
                  </div>
                  <div>
                    <Image
                      width={20}
                      height={20}
                      src="/twitter.png"
                      alt="twitter"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-base lg:w-[240px] lg:mt-6">
                    My new site is so much faster and easier to work with than
                    my old site. I just choose the page, make the change and
                    click save.
                  </p>
                  <button className="text-[#0EA5E9] text-base">
                    #postcrafts
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

export default OurCustomer;
