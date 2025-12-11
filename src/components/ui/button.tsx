import { In_ButotnProps } from "@/types/ui";
import clsx from "clsx";

function Button({ children, className, ...rest }: In_ButotnProps) {
  return (
    <button
      className={clsx(
        "bg-p-red rounded-8px cursor-pointer px-4 py-3 font-semibold text-white",
        "disabled:bg-p-red-disabled disabled:cursor-not-allowed",
        "hover:opacity-95",
        "text-xs lg:text-sm xl:text-base",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
