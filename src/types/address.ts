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

export interface In_NewAddressSchema {
  shipping_name: string;
  shipping_city_id: number;
  shipping_province_id: number;
  shipping_address: string;
  lat: number;
  lan: number;
}

export interface In_Address {
  id: number;
  user_id: string;
  name: string;
  city_id: string;
  province_id: string;
  address: string;
  phone: string | null;
  postal_code: string | null;
  lat: string;
  lan: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  city: In_City;
  province: In_Province;
}

export interface In_City {
  id: number;
  province_id: string;
  name_fa: string;
  name_en: string;
  is_popular: string;
  latitude: string;
  longitude: string;
  elevation: string;
}

export interface In_Province {
  id: number;
  name: string;
}
