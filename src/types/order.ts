export interface In_CreateOrder {
  address_id: number;
  cart_id: number;
  preferred_date: string;
  preferred_start: string;
  preferred_finish: string;
}

export interface In_Order {
  id: number;
  user_id: string;
  status_id: string;
  total: string;
  needs_shipping: string;
  address_id: string;
  cart_id: string;
  discount: string | null;
  shipping_id: string;
  shipping_type: string;
  shipping_name: string;
  shipping_cost: string;
  trace_code: string;
  type_id: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  agreement_id: string;
  is_printed: string;
  is_delivered: string;
  table_id: string;
  preferred_date: string;

  items: In_OrderItem[];
  status: In_Status;
}

export interface In_OrderItem {
  id: number;
  order_id: string;
  variety_id: string;
  provider_id: string | null;
  answers_id: string;
  original_price: string;
  price: string;
  count: string;
  user_id: string | null;
  prefered_time: string | null;
  exact_time: string | null;
  trace_code: string;
  preferred_date: string | null;
  preferred_start: string | null;
  preferred_finish: string | null;
  description: string | null;
  provider_location: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  variety_name: string;

  answer_items: In_AnswerItem[];
}

export interface In_AnswerItem {
  question_type: string;
  question_id: string;
  question_title: string;
  answer_id: number;
  answer_title: string;
}
export interface In_Status {
  id: number;
  title: string;
  name: string;
  active: string;
}
