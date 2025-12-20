import { Skeleton } from "@/components/ui/skeleton";
import { FoodCardListProps } from "@/types/FoodCardList";
import FoodCard from "@/components/ui/foodCard";
import AddToCartAlertBox from "./addToCartAlertBox";
import { useState } from "react";
import { selectedItem } from "@/types/";

function FoodCardList({ loading, list }: FoodCardListProps) {
  const [openAlert, setOpenAlert] = useState(true);
  const handleOpenAlert = (o: boolean) => {
    setOpenAlert(o);
  };

  const [selectedRow, setSelectedRow] = useState<selectedItem | null>(null);

  const handleSelectedRow = (data: selectedItem | null) => {
    setSelectedRow(data);
  };

  if (loading)
    return (
      <>
        {Array.from({ length: 5 }).map(() => {
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
      </>
    );

  return (
    <>
      {selectedRow && (
        <AddToCartAlertBox
          data={selectedRow}
          open={openAlert}
          handleOpen={handleOpenAlert}
        />
      )}

      {list.length > 0 && (
        <>
          {list.map((item) => (
            <FoodCard
              key={item.key}
              item={item}
              handleOpen={handleOpenAlert}
              handleSelectedRow={handleSelectedRow}
            />
          ))}
        </>
      )}
    </>
  );
}

export default FoodCardList;
