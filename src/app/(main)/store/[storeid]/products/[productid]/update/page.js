"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import PictureInput from "@/components/products/PictureInput";
import { base_inputs, details_inputs } from "@/constant";
import Input from "@/components/products/Input";
import toast from "react-hot-toast";
import { getProductDetails } from "@/app/api/product";

const UpdateProduct = () => {
  const { productid } = useParams();
  const [data, setData] = useState({});
  const supabase = createClientComponentClient();

  const router = useRouter();
  const styles = {
    title: "text-[1.2rem] font-semibold mb-2",
  };
  const { storeid } = useParams();

  const [form, setForm] = useState({
    title: "",
    category: "",
    desc: "",
    price: "",
    quantity: "",
  });

  const [images, setImages] = useState(data?.images || []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSummit = async () => {
    // ensure all fileds are not empty

    console.log(form);
    function nonEmpty(obj) {
      return Object.values(obj).every((value) => value !== "");
    }
    if (!nonEmpty(form) || images.length == 0 || !storeid) {
      // toast.error("Ensure All Inputs are filled");
      return;
    }
    const toastId = toast.loading("Updating Product");
    // Send to supbase
    // const { error } = await supabase.from("products").insert({
    //   title: form.title,
    //   description: form.desc,
    //   category: form.category,
    //   price: form.price,
    //   quantity: form.quantity,
    //   images: images,
    //   store_id: storeid,
    // });
    // toast.remove(toastId);

    // if (error) {
    //   toast.error("Cannot create product. Try again");
    //   console.log("error", error);
    //   return;
    // }

    // successful
    // toast.success("Product created successfully 🎉");
    // send to product page
    // router.push(`/store/${storeid}/products`);
  };

  useEffect(() => {
    if (productid) {
      getProductDetails(productid).then((res) => {
        setData(res);
      });
    }
  }, [productid, data]);

  return (
    <main className="p-2 px-3 flex flex-col">
      <h1 className="text-3xl font-mono font-semibold">Update Product</h1>

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
              value={data && data[base_input.name]}
            />
          ))}
        </div>

        {/* pictures */}
        <div>
          <h3 className={styles.title}>Pictures</h3>
          <PictureInput
            supabase={supabase}
            images={images}
            setImages={setImages}
          />
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
              value={data && data[detail_input.name]}
            />
          ))}
        </div>
      </div>
      {/* submit buttons */}
      <div
        className="mt-5 mb-20 bg-black/80 hover:bg-black p-4 font-bold text-white cursor-pointer rounded-md ml-auto mr-2 w-fit px-7"
        onClick={handleSummit}
      >
        Update product
      </div>
    </main>
  );
};

export default UpdateProduct;
