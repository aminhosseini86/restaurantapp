import { selectedItem } from ".";

export interface FoodCardListProps {
  loading: boolean;
  list: In_FoodCard[];
}

export interface In_FoodCard {
  key: number;
  title: string;
  image: string;
  description: string | null;
  price: number;
  quantity: number;
  is_available: boolean;
}

export interface In_FoodCardProps {
  handleOpen: (open: boolean) => void;
  handleSelectedRow: (data: selectedItem | null) => void;
  item: In_FoodCard;
  handleAddQuantity: (q: number) => void;
}
