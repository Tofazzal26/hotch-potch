import Image from "next/image";

const Brand: React.FC = () => {
  return (
    <div className=" text-white border-t-[1px] border-gray-800 ">
      <div className="lg:mt-[100px] mt-4">
        <div className="container mx-auto">
          <div>
            <h2 className=" text-base lg:text-[24px] font-medium text-center lg:mb-[80px]">
              Trusted by nearly 5000+ paying customers
            </h2>
            <div className="space-y-2 lg:space-y-[40px]">
              <div className="flex justify-center items-center lg:flex-row flex-wrap gap-4 lg:gap-[70px]">
                <Image
                  src="/waverio.png"
                  alt="brand"
                  width={120}
                  height={120}
                />
                <Image
                  src="/squarestone.png"
                  alt="brand"
                  width={120}
                  height={120}
                />
                <Image
                  src="/martino.png"
                  alt="brand"
                  width={120}
                  height={120}
                />
                <Image
                  src="/virogan.png"
                  alt="brand"
                  width={120}
                  height={120}
                />
              </div>
              <div className="flex justify-center items-center lg:flex-row flex-wrap gap-4 lg:gap-[70px]">
                <Image src="/vertex.png" alt="brand" width={120} height={120} />
                <Image src="/aromix.png" alt="brand" width={120} height={120} />
                <Image src="/fireli.png" alt="brand" width={120} height={120} />
                <Image
                  src="/natroma.png"
                  alt="brand"
                  width={120}
                  height={120}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
