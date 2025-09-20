import { ButtonHTMLAttributes, ReactNode } from "react";

export interface In_ButotnProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode | string | number;
}
