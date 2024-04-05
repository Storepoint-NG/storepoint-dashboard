"use client";
import LoginInput from "./login-inputs";
import { google_icon } from "../../../../public/assets";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LoginComp = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const login_inputs = [
    {
      name: "email",
      type: "email",
      placeholder: "Enter Email Address",
      label: "Email",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Enter Password",
      label: "Password",
    },
  ];
  return (
    <main className="w-full p-4 flex flex-col items-center pt-10 gap-5 max-w-xl mx-auto">
      <p className="font-bold text-xl">Log In to your account</p>

      <div className="flex items-center gap-3 w-full rounded-md p-1.5 justify-center border border-border font-semibold cursor-pointer hover:bg-blue-500 hover:text-white transition-colors duration-200">
        <Image src={google_icon} alt="google-icon" height={20} width={20} />
        <p>Login with Google </p>
      </div>

      <p>OR</p>
      {/* inputs */}

      <div className="w-full flex flex-col gap-5">
        {login_inputs.map((login_input) => (
          <LoginInput
            {...login_input}
            handleChange={handleChange}
            value={form[login_input.name]}
          />
        ))}
      </div>

      <div className="w-full flex flex-col items-center text-sm gap-3">
        <Button className="w-full hover:bg-blue-500 transition-colors duration-150">
          Log In
        </Button>
        <p className="text-blue-500 cursor-pointer">Forgot Your Password?</p>
        <hr className="w-full border border-gray-100" />
        <Link href="/signup">
          Don&apos;t have an account?{" "}
          <span className="text-blue-500 cursor-pointer">Create account</span>
        </Link>
      </div>
    </main>
  );
};

export default LoginComp;
