import React from "react";

const CustomButton = ({ children, className,text, ...restProps }) => {
  return (
    <button
      className={`mt-4 bg-rose-700 hover:bg-rose-600 focus:bg-rose-600 py-3 px-4 m-auto rounded-full flex justify-center items-center font-semibold text-white gap-2 ease-in-out duration-200 hover:scale-105 focus:ring-2 focus:ring-rose-300 transform active:scale-x-95 transition-transform ${className}`}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
