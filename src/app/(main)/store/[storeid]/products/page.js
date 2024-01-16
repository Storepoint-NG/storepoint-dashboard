import ProductOverview from "@/components/products/ProductOverview";
import ProductItems from "@/components/products/ProductItems";
import supabase from "@/supabase";

export const revalidate = 4;

export default async function Products({ params }) {
  const { storeid } = params;
  if (!storeid) return;
  const { data, error } = await supabase
    .from("products")
    .select("product_id, title, quantity,images,price")
    .eq("store_id", storeid);

  if (!data) {
    console.log(error);
    return;
  }

  function getTotal(data) {
    let total = 0;
    data.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total;
  }
  return (
    <main className="p-2">
      <h1 className="text-3xl font-mono font-semibold">Products</h1>
      {/* overview */}
      <ProductOverview total={getTotal(data)} storeid={storeid} />
      {/* products */}
      <div className=" h-full mt-5 p-1">
        {/* title */}
        <div className="flex items-center justify-between text-xl">
          <p className="font-semibold">No of Items: {data.length}</p>
        </div>

        {/* items */}
        <div className="flex flex-col gap-3 rounded-md mt-3">
          {data.map((product) => (
            <ProductItems key={product.product_id} {...product} />
          ))}
        </div>
      </div>
    </main>
  );
}
