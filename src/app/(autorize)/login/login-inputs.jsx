import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const LoginInput = ({
  type,
  name,
  label,
  value,
  placeholder,
  handleChange,
}) => {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <Label className="pl-1 font-semibold" htmlFor={name}>
        {label}
      </Label>

      <Input
        className="focus:ring-blue-500 shadow-sm"
        onChange={handleChange}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default LoginInput;
