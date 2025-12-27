export interface In_AddToCartBody {
  id: number;
  count: number;
  cart_id?: number;
  type?: number;
}

export interface In_AddToCartRes {
  cart_id: number;
  variety_id: number;
  original_price: number;
  price: number;
  count: number;
  provider_id: number;
  id: number;
}

export interface Cart {
  id: number;
  cart_trace_code: string | null;
  type: string;
  price: number;
  items: CartItem[];
  date: string;
}

export interface CartItem {
  id: number;
  cart_id: string;
  variety_id: string;
  original_price: string;
  price: string;
  count: string;
  user_id: number | null;
  provider_id: string;
  answers_id: number | null;
}

export interface In_PriceInfo {
  type: number;
  price: number;
}

export interface In_Provider {
  id: number;
  first_name: string;
  last_name: string | null;
  phone: string;
  picture: string;
}

export interface In_Unit {
  id: number;
  title: string;
  active: string;
  created_at: string | null;
  updated_at: string | null;
}

export interface In_CartDetailItem {
  id: string;
  count: string;
  name: string;
  term_of_use: string | null;
  preferred_date: string | null;
  preferred_start: string | null;
  preferred_finish: string | null;
  description: string | null;
  image: string;
  transportation: number;
  original_price: string;
  price_info: In_PriceInfo;
  provider: In_Provider;
  unit: In_Unit;
  user: any | null;
}

export interface In_CartInfoBody {
  cart_id: number;
}

export interface In_RemoveFromCartBody {
  cart_id: number;
  variety_id: number;
}

export interface In_RemoveCartBody {
  cart_id: number;
}
