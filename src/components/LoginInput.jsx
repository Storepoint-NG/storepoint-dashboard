import React from "react";

function LoginInput({ type, placeholder, label, name, value, handleChange }) {
  const [isPwd, setIsPwd] = React.useState(
    type === "password" ? "password" : "text"
  );
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="">{label}</label>
      <input
        type={isPwd}
        value={value}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        className="outline-none border border-black/50  p-2"
      />
      {type === "password" && (
        <p
          className="text-right pr-2"
          onClick={() => {
            if (isPwd === "password") setIsPwd("text");
            else setIsPwd("password");
          }}
        >
          {isPwd === "password" ? "Show" : "Hide"}
        </p>
      )}
    </div>
  );
}

export default LoginInput;
