import { In_ButtonProps } from "@/types/ui";
import { T_colorVariant, T_styleVariant } from "@/types/";
import clsx from "clsx";

const colorAndVariants: Record<
  T_styleVariant,
  Record<T_colorVariant, string>
> = {
  solid: {
    primary: "bg-p-red text-white hover:opacity-95 disabled:bg-p-red-disabled",
    warning:
      "bg-amber-400 text-black hover:bg-amber-500 disabled:bg-amber-200 disabled:cursor-not-allowed",
    success:
      "bg-emerald-400 text-black hover:bg-emerald-500 disabled:bg-emerald-200 disabled:cursor-not-allowed",
    danger:
      "bg-red-500 text-white hover:bg-red-600 disabled:bg-red-300 disabled:cursor-not-allowed",
    neutral:
      "bg-gray-300 text-gray-800 hover:bg-gray-400 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed",
  },

  outline: {
    primary:
      "border-[1px] border-solid  border-p-red text-p-red bg-transparent hover:bg-p-red/10 disabled:border-p-red-disabled disabled:text-p-red-disabled disabled:hover:bg-transparent",
    warning:
      "border-[1px] border-solid  border-amber-400 text-amber-400 bg-transparent hover:bg-amber-400/30 disabled:border-amber-200 disabled:text-amber-200 disabled:hover:bg-transparent",
    success:
      "border-[1px] border-solid  border-emerald-400 text-emerald-400 bg-transparent hover:bg-emerald-400/30 disabled:border-emerald-200 disabled:text-emerald-200 disabled:hover:bg-transparent",
    danger:
      "border-[1px]  border-solid border-red-500 text-red-500 bg-transparent hover:bg-red-500/30 disabled:border-red-300 disabled:text-red-300 disabled:hover:bg-transparent",
    neutral:
      "border-[1px]  border-solid border-gray-500 text-gray-500 bg-transparent hover:bg-gray-300/30 disabled:border-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:bg-transparent",
  },

  ghost: {
    primary:
      "bg-transparent text-p-red hover:bg-p-red/10 disabled:text-p-red-disabled disabled:hover:bg-transparent",
    warning:
      "bg-transparent text-amber-400 hover:bg-amber-400/10 disabled:text-amber-200 disabled:hover:bg-transparent",
    success:
      "bg-transparent text-emerald-400 hover:bg-emerald-400/10 disabled:text-emerald-200 disabled:hover:bg-transparent",
    danger:
      "bg-transparent text-red-500 hover:bg-red-500/10 disabled:text-red-300 disabled:hover:bg-transparent",
    neutral:
      "bg-transparent text-gray-400 hover:bg-gray-500/10 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:bg-transparent",
  },
};

function Button({
  children,
  className,
  color = "primary",
  variant = "solid",
  ...rest
}: In_ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-8px cursor-pointer px-4 py-3 font-semibold transition-colors",
        "text-xs lg:text-sm xl:text-base",
        "disabled:cursor-not-allowed",
        colorAndVariants[variant][color],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
