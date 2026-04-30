import { ProductCard } from "@/sections/ProductsSection/components/ProductCard";

export const ProductsSection = () => {
  return (
    <section className="bg-gray-100 box-border caret-transparent outline-[3px] text-center w-full px-5 py-[22.4px] md:py-10">
      <div className="text-gray-700 box-border caret-transparent outline-[3px] mb-10">
        <h4 className="text-2xl box-border caret-transparent leading-9 outline-[3px]">
          <strong className="font-bold box-border caret-transparent outline-[3px]">
            Produktet
          </strong>
        </h4>
        <p className="text-base box-border caret-transparent leading-6 outline-[3px]">
          <br className="box-border caret-transparent outline-[3px]" />
        </p>
      </div>
      <div className="box-border caret-transparent gap-x-[normal] block grid-cols-none justify-center max-w-[960px] outline-[3px] w-full mx-auto md:gap-x-6 md:grid md:grid-cols-[repeat(1,calc(33.3333%_-_8px))]">
        <ProductCard />
      </div>
      <div className="box-border caret-transparent outline-[3px] w-full mt-4">
        <a
          href="/shop"
          className="text-amber-200 box-border caret-transparent outline-[3px]"
        >
          <button className="text-white text-base font-bold bg-amber-200 caret-transparent leading-6 min-w-[250px] outline-[3px] border px-[18px] py-[13px] border-transparent">
            View All Products
          </button>
        </a>
      </div>
    </section>
  );
};
