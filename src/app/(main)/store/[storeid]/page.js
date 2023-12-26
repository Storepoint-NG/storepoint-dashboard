import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function Shop({ params }) {
  const { storeid } = params;
  const supabase = useSupabaseClient();
  return <div>{storeid}</div>;
}
