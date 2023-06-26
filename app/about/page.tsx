import BrandDescription from "@/components/About/BrandDescription";
import CareerComponent from "@/components/About/Career";
import Vision from "@/components/About/Vision";
import BannerComponent from "@/components/Common/Banner";
import { Banner } from "@/types/banner";

const AboutPage = () => {
  const bannerProps: Banner = {
    imgBg: "./images/banner/banner_image.svg",
    title: "ABOUT US",
    description: "Our brands: Best pick, Roji Monster Ice-cream, Baitong Hotel and Resort",
    imgUrl: "/images/banner/image_cover.png"
  }
  return (
    <>
      <BannerComponent banner={bannerProps}/>
      <Vision />
      <BrandDescription />
      <CareerComponent />
    </>
  );
};

export default AboutPage;
