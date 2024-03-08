import { ArrowRightIcon } from "@radix-ui/react-icons";
import { create_store_inputs } from "@/constant";

export default function Details({ form, handleChange, confirmInputs }) {
  return (
    <div className="px-3 h-screen flex items-center justify-center">
      <div className="flex flex-col w-full border shadow items-center p-2 py-8">
        <h1 className="text-xl font-semibold">Enter the store details</h1>

        <div className="mt-5 w-full flex flex-col gap-3">
          {create_store_inputs.map(({ name, placeholder, label }) => (
            <div key={name} className="flex flex-col gap-2 w-full">
              <label htmlFor="">{label}</label>
              <input
                type="text"
                placeholder={placeholder}
                value={form[name]}
                name={name}
                onChange={handleChange}
                className="w-full outline-none p-2 border  rounded-md"
              />
            </div>
          ))}
        </div>

        <button
          onClick={confirmInputs}
          className="flex items-center font-semibold gap-2 p-3 px-7 bg-purple-800 text-white rounded-md mt-7"
        >
          <p>Choose Template</p>
          <ArrowRightIcon style={{ fontWeight: "bold" }} />
        </button>
      </div>
    </div>
  );
}
