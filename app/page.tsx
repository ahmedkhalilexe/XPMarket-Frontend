import HeroCarousel from "@/components/heroCarousel/heroCarousel";
import ProductCart from "@/components/productCart/productCart";
import { CircleChevronRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <section>
        <div className="h-screen mx-12 mt-16 xl:mx-44">
          <h2 className="text-4xl font-bold text-center">On Sale!</h2>
          <div className="grid items-center grid-cols-1 gap-8 mt-5 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-5">
            {/* {products.map((product) => (
              <ProductCart key={product.id} product={product} />
            ))} */}
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <div className="flex flex-col items-center justify-center cursor-pointer">
              <h1 className="text-xl font-bold">More Like This</h1>
              <CircleChevronRight size={64} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
