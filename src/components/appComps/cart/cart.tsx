import { AlertBox } from "@/components/ui/alertBox";
import { useGetNotCompletedCart } from "@/hooks/cart";
import CartListCard from "./cartListCard";
import { CartNoFood } from "./cartNoFood";
import { Skeleton } from "@/components/ui/skeleton";

function CartsLists() {
  const { data, isPending, isLoading, isError, error } =
    useGetNotCompletedCart();

  if (isError) {
    <AlertBox variant="danger">
      {error.response?.data.message || "خطایی رخ داده است."}
    </AlertBox>;
  }

  if (isLoading || isPending) {
    return <CartListSkeleton />;
  }

  if (data && data.data.length === 0) {
    return <CartNoFood />;
  }

  if (data && data.data.length >= 0) return <CartListCard data={data.data} />;

  return <></>;
}

function CartListSkeleton() {
  return (
    <div className="my-9 mb-[200px] space-y-6">
      <Skeleton className="h-7 w-48" />

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="rounded-8px col-span-1 flex content-center items-center justify-between bg-white px-4 py-3"
          >
            <Skeleton className="h-5 w-32" />

            <Skeleton className="h-9 w-36 rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartsLists;
