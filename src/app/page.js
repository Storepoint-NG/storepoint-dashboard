// import { redirect } from "next/navigation";

import { PlusOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function Home() {
  // redirect("/dashboard", "replace");
  return (
    <div className="py-7 pt-12 px-5">
      <div className="flex justify-between w-full">
        <h1 className="text-xl font-black text-black/80">Storepoint.</h1>
        <div>
          <p className="p-2 rounded-md bg-green-500 text-white">HF</p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <h1>Welcome back, Haruna</h1>
        <buttton className="flex gap-2">
          <PlusOutlined />
          <p>create store</p>
        </buttton>
      </div>
    </div>
  );
}
