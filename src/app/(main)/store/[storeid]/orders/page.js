import supabase from "@/supabase";
import Orders from "./Orders";

export default async function OrdersPage({ params }) {
  const { storeid } = params;
  if (!storeid) return;
  const { data, error } = await supabase
    .from("orders")
    .select("order_id,delivered,products_ordered,customer_details,amount");
  if (error) return;
  function getDelivered(orders, status) {
    let items = orders.filter((order) => order.delivered === status);
    return items;
  }
  const pending = getDelivered(data, "false");
  const fulfilled = getDelivered(data, "true");

  return (
    <main className="p-2">
      <h1 className="text-3xl font-mono font-semibold">Orders</h1>
      <Orders pending={pending} fulfilled={fulfilled} />
    </main>
  );
}
