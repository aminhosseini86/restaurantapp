import { In_FoodCardProps } from "@/types/FoodCardList";
import { X } from "lucide-react";

function FoodCard({ item }: In_FoodCardProps) {
  return (
    <div
      key={item.key}
      className="rounded-8px flex flex-wrap gap-4 bg-white px-5 py-4"
    >
      <img src={item.image} className="rounded-8px size-[120px]" />
      <div className="space-y-4">
        <h3 className="font-bold">{item.title}</h3>
        <p>{item.description}</p>
      </div>

      <div className="h-0.5 w-full bg-gray-200"></div>
      <div className="flex w-full content-center items-center justify-between">
        <div>
          {item.quantity > 0 ? (
            <p className="flex content-center items-center gap-1.5">
              <span className="text-sm">موجودی : </span>
              <span className="text- font-bold">{item.quantity}</span>
            </p>
          ) : (
            <div className="text-p-red rounded-8px border-p-red bg-p-red/10 flex content-center items-center gap-2 border-2 border-solid px-2 py-1">
              <X className="size-4" />
              <span className="text-sm font-bold">ناموجود</span>
            </div>
          )}
        </div>

        <p>
          {item.price === 0 ? (
            "قیمت نامشخص"
          ) : (
            <>
              <span className="text-[17px] font-bold">
                {item.price.toLocaleString()}{" "}
              </span>{" "}
              <span>تومان</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default FoodCard;
