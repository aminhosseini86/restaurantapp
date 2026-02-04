import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Button from "@/components/ui/button";
import { showDanger, showSuccess } from "@/components/ui/toast";
import { useAddToCart } from "@/hooks/cart";
import { selectedItem } from "@/types/";
import clsx from "clsx";
import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function AddToCartAlertBox({
  handleOpen,
  open,
  data,
  quantity,
}: {
  data: selectedItem;
  open: boolean;
  handleOpen: (open: boolean) => void;
  quantity: number;
}) {
  const [quantityStock, setQuantityStock] = useState(1);
  const [searchParams] = useSearchParams();
  const cart_id_param = searchParams.get("cart_id");

  const quantityChange = (action: "add" | "minus") => {
    setQuantityStock((prev) => {
      if (action === "add") {
        const number = prev === quantity ? quantity : prev + 1;

        return number;
      }

      if (action === "minus") {
        const number = prev === 0 ? 0 : prev - 1;

        return number;
      }

      return prev;
    });
  };

  const addToCart = useAddToCart();

  const [cart_id, setCartId] = useState<string | null>(cart_id_param || null);

  const handleAdd = () => {
    addToCart.mutate(
      {
        count: quantityStock,
        id: data.id,
        ...(cart_id ? { cart_id: Number(cart_id) } : {}),
      },
      {
        onSuccess(data) {
          showSuccess(
            data.message || "غدا مورد نظر به سبد خرید اضافه شده است.",
          );
          if (!cart_id) {
            setCartId(data.data.cart_id.toString());
          }
          handleOpen(false);
        },

        onError(error) {
          showDanger(error.message);
          handleOpen(false);
        },
      },
    );
  };

  useEffect(() => {
    if (open) {
      setQuantityStock(1);
    }
  }, [open]);

  return (
    <AlertDialog open={open} onOpenChange={handleOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex content-center items-center gap-1.5 text-start">
            اضافه کردن
            <span className="text-p-red"> {data.name}</span>
            به سبد خرید
          </AlertDialogTitle>
          <AlertDialogDescription className="sr-only opacity-0">
            111
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="space-y-2">
          <p>تعداد </p>

          <div className="mx-auto flex w-max content-center items-center gap-1">
            <Button
              color={"neutral"}
              variant="solid"
              className={clsx(
                "flex content-center items-center justify-center !p-2.5",
              )}
              disabled={quantity === 0 || quantityStock === quantity}
              onClick={() => {
                quantityChange("add");
              }}
            >
              <Plus className="size-5" />
            </Button>

            <input
              type="text"
              className="w-12 rounded-md border-2! border-solid border-gray-200! !p-2.5 text-center text-sm font-semibold focus:outline-none disabled:bg-gray-100"
              disabled={quantity === 0}
              placeholder="0"
              value={quantityStock}
              onChange={(e) => {
                if (Number(e.target.value) < quantity) {
                  setQuantityStock(Number(e.target.value));
                } else {
                  setQuantityStock(quantity);
                }
              }}
            />

            <Button
              color="neutral"
              variant="solid"
              className="flex content-center items-center justify-center !p-2.5"
              onClick={() => quantityChange("minus")}
              disabled={quantity === 0}
            >
              <Minus className="size-5" />
            </Button>
          </div>
        </div>

        <AlertDialogFooter className="flex flex-row flex-nowrap content-center items-center justify-end gap-2">
          <AlertDialogCancel asChild>
            <Button variant="solid" color="danger">
              لغو
            </Button>
          </AlertDialogCancel>

          <AlertDialogAction asChild>
            <Button
              variant="solid"
              color="success"
              disabled={addToCart.isPending || quantityStock < 1}
              onClick={handleAdd}
            >
              اضافه کردن
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AddToCartAlertBox;
