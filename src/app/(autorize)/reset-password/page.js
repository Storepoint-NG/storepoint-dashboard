import LoginInput from "@/components/LoginInput";
import Link from "next/link";
import React from "react";

function ResetPassword() {
  return (
    <div className="p-3 py-5 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-center">Reset Password</h1>
      <div className="w-full mt-8 space-y-3">
        <LoginInput
          type="text"
          label="Registered Email address"
          placeholder="Type your email address"
        />
      </div>

      <button className="mt-8 p-3 w-full bg-blue-500 rounded-md text-white font-medium text-sm">
        Send Reset Link
      </button>

      <Link href="/login" className="mt-5 text-sm text-center">
        Already have a Storepoint account?{" "}
        <span className="text-blue-500 cursor-pointer">Login</span>
      </Link>
    </div>
  );
}

export default ResetPassword;
