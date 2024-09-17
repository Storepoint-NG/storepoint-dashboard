"use client";
import LoginInput from "@/components/LoginInput";
// import { signup_details } from "@/constant";
import { signUpNewUser } from "@/constant/utils";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useUser } from "@supabase/auth-helpers-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SignupComp from "./__new-signup";

function Signup() {
  const supabase = createClientComponentClient();
  const router = useRouter();
  const user = useUser();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    confirmPassword: "",
  });
  const signup_details = []; // has changed

  useEffect(() => {
    if (user) {
      router.push("/store");
    }
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (form.name && form.email && form.password) {
      if (form.password != form.confirmPassword) {
        toast.error("Passwords don't match");
        return;
      }

      signUpNewUser(form.email, form.password, form, supabase, router);
    } else {
      toast.error("All fields are required");
    }
  }
  return (
    <div className="p-3 py-5 flex flex-col items-center">
      <h1 className="text-xl font-bold text-center mt-5">
        Create your free account
      </h1>
      <div className="w-full mt-6 space-y-3">
        {signup_details.map(({ type, label, placeholder, name }) => (
          <LoginInput
            key={name}
            type={type}
            label={label}
            placeholder={placeholder}
            name={name}
            value={form[name]}
            handleChange={handleChange}
          />
        ))}
      </div>

      <button
        className="mt-8 p-3 w-full bg-blue-500 rounded-md text-white font-medium text-sm"
        onClick={handleSubmit}
      >
        Create My Account
      </button>

      <Link href="/login" className="mt-5 text-sm text-center">
        Already have a Storepoint account?{" "}
        <span className="text-blue-500 cursor-pointer">Log in</span>
      </Link>
    </div>
  );
}

export default SignupComp;

// export default Signup;
