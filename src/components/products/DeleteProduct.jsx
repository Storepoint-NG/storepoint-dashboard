"use client";
import supabase from "@/supabase";
import { RightOutlined } from "@ant-design/icons";
import { TrashIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function DeleteProduct({ productid }) {
  const router = useRouter();
  const { storeid } = useParams();

  async function removeProduct() {
    const userConfirmed = window.confirm("Are you sure you want to remove?");
    if (!userConfirmed) return;

    const { error } = await supabase
      .from("products")
      .delete()
      .eq("product_id", productid);

    if (error) {
      toast.error("Unable to complete action");
      return;
    }
    toast.success("Product deleted");
    router.push(`/store/${storeid}/products`);
  }

  return (
    <div
      className="flex items-center justify-between border-2 bg-red-50 p-2 text-red-600 mt-10"
      onClick={() => removeProduct()}
    >
      <div className="flex gap-3 items-center">
        <TrashIcon className="text-xl" />
        <div>
          <h4 className="font-semibold">Remove Proudct</h4>
          <p className="text-sm">Temporarily suspend product from store</p>
        </div>
      </div>
      <RightOutlined />
    </div>
  );
}
