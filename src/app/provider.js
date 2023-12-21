"use client";

import { Provider } from "react-redux";
import store from "@/redux/store";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

function Providers({ children }) {
  const [supabaseClient] = useState(() => createClientComponentClient());
  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      <Provider store={store}>{children}</Provider>
    </SessionContextProvider>
  );
}

export default Providers;
