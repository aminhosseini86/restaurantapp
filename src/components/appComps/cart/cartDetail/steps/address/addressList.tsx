import { AlertBox } from "@/components/ui/alertBox";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAddress } from "@/hooks/address";
import clsx from "clsx";
import { useState } from "react";
import MapDialog from "./mapDialog";

function AddressListSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="flex gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4"
        >
          <Skeleton className="mt-1 h-4 w-4 rounded-full" />

          <div className="flex grow flex-col gap-2">
            <div className="flex items-center justify-between gap-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-3 w-20" />
            </div>

            <Skeleton className="h-3 w-full" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function AddressList({
  selectedAddress,
  handleSelectAddress,
}: {
  selectedAddress: number;
  handleSelectAddress: (id: number) => void;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpenMap = (open: boolean) => {
    setOpen(open);
  };

  const [mapLatLng, setMapLatLng] = useState<[number, number]>([
    36.683, 48.5087,
  ]);

  const handleMapLatLng = (lat: number, lng: number) => {
    setMapLatLng([lat, lng]);
  };

  const { data, isError, isLoading, isPending, error } = useGetAddress();

  if (isLoading || isPending) return <AddressListSkeleton />;

  if (isError) {
    return (
      <AlertBox variant="danger">
        {error.response?.data.message ||
          "خطایی رخ در دریافت آدرس ها رخ داده است."}
      </AlertBox>
    );
  }

  if (data && data.data.length > 0) {
    return (
      <>
        <MapDialog open={open} setOpen={handleOpenMap} mapLatLng={mapLatLng} />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {data.data.map((address) => {
            const isSelected = selectedAddress === address.id;

            return (
              <div
                key={address.id}
                onClick={() => handleSelectAddress(address.id)}
                className={clsx(
                  "group flex cursor-pointer gap-3 rounded-xl border p-4 transition-all duration-200",
                  "hover:-translate-y-[2px]",
                  isSelected
                    ? "border-p-red bg-p-red/5 ring-p-red shadow-sm ring-1"
                    : "border-gray-200 bg-gray-50",
                )}
              >
                <div
                  className={clsx(
                    "mt-1 h-4 w-4 rounded-full border-2",
                    isSelected
                      ? "border-p-red bg-p-red"
                      : "border-gray-300 group-hover:border-gray-400",
                  )}
                />

                <div className="flex grow flex-col gap-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-bold md:text-base">
                      {address.name}
                    </p>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMapLatLng(
                          Number(address.lat),
                          Number(address.lan),
                        );
                        handleOpenMap(true);
                      }}
                      className="text-p-red text-xs font-medium hover:underline"
                    >
                      مشاهده روی نقشه
                    </button>
                  </div>

                  <p className="text-xs leading-relaxed text-gray-500 md:text-sm">
                    {address.address}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  if (data && data.data.length === 0) {
    return (
      <AlertBox variant="warning">آدرسی تاکنون برای شما ثبت نشده است.</AlertBox>
    );
  }
}
