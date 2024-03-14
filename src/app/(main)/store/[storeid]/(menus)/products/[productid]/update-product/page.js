"use client";
import Input from "@/components/products/Input";
import PictureInput from "@/components/products/PictureInput";
import { base_inputs, details_inputs } from "@/constant";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const UpdateProduct = () => {
  const { productid, storeid } = useParams();
  const [images, setImages] = useState([]);
  const supabase = createClientComponentClient();
  const router = useRouter();

  const styles = {
    title: "text-[1.2rem] font-semibold mb-2",
  };
  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
    quantity: "",
  });

  // fetch product detials from supabase
  const getProductDetails = async (productid) => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("product_id", productid)
      .single();

    return data;
  };

  useEffect(() => {
    if (productid) {
      getProductDetails(productid).then((res) => {
        if (!res) return;
        // pre-fill form
        setForm({
          title: res.title,
          category: res.category,
          description: res.description,
          price: res.price,
          quantity: res.quantity,
        });
        // fill in images
        setImages(res?.images);
      });
    }
  }, [productid]);

  const isValidPrice = (inputValue) => {
    const regex = /^[0-9.]*$/;
    if (!regex.test(inputValue)) return false;
    return true;
  };

  const handleChange = (e) => {
    if (e.target.name === "price") {
      if (!isValidPrice(e.target.value)) return;
    }

    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // ensure all fileds are not empty
    function nonEmpty(obj) {
      return Object.values(obj).every((value) => value !== "");
    }
    if (!nonEmpty(form) || images.length == 0 || !storeid) {
      toast.error("Ensure All Inputs are filled");
      return;
    }

    const toastId = toast.loading("Updating Product");

    // update in supabase
    const { error } = await supabase
      .from("products")
      .update({
        title: form.title,
        description: form.description,
        category: form.category,
        price: form.price,
        quantity: form.quantity,
        images: images,
      })
      .eq("product_id", productid);
    toast.remove(toastId);

    if (error) {
      toast.error("Could not product. Try again");
      console.log("error", error);
      return;
    }

    // successful
    toast.success("Product updated successfully 🎉");
    // send to products page
    router.push(`/store/${storeid}/products`);
    router.refresh();
  };

  return (
    <main className="p-2 px-3 flex flex-col">
      <h1 className="text-3xl font-mono font-semibold">Update Product</h1>

      <div className="mt-4 flex flex-col gap-y-4">
        {/* base info */}
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
            />
          ))}
        </div>
      </div>

      {/* submit buttons */}
      <div
        className="mt-5 mb-20 bg-black/80 hover:bg-black p-4 font-bold text-white cursor-pointer rounded-md ml-auto mr-2 w-fit px-7"
        onClick={handleSubmit}
      >
        Update product
      </div>
    </main>
  );
};

export default UpdateProduct;
