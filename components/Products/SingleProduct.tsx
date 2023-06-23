import { Product } from "@/types/product";
import Image from "next/image";

export function SingleProduct({ product }: { product: Product }): JSX.Element {
  return (
    <div className="flex w-[384px] flex-col justify-center">
      <div>
        <Image src={product.image} alt="aaa" width={384} height={267} />
      </div>
      <div className="flex flex-col pt-6">
        <div className="flex w-[352px] px-4 text-2xl text-black">
          {product.title}
        </div>
        <div className="flex w-[352px] px-4 text-lg text-black">
          {product.description}
        </div>
        <div className="mt-3.5 flex px-4 text-4xl font-bold">
          {product.price}$
        </div>
      </div>
    </div>
  );
}
