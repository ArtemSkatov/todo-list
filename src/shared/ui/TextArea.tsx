import clsx from "clsx";
import { forwardRef, TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <textarea
          ref={ref}
          className={clsx(
            "w-full px-3 py-2 rounded-md border bg-card placeholder-placeholder text-foreground resize-none",
            "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
            "disabled:bg-zinc-100 disabled:text-zinc-400 ",
            error && "border-red-500",
            className,
          )}
          {...props}
        />
        {error && <span className="text-red-500 text-xs">{error}</span>}
      </div>
    );
  },
);

TextArea.displayName = "TextArea";
