import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section
      id="contact"
      className="overflow-hidden bg-primary/[3%] py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="flex flex-col justify-center w-full p-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-4 text-3xl font-bold !leading-tight lg:w-2/3 text-black dark:text-white sm:text-4xl md:text-[56px]">We would love to hear from you</div>
            <p className="lg:w-3/4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              tenetur hic eveniet repellendus nostrum minus id obcaecati
              voluptatem soluta corrupti?
            </p>
          </div>

          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
