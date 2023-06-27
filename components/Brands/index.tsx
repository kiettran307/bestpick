import { Brand } from "@/types/brand";
import Image from "next/image";

type NewBrand = Brand & {
  width: number;
  height: number;
}

const brandsData: NewBrand[] = [
  {
    id: 1,
    name: "baitong",
    href: "https://www.baitonghotel.asia",
    image: "/images/brands/baitong.png",
    width: 141,
    height: 141,
  },
  {
    id: 2,
    name: "sookdal",
    href: "https://sookdal.com",
    image: "/images/brands/sookdal.png",
    width: 141,
    height: 141,
  },
  {
    id: 3,
    name: "good & food",
    href: "/",
    image: "/images/brands/goodfood.png",
    width: 200,
    height: 100,
  },
  {
    id: 4,
    name: "trip advisor",
    href: "/",
    image: "/images/brands/tripadvisor.png",
    width: 200,
    height: 100,
  },
];

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="">
        <div className="flex flex-wrap">
          <div className="flex w-full items-center justify-center bg-primary-light flex-col py-10">
            <div className="mb-16 text-4xl text-black font-bold">Features On</div>
            <div
              className="wow fadeInUp grid w-full max-w-[1216px] items-center justify-center gap-10 lg:flex md:grid-cols-2 sm:grid-cols-2 grid-cols-1"
              data-wow-delay=".1s
              "
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: NewBrand }) => {
  const { href, image, name, width, height } = brand;

  return (
    <div className="mx-3 flex w-full items-center justify-center h-[140px] lg:mx-5 md:mx-auto lg:w-full sm:mx-auto md:w-fit sm:w-fit">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative w-full flex justify-center"
      >
        <Image src={image} alt={name} width={width} height={height} />
      </a>
    </div>
  );
};
