import clsx from "clsx";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <input
          ref={ref}
          className={clsx(
            "w-full px-3 py-2 rounded-md border bg-card placeholder-placeholder text-foreground",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
            "disabled:bg-zinc-100 disabled:text-zinc-400",
            error && "border-red-500",
            className,
          )}
          {...props}
        />
        {error && <span className="text-red-500 text-xs mt-1">{error}</span>}
      </div>
    );
  },
);

Input.displayName = "Input";
