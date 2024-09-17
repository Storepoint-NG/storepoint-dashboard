"use client";
import React, { useState } from "react";
import LoginInput from "../login/login-inputs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ResetComp = () => {
  const [form, setForm] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const email_input = {
    name: "email",
    type: "email",
    placeholder: "Type registered email address",
    label: "Registered Email address",
  };

  return (
    <main className="w-full p-4 flex flex-col items-center pt-10 gap-5 max-w-xl mx-auto">
      <p className="font-bold text-xl">Reset Password</p>{" "}
      <div className="w-full mt-5">
        <LoginInput
          {...email_input}
          handleChange={handleChange}
          value={form[email_input.name]}
        />
      </div>
      <div className="w-full flex flex-col items-center text-sm gap-3">
        <Button className="w-full hover:bg-blue-500 transition-colors duration-150">
          Request reset link
        </Button>
        <div className="w-full">
          <Link
            href="/login"
            className="text-black/70 hover:text-blue-400 font-semibold cursor-pointer text-center"
          >
            Back to Log in
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ResetComp;
