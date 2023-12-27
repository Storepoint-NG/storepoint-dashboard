"use client";
import { useState } from "react";
import Details from "./Details";
import toast from "react-hot-toast";
import Template from "./Template";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import random from "random-string-generator";
import { useRouter } from "next/navigation";

export default function CreateStore() {
  const [form, setForm] = useState({
    storeName: "",
    phoneNumber: "",
    country: "",
    currency: "",
  });
  const [inputs, setInputs] = useState(false);
  const router = useRouter();
  const supabase = createClientComponentClient();

  const createStore = async (temp) => {
    const storeId = random(6).toLowerCase();

    const toastId = toast.loading("Creating Store");

    const { error } = await supabase.from("stores").insert({
      store_id: storeId,
      store_name: form.storeName,
      country: form.country,
      currency: form.currency,
      contact: form.phoneNumber,
      template: "default",
    });

    toast.remove(toastId);

    if (error) {
      toast.error("Unable to create store. Try again");
      console.log("error", error);
      return;
    }

    // Take to dashboard
    router.push(`/store/${storeId}`);
  };

  const confirmInputs = () => {
    // const done = true;
    for (let val in form) {
      if (form[val] === "") {
        toast.error("Inputs not complete");
        return;
      }
    }
    setInputs(true);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      {!inputs ? (
        <Details
          form={form}
          handleChange={handleChange}
          confirmInputs={confirmInputs}
        />
      ) : (
        <Template createStore={createStore} />
      )}
    </>
  );
}
