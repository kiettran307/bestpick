import Image from "next/image";
import { FaWifi } from "react-icons/fa";
import ImagesView from "../Features/ImagesView";
import { ImageViewType } from "@/types/feature";
const imagesViewData: ImageViewType[] = [
  {
    imageUrl: '/images/about/imgdes_1.png',
    width: 280,
    height: 332
  },
  {
    imageUrl: '/images/about/imgdes_2.png',
    width: 280,
    height: 198
  },
  {
    imageUrl: '/images/about/imgdes_3.png',
    width: 280,
    height: 332
  },
  {
    imageUrl: '/images/about/imgdes_4.png',
    width: 280,
    height: 198
  }
]

const BrandDescription = (): JSX.Element => {
  return (
    <div className="relative z-10 overflow-hidden bg-primary-light pb-16 pt-[80px]">
      <div className="container flex flex-col items-center w-full px-8 bg-primary-light gap-14 lg:flex-row md:flex-col lg:justify-start md:justify-center">
        <div className="flex lg:max-w-[570px] flex-col gap-6">
          <div>
            <Image
              src="/images/brands/baitong.png"
              alt="aaa"
              width={140}
              height={140}
            />
          </div>
          <div>
          <div className="text-xl font-bold text-black">
            A few words about Bai Tong Hotel & Resort
          </div>
          <div className="text-2xl font-bold text-black">
            SOCIALISE, STAY & RELAX AT BAITONG HOTEL PHNOM PENH
          </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-md bg-blue">
              <FaWifi className="h-[24px] w-[24px] text-blue-1" />
            </div>
            <p>Free WiFi For Everyone</p>
          </div>
          <p className="text-lg leading-relaxed text-black">Prepare to be inspired. At Baitong hotel, quintessential design elements meet you around each corner and down every corridor. Our unique architecture with lush gardens, minimal ponds, cascading Jacuzzi, striking staircases, glass-bottomed pool and walkway, and other bold features will enhance your stay.</p>
          <div>
            <button className="px-8 py-3 text-base font-bold text-black duration-300 ease-in-out rounded-md bg-primary hover:bg-primary/80">Visit Website</button>
          </div>
        </div>
        <div className="flex w-full lg:w-[592px] gap-8">
          <ImagesView imgViewData={imagesViewData} />
        </div>
      </div>
    </div>
  );
};

export default BrandDescription;
