import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container lg:w-full sm:w-full md:w-full">
          <SectionTitle
            title="Our business"
            paragraph="Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit"
            center
          />

          <div className="flex w-full items-center justify-center gap-8 lg:flex-row md:flex-col sm:flex-col">
            <div>
              {featuresData.map((feature) => (
                <SingleFeature key={feature.id} feature={feature} />
              ))}
            </div>
            <div className="flex w-[592px] gap-8">
              <div className="flex flex-col gap-8">
                <Image
                  src="/images/features/feature_1.png"
                  alt="png"
                  width={280}
                  height={332}
                />
                <Image
                  src="/images/features/feature_2.png"
                  alt="png"
                  width={280}
                  height={198}
                />
              </div>
              <div className="flex flex-col gap-8">
                <Image
                  src="/images/features/feature_3.png"
                  alt="png"
                  width={280}
                  height={332}
                />
                <Image
                  src="/images/features/feature_4.png"
                  alt="png"
                  width={280}
                  height={198}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
