"use client";
import { useState } from "react";
import Details from "../../components/create-store/Details";
import toast from "react-hot-toast";
import Template from "../../components/create-store/Template";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { generateRandomString } from "@/lib";

export default function CreateStore() {
  const [form, setForm] = useState({
    storeName: "",
    phoneNumber: "",
    location: "",
  });

  const [inputs, setInputs] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(false);
  const router = useRouter();
  const supabase = createClientComponentClient();

  const getSubdomain = (storeId, storeName) => {
    return (storeName.split(" ")[0] + "-" + storeId).toLowerCase();
  };

  const createStore = async (temp) => {
    const storeId = generateRandomString(6);

    setDisableSubmit(true);

    const storeDomain = getSubdomain(storeId, form.storeName);

    const toastId = toast.loading("Creating Store");

    const { error } = await supabase.from("stores").insert({
      store_id: storeDomain,
      store_name: form.storeName,
      location: form.location,
      contact: form.phoneNumber,
      template: "default",
    });
    toast.remove(toastId);

    if (error) {
      toast.error("Unable to create store. Try again");
      return;
    }

    // Take to dashboard
    router.push(`/store/${storeDomain}`);
  };

  // ensure all store details is filled
  const confirmInputs = () => {
    console.log(form);
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
        <Template createStore={createStore} disableSubmit={disableSubmit} />
      )}
    </>
  );
}
