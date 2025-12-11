import { Skeleton } from "@/components/ui/skeleton";
import { useGetFoodCates } from "@/hooks/";
import { In_FoodCard } from "@/types/FoodCardList";
import { Category } from "@/types/getListOfCates";
import { useEffect, useMemo, useState } from "react";
import CategoryList from "./categoryList";
import FoodCardList from "./foodsCardList";
import Header from "./header/header";

function Home() {
  const [selected, setSelected] = useState<Category | null>(null);

  const handleSelected = (data: Category) => {
    setSelected(data);
  };

  const { data, isError, isPending, isLoading, error } = useGetFoodCates();

  const foods: In_FoodCard[] = useMemo(() => {
    const allFoods: In_FoodCard[] = [];

    selected?.products.forEach((item) => {
      item.product_defines.forEach((it) => {
        allFoods.push({
          key: it.product_define_id,
          title: it.name,
          image: it.image,
          description: it.description,
          price: it.varieties.length > 0 ? Number(it.varieties[0].price) : 0,
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

    return allFoods;
  }, [selected]);

  useEffect(() => {
    if (data) {
      if (data.data) {
        setSelected(data.data[0]);
      }
    }
  }, [data]);

  return (
    <>
      <Header />

      <div className="flex w-full content-center items-center gap-5 overflow-auto scroll-smooth px-5 pt-3 pb-6 lg:justify-center">
        <CategoryList
          data={data?.data || []}
          error={error}
          handleSelected={handleSelected}
          isError={isError}
          loading={isPending || isLoading}
          selected={selected}
        />
      </div>

      <div className="mt-10 flex w-full content-center items-center gap-5">
        {isPending || isLoading ? (
          <Skeleton className="h-4 w-full" />
        ) : (
          selected && (
            <>
              <div className="title-head"></div>
              <p className="font-black"> {selected?.title}</p>
              <div className="title-head"></div>
            </>
          )
        )}
      </div>

      <div className="my-10 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <FoodCardList list={foods} loading={isPending || isLoading} />
      </div>
    </>
  );
}

export default Home;
