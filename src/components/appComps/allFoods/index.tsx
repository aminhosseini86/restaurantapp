import { useGetFoodCates } from "@/hooks/";
import { In_FoodCard } from "@/types/FoodCardList";
import { useMemo } from "react";
import FoodsSlider from "./foodsSlider";
import { AlertBox } from "@/components/ui/alertBox";
import { Loader2 } from "lucide-react";

export default function AllFoods() {
  const { data, isError, isLoading } = useGetFoodCates();

  const allFoods: In_FoodCard[] = useMemo(() => {
    const allFoods: In_FoodCard[] = [];

    if (data) {
      data.data.forEach((selected) => {
        selected?.products.forEach((item) => {
          item.product_defines.forEach((it) => {
            allFoods.push({
              key: it.product_define_id,
              title: it.name,
              image: it.image,
              description: it.description,
              price:
                it.varieties.length > 0 ? Number(it.varieties[0].price) : 0,
              quantity:
                it.varieties.length > 0 ? Number(it.varieties[0].quantity) : 0,
              is_available:
                it.varieties.length > 0
                  ? it.varieties[0].is_available === "1"
                    ? true
                    : false
                  : false,
            });
          });
        });
      });
    }

    return allFoods;
  }, [data]);

  return (
    <div className="container space-y-6 pt-8 pb-3">
      <h3 className="text-2xl font-bold">منوی همه غذا ها</h3>
      {isError ? (
        <AlertBox variant="danger">خطایی رخ داده است.</AlertBox>
      ) : isLoading ? (
        <Loader2 className="size-8 animate-spin" />
      ) : (
        <FoodsSlider foods={allFoods} />
      )}
    </div>
  );
}
