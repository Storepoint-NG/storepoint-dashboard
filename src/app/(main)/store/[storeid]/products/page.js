import ProductOverview from "@/components/products/ProductOverview";
import ProductItems from "@/components/products/ProductItems";

export default function Products() {
  return (
    <main className="p-2">
      <h1 className="text-3xl font-mono font-semibold">Products</h1>
      {/* overview */}
      <ProductOverview />
      {/* products */}
      <div className=" h-full mt-5 p-1">
        {/* title */}
        <div className="flex items-center justify-between text-xl">
          <p className="font-semibold">No of Items: 300</p>
        </div>

        {/* items */}
        <div className="flex flex-col gap-3 rounded-md mt-3">
          {[1, 2].map((num) => (
            <ProductItems key={num} />
          ))}
        </div>
      </div>
    </main>
  );
}
