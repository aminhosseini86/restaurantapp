export interface In_AddressDetail {
  id: number;
  user_id: string;
  name: string;
  city_id: string;
  province_id: string;
  address: string;
  phone: string;
  postal_code: string | null;
  lat: string;
  lan: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}
