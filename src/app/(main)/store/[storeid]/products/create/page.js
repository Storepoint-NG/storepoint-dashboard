"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useUser } from "@supabase/auth-helpers-react";
import PictureInput from "@/components/products/PictureInput";
import { base_inputs, details_inputs } from "@/constant";
import Input from "@/components/products/Input";

export default function AddProduct() {
  const supabase = createClientComponentClient();
  const user = useUser();
  const styles = {
    title: "text-[1.2rem] font-semibold mb-2",
  };
  const { storeid } = useParams();

  const [form, setForm] = useState({
    title: "",
    category: "",
    desc: "",
    pictures: [],
    price: 0,
    quantity: 0,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSummit = (e) => {
    console.log(form);
    return;
  };

  return (
    <main className="p-2 px-3">
      <h1 className="text-3xl font-mono font-semibold">Add New Product</h1>

      <div className="mt-4 flex flex-col gap-y-4">
        {/* base */}
        <div className="flex flex-col gap-2">
          <h3 className={styles.title}>Base Information</h3>
          {base_inputs.map((base_input) => (
            <Input
              key={base_input.label}
              {...base_input}
              form={form}
              handleChange={handleChange}
            />
          ))}
        </div>

        {/* pictures */}
        <div>
          <h3 className={styles.title}>Pictures</h3>
          <PictureInput supabase={supabase} user={user} />
        </div>

        {/* details */}
        <div className="flex flex-col gap-2">
          <h3 className={styles.title}>Details</h3>
          {details_inputs.map((detail_input) => (
            <Input
              key={detail_input.label}
              {...detail_input}
              form={form}
              handleChange={handleChange}
            />
          ))}
        </div>
      </div>
      {/* submit buttons */}
      <button
        className="mt-4 mb-5 bg-black/80 hover:bg-black p-4 font-bold text-white  rounded-md"
        onClick={handleSummit}
      >
        Create Product
      </button>
    </main>
  );
}
