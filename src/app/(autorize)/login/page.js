"use client";
import LoginInput from "@/components/LoginInput";
import { signInWithEmail } from "@/constant/utils";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useState } from "react";

function Login() {
  const supabase = createClientComponentClient();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    if (form.email && form.password) {
      signInWithEmail(form.email, form.password);
    } else {
      toast.error("Email and Password is Required");
    }
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div className="p-3 py-5 flex flex-col items-center">
      <h1 className="text-xl font-bold text-center mt-5">
        Login in to Storepoint
      </h1>
      <div className="w-full mt-6 space-y-3">
        <LoginInput
          type="text"
          label="Email address"
          placeholder="Type your email address"
          name="email"
          value={form.email}
          handleChange={handleChange}
        />
        <LoginInput
          type="password"
          label="Password"
          isPassword
          placeholder="Enter your password"
          name="password"
          value={form.password}
          handleChange={handleChange}
        />
      </div>

      <button
        className="mt-8 p-3 w-full bg-blue-500 rounded-md text-white font-medium text-sm"
        onClick={handleSubmit}
      >
        Log in my account
      </button>

      <Link href="/signup" className="mt-5 text-sm text-center">
        Don&apos;t have a Storepoint account?{" "}
        <span className="text-blue-500 cursor-pointer">Create account</span>
      </Link>
      <Link href="/reset-password" className="mt-3 text-sm text-center">
        Forget your password?{" "}
        <span className="text-blue-500 cursor-pointer">
          Reset your password
        </span>
      </Link>
    </div>
  );
}

export default Login;
