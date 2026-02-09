import Button from "@/components/ui/button";
import { useState } from "react";
import AddNewAddressDialog from "./addNewAddressDialog";
import { AddressList } from "./addressList";
import { In_CreateOrder } from "@/types/order";
import { useParams } from "react-router-dom";
import { useCreateOrderDto } from "@/hooks/order";

function Address() {
  const { id } = useParams<{ id: string }>();
  const [selectedAddress, setSelectedAddress] = useState<number>(-10);

  const handleSelectAddress = (id: number) => {
    setSelectedAddress(id);
  };

  const createOrder = useCreateOrderDto();

  const handleNextStep = () => {
    const date = new Date();

    const data: In_CreateOrder = {
      address_id: selectedAddress,
      cart_id: isNaN(Number(id)) ? 0 : Number(id),
      preferred_date: date.toLocaleDateString("en-CA"),
      preferred_finish: `${date.getHours().toString()}:${date.getMinutes().toString()}`,
      preferred_start: `${(date.getHours() + 1).toString()}:${date.getMinutes().toString()}`,
    };

    createOrder.mutate(data, {
      onSuccess(data) {
        console.log(data);
      },
      onError(error) {
        console.log(error);
      },
    });
    console.log(data);
  };

  return (
    <div className="space-y-8 rounded-3xl bg-white p-6 shadow-sm md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-base font-extrabold tracking-tight lg:text-2xl">
          لیست آدرس‌ها
        </h2>

        <AddNewAddressDialog />
      </div>

      <AddressList
        handleSelectAddress={handleSelectAddress}
        selectedAddress={selectedAddress}
      />

      <div className="flex content-center items-center justify-end pt-4">
        <Button
          className="h-12 w-full rounded-xl text-base font-bold shadow-md transition hover:shadow-lg md:w-max"
          onClick={handleNextStep}
          disabled={selectedAddress === -10}
        >
          ادامه فرآیند سفارش
        </Button>
      </div>
    </div>
  );
}

export { Address };
