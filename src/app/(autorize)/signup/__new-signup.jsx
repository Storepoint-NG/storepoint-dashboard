"use client";
import React, { useState } from "react";
import { google_icon } from "../../../../public/assets";
import Image from "next/image";
import LoginInput from "../login/login-inputs";
import { signup_details_1, signup_details_2 } from "@/constant";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SignupComp = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const confirm_password = {
    type: "password",
    label: "Confirm Password",
    isPassword: true,
    placeholder: "Enter password again",
    name: "confirmPassword",
  };

  return (
    <main className="w-full p-4 flex flex-col items-center pt-10 gap-5 max-w-xl mx-auto">
      <p className="font-bold text-xl">Create your free account</p>

      <div className="flex items-center gap-3 w-full rounded-md p-1.5 justify-center border border-border font-semibold cursor-pointer hover:bg-blue-500 hover:text-white transition-colors duration-200">
        <Image src={google_icon} alt="google-icon" height={20} width={20} />
        <p>Sign up with Google </p>
      </div>

      <p>OR</p>
      {/* inputs */}
      <div className="w-full flex flex-col gap-5">
        <div className="flex gap-2 w-full">
          {signup_details_1.map((signup_detail) => (
            <LoginInput
              {...signup_detail}
              handleChange={handleChange}
              value={form[signup_detail.name]}
            />
          ))}
        </div>
        {signup_details_2.map((signup_detail) => (
          <LoginInput
            {...signup_detail}
            handleChange={handleChange}
            value={form[signup_detail.name]}
          />
        ))}
        {form.password !== "" && (
          <LoginInput
            {...confirm_password}
            handleChange={handleChange}
            value={form[confirm_password.name]}
          />
        )}
      </div>

      {/* submit */}
      <div className="w-full flex flex-col items-center text-sm gap-3">
        <Button className="w-full hover:bg-blue-500 transition-colors duration-150">
          Create account
        </Button>
        <p className="text-muted-foreground text-xs">
          Signing up for a Storepoint account means you agree to the{" "}
          <span className="underline">Privacy Policy </span> and
          <span className="underline">Terms of Service</span>.
        </p>
        <Link href="/login">
          Have an account?{" "}
          <span className="text-blue-500 cursor-pointer">Log in</span>
        </Link>
      </div>
    </main>
  );
};

export default SignupComp;
