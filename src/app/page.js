// import { redirect } from "next/navigation";

import { PlusOutlined, RightOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function Home() {
  // redirect("/dashboard", "replace");
  return (
    <div className="py-7 pt-12 px-5">
      <div className="flex justify-between w-full">
        <h1 className="text-xl font-black text-black/80">Storepoint.</h1>
        <div>
          <p className="p-2 rounded-md bg-pink-500 text-white">HF</p>
        </div>
      </div>

      {/* main */}
      <div className="flex flex-col gap-3 mt-5">
        <h1 className="font-semibold text-[1.4rem]">Welcome back, Haruna</h1>
        <Link
          href="/create-store"
          className="flex gap-2 items-center justify-center font-semibold p-2 w-full rounded-md bg-black/80 text-sm text-white shadow-black"
        >
          <PlusOutlined />
          <p>Create store</p>
        </Link>
      </div>

      {/* stores */}
      <div className="flex flex-col w-full  gap-3 mt-7 ">
        {[0, 1].map((num) => (
          <div
            key={num}
            className="flex items-center justify-between group hover:bg-black/5 rounded-md py-2 px-2"
          >
            <div className="flex gap-3">
              <p className="p-2 rounded-md bg-green-500 text-white">MS</p>
              <div className="text-sm">
                <p className="font-semibold">Iya Moria</p>
                <Link href="/">iya-moria.onstp.com</Link>
              </div>
            </div>
            <RightOutlined className="mr-2 hidden group-hover:flex" />
          </div>
        ))}
      </div>
    </div>
  );
}
