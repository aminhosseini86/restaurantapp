import { useGetFoodCates } from "@/hooks/";
import { Category } from "@/types/getListOfCates";
import { useEffect, useState } from "react";
import Header from "./header";
import CategoryList from "./categoryList";

function Home() {
  const [selected, setSelected] = useState<Category | null>(null);

  const handleSelected = (data: Category) => {
    setSelected(data);
  };
  const { data, isError, isPending, isLoading, error } = useGetFoodCates();

  useEffect(() => {
    if (data) {
      setSelected(data.data[0]);
    }
  }, [data]);

  return (
    <>
      <Header />

      <div className="flex w-full content-center items-center justify-center gap-5 overflow-auto scroll-smooth px-5 pt-3 pb-6">
        <CategoryList
          data={data?.data || []}
          error={error}
          handleSelected={handleSelected}
          isError={isError}
          loading={isPending || isLoading}
          selected={selected}
        />
      </div>
    </>
  );
}

export default Home;
