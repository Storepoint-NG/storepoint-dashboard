import Dashboard from "@/components/Dashboard";
import supabase from "@/supabase";

export const revalidate = 300;

export default async function Shop({ params }) {
  const { storeid } = params;
  if (!storeid) return;

  const { data, error } = await supabase
    .from("stores")
    .select(
      "products (product_id, title, quantity,images,price),orders (delivered, amount),sales (amount)"
    )
    .eq("store_id", storeid)
    .single();

  // TODO remove logs
  // --> Sales = cal Balance/ orders/ products

  return <Dashboard data={data} />;
}
