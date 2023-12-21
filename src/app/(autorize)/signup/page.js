import LoginInput from "@/components/LoginInput";
import Link from "next/link";
import React from "react";

function Signup() {
  return (
    <div className="p-3 py-5 flex flex-col items-center">
      <h1 className="text-xl font-bold text-center mt-5">
        Create your free account
      </h1>
      <div className="w-full mt-6 space-y-3">
        <LoginInput
          type="text"
          label="First Name and Last Name"
          placeholder="Type your firstname and lastname"
        />
        <LoginInput type="text" label="Phone Number" placeholder="8164475065" />
        <LoginInput
          type="text"
          label="Your Business Email"
          isPassword
          placeholder="Type your email address"
        />
        <LoginInput
          type="password"
          label="Password"
          isPassword
          placeholder="Enter a strong password"
        />
      </div>

      <button className="mt-8 p-3 w-full bg-blue-500 rounded-md text-white font-medium text-sm">
        Create My Account
      </button>

      <Link href="/login" className="mt-5 text-sm text-center">
        Already have a Storepoint account?{" "}
        <span className="text-blue-500 cursor-pointer">Log in</span>
      </Link>
    </div>
  );
}

export default Signup;
