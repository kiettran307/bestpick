import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import Slider from "react-slick";

const SubFeatures = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <section
      id="subFeature"
      className="z-10 flex justify-center overflow-hidden bg-primary/[.03]"
    >
      <div className="container">
        <div className="w-1/3">
          <SectionTitle
            title="Crafted for Startup, SaaS and Business Sites."
            paragraph="The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables."
            mb="44px"
          />
        </div>
        <div className="w-2/3">
        <Slider>
          
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SubFeatures;
