"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function LogOut() {
  const supabase = createClientComponentClient();
  const router = useRouter();

  useEffect(() => {
    supabase.auth.signOut().then(() => {
      router.replace("/login");
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return <div></div>;
}

export default LogOut;
