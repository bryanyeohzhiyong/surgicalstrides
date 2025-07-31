import React from "react";

export function Button({ children, variant = "solid" }) {
  const base = "px-4 py-2 rounded-xl text-sm font-medium focus:outline-none";
  const styles = {
    solid: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100"
  };
  return <button className={`${base} ${styles[variant]}`}>{children}</button>;
}