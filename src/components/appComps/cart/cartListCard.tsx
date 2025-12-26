import Button from "@/components/ui/button";
import { Cart } from "@/types/cart";
import { useNavigate } from "react-router-dom";

function CartListCard({ data }: { data: Cart[] }) {
  const navigate = useNavigate();

  return (
    <div className="my-9 mb-[200px] space-y-6">
      <h2 className="text-lg font-bold">لیست سبد های خرید شما </h2>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => {
          return (
            <div className="rounded-8px col-span-1 flex content-center items-center justify-between bg-white px-4 py-3">
              <p className="text-base">
                سبد خرید شماره : <span className="font-bold">{item.id}</span>
              </p>

              <Button
                variant="ghost"
                onClick={() => navigate(`/cart/${item.id}`)}
              >
                مشاهده جزئیات و پرداخت
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CartListCard;
