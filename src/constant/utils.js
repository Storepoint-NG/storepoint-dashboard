import toast from "react-hot-toast";

export async function signInWithEmail(email, password, supabase, router) {
  const toastId = toast.loading("Processing Signin");
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  toast.dismiss(toastId);
  if (data?.user) {
    toast.success("Login successfully");
    console.log("data", data);
    router.push("/dashboard");
  } else {
    toast.error("Unable to Login");
    if (error.message === "Invalid login credentials") {
      toast.error("Invalid login details");
    }
    // Remove email verification
    else if (error.message === "Email not confirmed") {
      toast.error("You have not verified your email");
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

export async function signUpNewUser(email, password, form, supabase, router) {
  const toastId = toast.loading("Processing Signup");
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  toast.dismiss(toastId);
  if (error) {
    if (error.message === "User already registered") {
      toast.error("Email Already Taken");
      router.push("/reset-password");
      return;
    }
    toast.error("Unable to Sign up");
    return;
  }
  if (data?.user) {
    toast.success("Sign up successfully");

    await ensureUserProfile(data.user, form, supabase);
    router.push("/login");
  }
}

export const fetchUserProfile = async (user, supabase) => {
  if (!user) {
    return null;
  }

  const { data, error } = await supabase
    .from("profiles")
    .select()
    .eq("user_email", user.email)
    .single();

  if (data) {
    return data;
  }

  if (error) {
    console.error("error while fetching profile", error);
    return null;
  }
};

export const ensureUserProfile = async (user, form, supabase) => {
  let userProfile = await fetchUserProfile(user, supabase);

  if (!userProfile) {
    const { error } = await supabase.from("profiles").insert({
      user_email: user.email,
      user_id: user.id,
      username: form.name,
      phone_number: form.number,
    });

    if (error) {
      console.error("Error while creating profile", error);
    }
  }
};
