import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const supabase = createClientComponentClient();

export const getProductDetails = async (productid) => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("product_id", productid)
    .single();

  return data;
};
