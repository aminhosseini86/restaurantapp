import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { showDanger, showSuccess } from "@/components/ui/toast";
import { useAddToCart } from "@/hooks/cart";
import { selectedItem } from "@/types/";
import { useEffect, useState } from "react";

function AddToCartAlertBox({
  handleOpen,
  open,
  data,
}: {
  data: selectedItem;
  open: boolean;
  handleOpen: (open: boolean) => void;
}) {
  const addToCart = useAddToCart();

  const [count, setCount] = useState(1);
  const [cart_id, setCartId] = useState<string | null>(null);

  const handleAdd = () => {
    addToCart.mutate(
      {
        count,
        id: data.id,
        ...(cart_id ? { cart_id: Number(cart_id) } : {}),
      },
      {
        onSuccess(data) {
          showSuccess(data.message);
          if (!cart_id) {
            setCartId(data.data.cart_id.toString());
          }
        },

        onError(error) {
          showDanger(error.message);
        },
      },
    );

    handleOpen(false);
  };

  useEffect(() => {
    if (open) {
      setCount(1);
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
        </AlertDialogHeader>

        <div className="space-y-2">
          <p>تعداد </p>

          <Input
            className="border-2 border-solid border-gray-500!"
            type="number"
            min={1}
            onKeyDown={(e) => {
              const allowedKeys = [
                "Backspace",
                "Delete",
                "ArrowLeft",
                "ArrowRight",
                "Tab",
              ];

              if (allowedKeys.includes(e.key)) return;

              if (!/^\d$/.test(e.key)) {
                e.preventDefault();
                return;
              }

              const nextValue = e.currentTarget.value + e.key;

              if (Number(nextValue) < 1) {
                e.preventDefault();
              }
            }}
            value={count}
            onChange={(e) => {
              setCount(Number(e.target.value));
            }}
          />
        </div>

        <AlertDialogFooter className="flex content-center items-center gap-2">
          <AlertDialogCancel asChild>
            <Button variant="solid" color="danger">
              لغو
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              variant="solid"
              color="success"
              disabled={addToCart.isPending || count < 1}
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
