export type T_colorVariant =
  | "primary"
  | "warning"
  | "success"
  | "danger"
  | "neutral";

export type T_styleVariant = "solid" | "outline" | "ghost";

export interface In_ApiRes<T> {
  code: number;
  token: string | null;
  message: string | null;
  data: T;
}
