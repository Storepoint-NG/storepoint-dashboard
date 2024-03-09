import { addComma } from "@/lib";
import { PlusOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function ProductOverview({ total, storeid }) {
  return (
    <div className="flex flex-col sm:flex-row sm: items-center justify-between w-full mt-3 p-3 px-3 gap-3 rounded-md bg-gray-200">
      <div>
        <p>Total Amount</p>
        <p className="text-2xl font-semibold  break-all">
          ₦{addComma(total)}.<span className="text-xl">00</span>
        </p>
      </div>
      <Link
        href={`/store/${storeid}/products/create`}
        className="rounded-full flex items-center justify-center gap-3 w-full sm:w-fit sm:px-4 text-white p-3 px-3 bg-purple-700 font-semibold text-center"
      >
        <PlusOutlined />
        Add Product
      </Link>
    </div>
  );
}
