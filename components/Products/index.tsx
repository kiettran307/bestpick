import { SingleProduct } from "./SingleProduct";
import ProductData from "./data";

export function Products(): JSX.Element {
  return (
    <section id="products" className="py-16 px-24 md:py-20 lg:py-28">
      <div className="container flex justify-center">
        <div className="grid w-[1216] grid-cols-3 gap-8">
          {
            ProductData.map((item, i): JSX.Element => {
              return (
                <SingleProduct product={item} key={i}/>
              )
            })
          }
        </div>
      </div>
    </section>
  );
}