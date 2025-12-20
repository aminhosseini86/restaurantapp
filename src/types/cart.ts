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
