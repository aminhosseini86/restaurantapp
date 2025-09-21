import { In_AlertBoxProps } from "@/types/alertBox";
import { T_colorVariant } from "@/types/";
import clsx from "clsx";
import React from "react";

const variantStyles: Record<T_colorVariant, string> = {
  primary: "bg-blue-50 text-blue-800 border-blue-200",
  warning: "bg-yellow-50 text-yellow-800 border-yellow-200",
  success: "bg-green-50 text-green-800 border-green-200",
  danger: "bg-red-50 text-red-800 border-red-200",
  neutral: "bg-gray-50 text-gray-800 border-gray-200",
};

export const AlertBox: React.FC<In_AlertBoxProps> = ({
  variant = "neutral",
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "rounded-8px border-2 border-solid p-4 text-sm font-medium",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
