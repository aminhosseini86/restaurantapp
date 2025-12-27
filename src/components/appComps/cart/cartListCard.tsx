import Button from "@/components/ui/button";
import ConfirmAlert from "@/components/ui/ConfirmAlert";
import { showDanger, showSuccess } from "@/components/ui/toast";
import { useRemoveCart } from "@/hooks/cart";
import { Cart } from "@/types/cart";
import { useQueryClient } from "@tanstack/react-query";
import { X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CartListCard({ data }: { data: Cart[] }) {
  const navigate = useNavigate();
  const q = useQueryClient();
  const removeCart = useRemoveCart();
  const [selectedRow, setSelectedRow] = useState<{
    cart_id: number;
  } | null>(null);

  const handleSelectedRow = (cart_id: number) => {
    setSelectedRow({ cart_id });
  };

  const [open, setOpen] = useState<boolean>(false);
  const handleOpenAlert = (o: boolean) => {
    setOpen(o);
  };

  const handleDeleteRow = () => {
    removeCart.mutate(
      {
        cart_id: Number(selectedRow!.cart_id),
      },
      {
        onSuccess() {
          q.invalidateQueries({
            queryKey: ["getNotCompletedCart"],
          });
          showSuccess("سبد خرید با موفقیت حذف شد.");
          handleOpenAlert(false);
        },

        onError() {
          showDanger("خطا در حذف سبد خرید.");
        },
      },
    );
  };

  return (
    <div className="my-9 mb-[200px] space-y-6">
      {open && (
        <ConfirmAlert
          open={open}
          pending={removeCart.isPending || !selectedRow}
          setOpen={handleOpenAlert}
          title={`حذف سبد خرید شماره  ${selectedRow?.cart_id}`}
          approveHandler={handleDeleteRow}
        />
      )}

      <h2 className="text-lg font-bold">لیست سبد های خرید شما </h2>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => {
          return (
            <div className="rounded-8px col-span-1 flex content-center items-center justify-between bg-white px-4 py-3">
              <div className="flex content-center items-center gap-2">
                <Button
                  className="rounded-full p-1!"
                  variant="ghost"
                  onClick={() => {
                    handleSelectedRow(item.id);
                    handleOpenAlert(true);
                  }}
                >
                  <X className="size-4" />
                </Button>
                <p className="text-base">
                  سبد خرید شماره : <span className="font-bold">{item.id}</span>
                </p>
              </div>

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
