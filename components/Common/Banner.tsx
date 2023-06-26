import { Banner } from "@/types/banner";
import Image from "next/image";

const BannerComponent = ({ banner }: { banner: Banner }) => {
  return (
    <div className="relative z-10 overflow-hidden bg-primary-light pb-16 pt-[120px]">
      <div className="container w-full max-w-[1216px] bg-primary-light px-8 lg:flex-row md:flex-col sm:flex-col">
        <div className="-mx-4 flex flex-wrap">
          <div className="px-33 flex w-full items-center gap-x-8 sm:flex-col md:flex-col lg:flex-row">
            <div
              className="wow fadeInUp flex h-[385px] max-w-[728px] flex-col justify-center sm:w-full md:w-full"
              data-wow-delay=".2s"
              style={{
                backgroundImage: `url(${banner.imgBg})`,
                backgroundSize: "cover",
              }}
            >
              <h1 className="p-b-1.5 d mb-5 w-fit text-5xl font-bold leading-tight text-yellow-1 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                {banner.title}
              </h1>
              <p className="mb-12 text-base font-medium !leading-relaxed text-black  sm:text-lg md:text-xl">
                {banner.description}
              </p>
            </div>
            <div className="wow fadeInUp flex w-1/2 items-center justify-center sm:mt-5 sm:w-full md:mt-5 md:w-full lg:w-2/3">
              <div className="flex items-center justify-center">
                <Image
                  src={banner.imgUrl}
                  alt="aaa"
                  style={{ width: "100%", height: "auto" }}
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
