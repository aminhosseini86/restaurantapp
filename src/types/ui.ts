import { ButtonHTMLAttributes, ReactNode } from "react";
import { T_colorVariant, T_styleVariant } from ".";

export interface In_ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode | string | number;
  color?: T_colorVariant;
  variant?: T_styleVariant;
}
