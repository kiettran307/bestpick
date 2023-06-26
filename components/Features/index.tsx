import SectionTitle from "../Common/SectionTitle";
import ImagesView from "./ImagesView";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { ImageViewType } from '@/types/feature'


const imagesViewData: ImageViewType[] = [
  {
    imageUrl: '/images/features/feature_1.png',
    width: 280,
    height: 332
  },
  {
    imageUrl: '/images/features/feature_2.png',
    width: 280,
    height: 198
  },
  {
    imageUrl: '/images/features/feature_3.png',
    width: 280,
    height: 332
  },
  {
    imageUrl: '/images/features/feature_4.png',
    width: 280,
    height: 198
  }
]
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
              <ImagesView imgViewData={imagesViewData} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
