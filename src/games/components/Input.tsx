import React, { FC } from "react";

const Input: FC<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = (props) => {
  return (
    <input
      {...props}
      className={`w-full p-4 rounded text-gray-800 ${props.className}`}
    />
  );
};

export default Input;
