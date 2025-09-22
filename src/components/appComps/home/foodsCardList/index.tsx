import { Skeleton } from "@/components/ui/skeleton";
import { FoodCardListProps } from "@/types/FoodCardList";

function FoodCardList({ loading }: FoodCardListProps) {
  if (loading)
    <>
      {Array.from({ length: 5 }).map((_, index) => {
        return (
          <div className="rounded-8px flex gap-4 bg-white px-5 py-4">
            <Skeleton className="size-[120px]" />
            <div className="space-y-4">
              <Skeleton className="h-5 w-28" />
              <Skeleton className="h-5 w-36" />
            </div>
          </div>
        );
      })}
    </>;

  return <div></div>;
}

export default FoodCardList;
