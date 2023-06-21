import React from "react";
import SectionTitle from "../Common/SectionTitle";

type Props = {};
interface UsefulFeatureType {
  id: string | number;
  title: string;
  description: string;
}
const usefulTeatures: UsefulFeatureType[] = [
  {
    id: 1,
    title: "Hương vị và chất",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos maxime eos quas similique assumenda voluptatem nobis officia eius dicta delectus.",
  },
  {
    id: 2,
    title: "Thành phần và chức năng",
    description:
      "Lorem ipsum dolor sit amet consectetur,  maxime eos quas similique assumenda voluptatem nobis officia eius dicta delectus.",
  },
  {
    id: 3,
    title: "Dinh dưỡng ",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos maxime eos quas similiqueobis officia eius dicta delectus.",
  },
];
export function UsefulFeatures({}: Props) {
  return (
    <section className="bg-primary/[.03] py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle title="A lot of useful features" paragraph="" center />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {usefulTeatures.map((item, index) => (
            <FeatureItem feature={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ feature }: { feature: UsefulFeatureType }) {
  return (
    <div className="text-center">
      <div className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
        {feature.title}
      </div>
      <p className=" text-base font-medium leading-relaxed text-body-color">
        {feature.description}
      </p>
    </div>
  );
}
