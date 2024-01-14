import { PlusOutlined } from "@ant-design/icons";

export default function ProductOverview() {
  return (
    <div className="flex flex-col justify-between w-full mt-3 p-3 px-3 gap-3 rounded-md bg-gray-200">
      <div>
        <p>Total Amount</p>
        <p className="text-2xl font-semibold  break-all">
          ₦20,000.<span className="text-xl">00</span>
        </p>
      </div>
      <div className="rounded-full flex items-center justify-center gap-3 w-full text-white p-3 px-3 bg-purple-700 font-semibold text-center">
        <PlusOutlined />
        Add Product
      </div>
    </div>
  );
}
