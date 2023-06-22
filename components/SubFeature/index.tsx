import SectionTitle from "../Common/SectionTitle";
import SwiperComponent from "../Common/Swiper";
// Import Swiper React components
import { DataProps } from "./dataIndex";
const SubFeatures = () => {
  return (
    <section
      id="subFeature"
      className="z-10 flex justify-center overflow-hidden bg-primary/[.03] xs:flex-col sm:py-5 md:py-5 lg:py-10"
    >
      <div className="container flex flex-row justify-center xs:flex-col sm:flex-col md:flex-col lg:flex-row">
        <div className="w-1/3 lg:w-1/3 xs:w-full sm:w-full md:w-full sm:w-full lg:w-1/3 justify-center items-center flex flex-col">
          <SectionTitle
            title="Hương vị và chất lượng"
            paragraph="The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables."
            mb="44px"
            center
          />
          <button className="rounded-md bg-transparent py-2 px-8 sm:mb-5 md:mb-5 border-[1px] border-primary">SEE MORE</button>
        </div>
        <div className="w-2/3 xs:w-full lg:w-2/3 sm:w-full md:w-full sm:w-full lg:w-2/3">
          <SwiperComponent dataSwipes={DataProps.dataSwipes} config={DataProps.config}/>
        </div>
      </div>
    </section>
  );
};

export default SubFeatures;
