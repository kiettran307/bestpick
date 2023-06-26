import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const Vision = (): JSX.Element => {
  return (
    <div className="py-16 md:py-20 lg:py-28">
      <div className="container sm:w-full md:w-full lg:w-full">
        <SectionTitle
          title="Our vision"
          paragraph="Currently our company is expanding into the Vietnamese market and is in the process of completing legal procedures"
          center
        />
        <div className="flex items-center justify-between gap-14 lg:flex-row md:flex-col sm:flex-col">
          <div className="flex gap-8 max-w-[592px]">
            <Image
              src="/images/banner/vision_1.png"
              alt="aaa"
              style={{ width: "100%", height: "auto" }}
              width={0}
              height={0}
              sizes="100vw"
            />
            <Image
              src="/images/banner/vision_2.png"
              alt="aaa"
              style={{ width: "100%", height: "auto" }}
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
          <div className="flex flex-col justify-center max-w-[568px] gap-2">
            <div className="text-xl font-bold text-black">“Our delicious taste becomes the taste of the world” - BESTPICK F&B a journey to immerse yourself in global culture and flavors</div>
            <div className="text-lg font-medium leading-relaxed text-black">We are a passionate food company, started in Southeast Asia and aspire to spread every taste in the world. Our vision is to make a global impact, enriching people's lives. To do that, we always try our best to bring a mix of global culture and taste.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision