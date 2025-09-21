import { HTMLAttributes, ReactNode } from "react";
import { T_colorVariant } from ".";

export interface In_AlertBoxProps extends HTMLAttributes<HTMLDivElement> {
  variant?: T_colorVariant;
  children?: ReactNode;
}
