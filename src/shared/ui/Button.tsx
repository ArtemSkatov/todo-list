import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

export const Button = ({
  children,
  className,
  variant = "blue",
  ...props
}: {
  variant?: "green" | "blue" | "red" | "outline";
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition";

  const variantStyles = {
    green: "bg-green-500 text-white hover:bg-green-600",
    blue: "bg-blue-500 text-white hover:bg-blue-600",
    red: "bg-red-500 text-white hover:bg-red-600",
    outline:
      "border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white",
  };
  return (
    <button
      {...props}
      className={clsx(baseStyles, variantStyles[variant], className)}
    >
      {children}
    </button>
  );
};
