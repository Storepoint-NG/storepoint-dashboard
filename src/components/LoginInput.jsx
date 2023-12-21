import React from "react";

function LoginInput({ type, placeholder, label, isPassword }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="">{label}</label>
      <input
        type={type}
        name=""
        id=""
        placeholder={placeholder}
        className="outline-none border border-black/50  p-2"
      />
    </div>
  );
}

export default LoginInput;
