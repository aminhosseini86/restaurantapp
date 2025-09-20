import clsx from "clsx";
import { useState } from "react";
import Header from "./header";

function Home() {
  const [selectedId, setSelectedId] = useState(1);

  const handleSelected = (id: number) => {
    setSelectedId(id);
  };

  //   const { data } = useGetFoodCates();

  return (
    <>
      <Header />

      <div className="flex w-full content-center items-center gap-8 overflow-auto scroll-smooth pt-3 pb-6">
        {Array.from({ length: 20 }).map((_, index) => {
          return (
            <div
              className={clsx(
                "rounded-4px h-32 w-[110px] shrink-0 cursor-pointer p-4 outline-[6px] outline-solid",
                "flex flex-wrap content-center items-center justify-center",
                {
                  "bg-p-red/20 outline-p-red/20 border-2 border-dashed border-black":
                    index === selectedId,
                  "bg-white outline-white": index !== selectedId,
                },
              )}
              onClick={() => handleSelected(index)}
            >
              {index}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
