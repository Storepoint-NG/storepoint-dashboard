import LoginInput from "@/components/LoginInput";
import Link from "next/link";

function Login() {
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
        />
        <LoginInput
          type="text"
          label="password"
          isPassword
          placeholder="Enter your password"
        />
      </div>

      <button className="mt-8 p-3 w-full bg-blue-500 rounded-md text-white font-medium text-sm">
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
