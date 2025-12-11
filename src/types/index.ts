export type T_colorVariant =
  | "primary"
  | "warning"
  | "success"
  | "danger"
  | "neutral";

export interface In_ApiRes<T> {
  code: number;
  token: string | null;
  message: string | null;
  data: T;
}
