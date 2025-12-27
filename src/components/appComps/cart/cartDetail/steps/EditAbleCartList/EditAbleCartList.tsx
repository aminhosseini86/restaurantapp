import Button from "@/components/ui/button";
import ConfirmAlert from "@/components/ui/ConfirmAlert";
import { showDanger, showSuccess } from "@/components/ui/toast";
import { useDeleteItemFromCart, useGetCartInfo } from "@/hooks/cart";
import { useQueryClient } from "@tanstack/react-query";
import { Plus } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartDetailSummary } from "./cartDetailSummary";
import { EditAbleCartListTableRow } from "./editAbleCartListTableRow";

function EditAbleCartList() {
  const { id } = useParams<{ id: string }>();

  const { data } = useGetCartInfo({
    cart_id: Number(id),
  });

  const navigate = useNavigate();
  const q = useQueryClient();

  const total: number = useMemo(() => {
    if (data)
      return data.data.reduce((sum, item) => sum + item.price_info.price, 0);

    return 0;
  }, [data]);

  const deleteItemFromCart = useDeleteItemFromCart();

  const [selectedRow, setSelectedRow] = useState<{
    name: string;
    varity_id: string;
  } | null>(null);

  const handleSelectedRow = (id: string, name: string) => {
    setSelectedRow({ name: name, varity_id: id });
  };

  const [openDeleteAlert, setOpenDeleteAlert] = useState<boolean>(false);
  const handleOpenDeleteAlert = (o: boolean) => {
    setOpenDeleteAlert(o);
  };

  const handleDeleteRow = () => {
    deleteItemFromCart.mutate(
      {
        cart_id: Number(id),
        variety_id: Number(selectedRow!.varity_id),
      },
      {
        onSuccess() {
          q.invalidateQueries({
            queryKey: [
              "useGetCartInfo",
              {
                cart_id: Number(id),
              },
            ],
          });
          showSuccess("آیتم با موفقیت از سبد خرید حذف شد.");
          handleOpenDeleteAlert(false);
        },

        onError() {
          showDanger("خطا در حذف آیتم از سبد خرید.");
        },
      },
    );
  };

  return (
    <div className="space-y-10">
      {openDeleteAlert && (
        <ConfirmAlert
          open={openDeleteAlert}
          pending={deleteItemFromCart.isPending || !selectedRow}
          setOpen={handleOpenDeleteAlert}
          title={`حذف آیتم ${selectedRow?.name} از سبد خرید شماره ${id}`}
          approveHandler={handleDeleteRow}
        />
      )}

      <h2 className="text-2xl font-bold"> جزئیات سبد خرید شماره {id} </h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-9">
        <div className="order-1 col-span-1 overflow-x-auto lg:col-span-6">
          <table className="w-max border-separate border-spacing-y-5 sm:w-full">
            <thead>
              <tr>
                <th className="text-start">محصول</th>
                <th className="text-start">قیمت واحد</th>
                <th className="w-24 text-center lg:text-start">تعداد</th>
                <th className="text-start"> قیمت کل </th>
              </tr>
            </thead>

            <tbody>
              {data!.data.map((item) => (
                <EditAbleCartListTableRow
                  key={item.id}
                  handleOpenDeleteAlert={handleOpenDeleteAlert}
                  handleSelectedRow={handleSelectedRow}
                  item={item}
                />
              ))}
            </tbody>
          </table>
        </div>

        <div className="order-2 col-span-1 lg:order-3 lg:col-span-6">
          <Button
            className="mx-auto flex content-center items-center gap-2"
            color="neutral"
            onClick={() => {
              navigate(`/?cart_id=${id}`);
            }}
          >
            اضافه کردن غذا جدید به سبد خرید <Plus className="size-5" />
          </Button>
        </div>

        <CartDetailSummary total={total} />
      </div>
    </div>
  );
}

export { EditAbleCartList };
