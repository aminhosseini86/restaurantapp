import { useGetFoodCates } from "@/hooks/";
import { Category, ProductDefine } from "@/types/getListOfCates";
import { useEffect, useMemo, useState } from "react";
import Header from "./header";
import CategoryList from "./categoryList";
import { Skeleton } from "@/components/ui/skeleton";

function Home() {
  const [selected, setSelected] = useState<Category | null>(null);

  const handleSelected = (data: Category) => {
    setSelected(data);
  };
  const { data, isError, isPending, isLoading, error } = useGetFoodCates();

  const foods = useMemo(() => {
    const allFoods = [];

    selected?.products.forEach((item) => {
      item.product_defines.forEach((it) => {
        allFoods.push({
          title: it.name,
          image: it.image,
          description: it.description,
          price: it.varieties[0].price,
          quantity: Number(it.varieties[0].quantity),
          is_available: it.varieties[0].is_available === "1" ? true : false,
        });
      });
    });

    // return allFoods;
  }, [selected]);

  useEffect(() => {
    if (data) {
      setSelected(data.data[0]);
    }
  }, [data]);

  return (
    <>
      <Header />

      <div className="flex w-full content-center items-center gap-5 overflow-auto scroll-smooth px-5 pt-3 pb-6">
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
        {/* {foods.length > 0 && (
          <>
            {foods.map((item) => {
              return (
                <div className="rounded-8px flex flex-wrap gap-4 bg-white px-5 py-4">
                  <img src={item.image} className="rounded-8px size-[120px]" />
                  <div className="space-y-4">
                    <h3 className="font-bold">{item.name}</h3>
                    <p>{item.description}</p>
                  </div>

                  <div className="h-0.5 w-full bg-gray-200"></div>
                  <div className="flex w-full justify-end">
                    <p></p>
                  </div>
                </div>
              );
            })}
          </>
        )} */}
      </div>
    </>
  );
}

export default Home;
