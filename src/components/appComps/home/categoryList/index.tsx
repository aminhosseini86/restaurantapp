import { AlertBox } from "@/components/ui/alertBox";
import { Skeleton } from "@/components/ui/skeleton";
import { CategoryListProps } from "@/types/getListOfCates";
import clsx from "clsx";

export default function CategoryList({
  loading,
  error,
  isError,
  data,
  selected,
  handleSelected,
}: CategoryListProps) {
  if (loading) {
    return (
      <>
        {Array.from({ length: 5 }).map((_, index) => {
          return (
            <Skeleton
              key={index}
              className="rounded-4px h-32 w-[110px] shrink-0 bg-gray-200"
            />
          );
        })}
      </>
    );
  }

  if (isError) {
    return (
      <AlertBox variant="danger" className="w-full">
        {error?.response?.data.msg || "خطایی رخ داده است"}
      </AlertBox>
    );
  }

  if (data.length < 0)
    return (
      <AlertBox variant="neutral" className="w-full">
        داده ایی برای نمایش وجود ندارد.
      </AlertBox>
    );

  return (
    <>
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className={clsx(
              "rounded-4px h-32 w-[110px] shrink-0 cursor-pointer p-4 outline-[6px] outline-solid",
              "flex flex-wrap content-center items-center justify-center gap-3",
              {
                "bg-p-red/20 outline-p-red/20 border-2 border-dashed border-black font-bold text-red-600":
                  item.id === selected?.id,
                "bg-white outline-white": item.id !== selected?.id,
              },
            )}
            onClick={() => handleSelected(item)}
          >
            <img src={item.image_url} alt={item.title} />
            <p>{item.title}</p>
          </div>
        );
      })}
    </>
  );
}
