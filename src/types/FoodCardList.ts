export interface FoodCardListProps {
  loading: boolean;
  list: FoodCard[];
}

export interface FoodCard {
  key: number;
  title: string;
  image: string;
  description: string | null;
  price: number;
  quantity: number;
  is_available: boolean;
}
