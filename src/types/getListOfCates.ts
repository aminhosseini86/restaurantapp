import { AxiosError } from "axios";

export interface Color {
  id: number;
  code: string;
}

export interface Variety {
  id: number;
  title: string;
  price: string;
  quantity: string;
  is_available: "0" | "1";
  product_variety_type_id: string;
}

export interface ProductDefine {
  product_define_id: number;
  name: string;
  description: string | null;
  image: string;
  varieties: Variety[];
  colors: Color[];
}

export interface Product {
  is_virtual: string;
  updated_at: string;
  type_id: string;
  name: string;
  image_url: string | null;
  product_defines: ProductDefine[];
}

export interface Category {
  id: number;
  name: string | null;
  image: string | null;
  image_url: string;
  cover_url: string | null;
  title: string;
  content: string | null;
  sub_categories: Category[];
  products: Product[];
}

export interface FoodsApiResponse {
  code: number;
  token: string;
  message: string;
  data: Category[];
}

export interface CategoryListProps {
  loading: boolean;
  isError: boolean;
  error: AxiosError<any> | null;
  data: Category[];
  selected: Category | null;
  handleSelected: (data: Category) => void;
}
