import Link from "next/link";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-primary-light pb-16 pt-[120px]"
      >
        <div className="container max-w-[1216px] w-full px-8">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-33 flex items-center gap-x-8 lg:flex-row md:flex-col sm:flex-col">
              <div
                className="wow fadeInUp w-1/2 max-w-[800px] lg:max-w-1/3 md:w-full sm:w-full"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-5xl border-b-4 w-fit p-b-1.5 border-yellow-1 font-bold leading-tight text-yellow-1 d sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Best Pick F&B
                </h1>
                <p className="mb-12 text-base font-medium !leading-relaxed text-black  sm:text-lg md:text-xl">
                Best Pick F&B is a multinational food and beverage company that was founded in 2000. The company operates in over many countries and is one of the largest food and beverage companies in the world, with a diverse range of products that includes coffee, bottled water, pet food, snacks, and baby food.
                </p>
                <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://nextjstemplates.com/templates/saas-starter-startup"
                    className="rounded-md bg-primary px-8 py-5 text-base text-black font-bold duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
              <div className="wow fadeInUp w-1/2 lg:max-w-2/3 flex justify-center items-center md:mt-5 sm:mt-5 md:w-full sm:w-full">
                <div className="relative w-[463px] h-[662px] ml-10">
                  <div className="wow fadeInUp absolute top-9 left-10 w-[463px] h-[662px] border bg-primary border-primary rounded-2xl"></div>
                  <div className=" wow fadeInUp w-[463px] h-[662px]"><Image src={"/images/banner/ice-cream.png"} fill alt="img" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
