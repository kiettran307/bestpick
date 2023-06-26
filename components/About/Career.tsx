import { FaDice, FaLaptopCode } from "react-icons/fa";
import SectionTitle from "../Common/SectionTitle";
import { RxMobile } from "react-icons/rx";
import { PiPenNibBold } from "react-icons/pi";
import Image from "next/image";

type Job = {
  icon: JSX.Element;
  name: string;
};

type Author = {
  img: string;
  name: string;
  position: string;
};

const Jobs: Job[] = [
  {
    icon: <FaLaptopCode className="h-[24px] w-[24px] text-blue-1" />,
    name: "Fullstack developer",
  },
  {
    icon: <FaDice className="h-[24px] w-[24px] text-blue-1" />,
    name: "Game developer",
  },
  {
    icon: <RxMobile className="h-[24px] w-[24px] text-blue-1" />,
    name: "Mobile app developer",
  },
  {
    icon: <PiPenNibBold className="h-[24px] w-[24px] text-blue-1" />,
    name: "UI/UX Designer",
  },
];

const Authors: Author[] = [
  {
    name: "Ryoo",
    img: "/images/about/auth1.png",
    position: "CEO",
  },
  {
    name: "Lâm Anh Tuấn",
    img: "/images/about/auth2.png",
    position: "CEO",
  },
  {
    name: "Vân Nguyễn",
    img: "/images/about/auth3.png",
    position: "CFO",
  },
  {
    name: "Quang",
    img: "/images/about/auth4.png",
    position: "Marketing Manager",
  },
];

const CareerComponent = (): JSX.Element => {
  return (
    <div className="py-16 md:py-20 lg:py-28">
      <div className="container sm:w-full md:w-full lg:w-full">
        <SectionTitle
          title="Careers"
          paragraph="Be a Part of Our Company"
          center
        />
        <div className="flex gap-20 rounded-xl bg-primary-light justify-center px-16 py-20 lg:flex-row md:flex-col sm:flex-col md:items-center sm:items-center">
          <div className="flex flex-col gap-6">
            {Jobs.map((item, i) => {
              return (
                <div className="flex items-center gap-3" key={i}>
                  <div className="flex h-[40px] w-[40px] items-center justify-center rounded-md bg-blue">
                    {item.icon}
                  </div>{" "}
                  {item.name}
                </div>
              );
            })}
            <div>
              <button className="rounded-md bg-primary px-8 py-3 text-base font-bold text-black duration-300 ease-in-out hover:bg-primary/80">
                Apply now
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {Authors.map((item, i) => {
              return (
                <div className="flex flex-col items-center" key={i}>
                  <div>
                    <Image
                      src={item.img}
                      alt="author"
                      style={{ width: "100%", height: "auto" }}
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                  <div className="text-lg text-blue-1">{item.name}</div>
                  <div className="text-xl">{item.position}</div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/about/career_img.png"
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
  );
};

export default CareerComponent;
