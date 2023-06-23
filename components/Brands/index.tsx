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
          <div className="flex h-[448px] w-full items-center justify-center bg-primary-light flex-col">
            <div className="mb-16 text-4xl text-black font-bold">Features On</div>
            <div
              className="wow fadeInUp flex w-[1216px] items-center justify-center"
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
    <div className="mx-3 flex w-full items-center justify-center h-[140px]">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative w-full"
      >
        <Image src={image} alt={name} width={width} height={height} />
      </a>
    </div>
  );
};
