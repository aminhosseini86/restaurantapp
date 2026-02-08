import Button from "@/components/ui/button";
import { useState } from "react";
import AddNewAddressDialog from "./addNewAddressDialog";
import { AddressList } from "./addressList";

function Address() {
  const [selectedAddress, setSelectedAddress] = useState<number>(-10);

  const handleSelectAddress = (id: number) => {
    setSelectedAddress(id);
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
        <Button className="h-12 w-full rounded-xl text-base font-bold shadow-md transition hover:shadow-lg md:w-max">
          ادامه فرآیند سفارش
        </Button>
      </div>
    </div>
  );
}

export { Address };
