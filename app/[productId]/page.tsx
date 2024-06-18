import CtaButton from "@/components/productPage/ctaButton";
import ImageGalery from "@/components/imageGalery/imageGalery";
import React from "react";
import SelectQuantity from "@/components/productPage/selectQuantity";
type Props = {
  params: { productId: string };
};

export default function page({ params }: Props) {
  return (
    <section className="mx-6 mb-10 md:mx-10 lg:10 xl:mx-20 xxl:mx-44 md:p-6">
      <div className="flex flex-col md:flex-row">
        {/* top section */}
        <ImageGalery />
        <div className="flex-1 h-64">
          {/* details sections */}
          <h1 className="text-xl font-bold text-gray-900 lg:text-3xl ">
            {params.productId}
          </h1>
          <div className="flex items-end gap-4 mt-4 ">
            <h1 className="text-3xl font-bold lg:text-4xl">$100</h1>
            <h1 className="text-2xl font-semibold text-red-500 line-through">
              $200
            </h1>
          </div>
          <SelectQuantity />
          <div className="flex gap-4 mt-6 md:mt-10">
            <CtaButton className="flex-1 py-3 text-xl leading-3 text-gray-100 lg:w-44 lg:flex-none bg-primaryColor">
              Buy now!
            </CtaButton>
            <CtaButton className="flex-1 py-3 text-xl leading-3 lg:w-44 lg:flex-none bg-lightBackground">
              Add to cart
            </CtaButton>
          </div>
        </div>
      </div>
      <div className="mt-8 ">
        {/* descrption */}
        <h1 className="text-3xl font-bold">Description:</h1>
        <p className="mt-2 text-lg break-words text-start indent-4 lg:w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Namaaaa
          distinctio saepe architecto obcaecati, cumque fuga. Ab voluptatibus
          sed eaque consectetur quibusdam rem, eligendi nulla officia
          perspiciatis beatae vero vel quam!Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nam distinctio saepe architecto
          obcaecati, cumque fuga. Ab voluptatibus sed eaque consectetur
          quibusdam rem, eligendi nulla officia perspiciatis beatae vero vel
          quam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
          distinctio saepe architecto obcaecati, cumque fuga. Ab voluptatibus
          sed eaque consectetur quibusdam rem, eligendi nulla officia
          perspiciatis beatae vero vel quam!Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nam distinctio saepe architecto
          obcaecati, cumque fuga. Ab voluptatibus sed eaque consectetur
          quibusdam rem, eligendi nulla officia perspiciatis beatae vero vel
          quam!
        </p>
      </div>
    </section>
  );
}
