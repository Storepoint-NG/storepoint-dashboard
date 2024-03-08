import Link from "next/link";
import React from "react";
import ProductItems from "../products/ProductItems";

const DashboardProducts = ({ storeid, data }) => {
  return (
    <div className=" h-full mt-5 p-1">
      <div className="flex items-center justify-between text-xl">
        <p className="font-semibold">Products</p>
        <Link href={`/store/${storeid}/products`} className="text-sm pl-1">
          See All
        </Link>
      </div>
      {/* items */}
      <div className="flex flex-col gap-3 rounded-md mt-3">
        {data.products.length > 0 ? (
          data.products
            .slice(0, 5)
            .map((product) => (
              <ProductItems key={product.product_id} {...product} />
            ))
        ) : (
          <div className="flex items-center flex-col gap-3">
            <p>You have not added any product...</p>
            <Link
              href={`/store/${storeid}/products/create`}
              className="border border-purple-500 p-2 rounded-md "
            >
              Add a Product
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardProducts;
