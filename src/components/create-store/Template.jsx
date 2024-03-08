import Link from "next/link";
import { sal_template } from "../../../public/assets";
import Image from "next/image";

export default function Template({ createStore, disableSubmit }) {
  return (
    <div className="flex flex-col items-center gap-5 py-10 px-5 text-center bg-gray-100">
      <p className="opacity-50">Step 2 of 2</p>
      <h1 className="text-xl">Pick a template you love</h1>
      <p className="font-semibold">
        You can switch at any time without losing any content.
      </p>

      <div className="mt-5 space-y-5">
        {["default"].map((temp) => (
          <div key={temp} className="border bg-white p-3 relative group">
            <div className="absolute top-0 left-0 bg-black/20 z-10 h-full w-full hidden group-hover:flex flex-col items-center gap-2 justify-center">
              {/* preview */}
              <Link
                href="https://preview.storepoint.online"
                target="_blank"
                className="p-3 px-5 font-semibold bg-purple-600 rounded-md text-white"
              >
                Preview
              </Link>
              {/* submit */}
              <button
                disable={disableSubmit.toString()}
                className="p-3 px-5 font-semibold bg-black rounded-md text-white"
                onClick={() => createStore(temp)}
              >
                Choose
              </button>
            </div>
            <Image src={sal_template} alt="temp" />
          </div>
        ))}
      </div>
    </div>
  );
}
