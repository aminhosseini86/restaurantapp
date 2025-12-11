export interface In_CategoryType {
  id: number;
  parentId: string;
  slider_id: null | number | string;
  image_id: string | number;
  cover_id: null | number | string;
  created_at: string;
  updated_at: string;
  image: null | string;
  type_id: string | number;
  order: string;
  deleted_at: null | string;
  image_url: string;
  cover_url: null | string;
  attributes: any[];
  slider: null | any;
  type: {
    id: number;
    title: string;
    name: string;
    active: string;
    created_at: null | string;
    updated_at: null | string;
  };
}

export interface In_GlobalInfo {
  categories: In_CategoryType[];
  phone: string;
  support_phone: string;
  whatsapp: string;
  email: string;
  instagram: string;
  telegram: string;
  linkedin: string;
  twitter: string;
  facebook: string;
  nationalCodeOnLogin: string;
  credit: number;
  borrow: number;
  cart: any[];
  default_settings: any[];
}

export interface In_Info {
  name: string;
  phone: string;
  lastver: string;
  picture: string;
  age: null | string | number;
  users_count: number;
  used_services: number;
  user_score: string;
}

export interface In_SliderTranslate {
  id: number;
  name: string;
  title: string | null;
  content: string | null;
  link: string | null;
}

export interface In_SliderMedia {
  id: number;
  type: string;
  GUID: string;
  filename: string;
  size: string;
  path: string;
  created_at: string;
  updated_at: string;
}

export interface In_SliderSlide {
  id: number;
  slider_id: string;
  media_id: string;
  cover_id: null | number | string;
  type_id: string;
  order: string;
  created_at: string;
  updated_at: string;
  media_url: string;
  trasnlates: In_SliderTranslate[];
  media: In_SliderMedia;
}

export interface In_Slider {
  id: number;
  name: string;
  show_type: string;
  created_at: string;
  updated_at: string;
  slides: In_SliderSlide[];
}

export interface In_SliderApiResponse {
  global_info: In_GlobalInfo;
  info: In_Info;
  slider: In_Slider;
}
