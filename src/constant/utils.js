import toast from "react-hot-toast";
import { redirect } from "next/navigation";
export async function signInWithEmail(email, password) {
  const toastId = toast.loading("Processing Signin");
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  toast.dismiss(toastId);
  if (data?.user) {
    toast.success("Login successfully");
    console.log("data", data);
    redirect("/dashboard", "replace");
  } else {
    toast.error("Unable to Login");
    if (error.message === "Invalid login credentials") {
      toast.error("Invalid login details");
    }
    // Remove email verification
    else if (error.message === "Email not confirmed") {
      toast.error("You have not verified you email");
      //   dispatch(
      //     setUser({
      //       email: form.email,
      //     })
      //   );
      //   router.push("/signup/verify-email");
    } else {
      toast.error(`${error.name}: ${error.message}`);
    }
  }
}

export async function signUpNewUser(email, password) {
  const toastId = toast.loading("Processing Signup");
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      emailRedirectTo: window.location.hostname,
    },
  });
  toast.dismiss(toastId);
  if (error) {
    toast.error("Unable to Sign up");
    return;
  }
  if (data?.user) {
    toast.success("Sign up successfully");
    dispatch(
      setUser({
        email: data.user.email,
      })
    );

    ensureUserProfile(supabase, data.user, form.name);

    router.push("/signup/verify-email");
  }
}
