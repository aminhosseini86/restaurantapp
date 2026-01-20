import { AlertBox } from "@/components/ui/alertBox";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetCartInfo } from "@/hooks/cart";
import { setSessionStorage } from "@/services/storages";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartDetailSteps } from "./steps";

function CartDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data, isLoading, isError, isPending, error } = useGetCartInfo({
    cart_id: Number(id),
  });

  useEffect(() => {
    if (error) {
      setSessionStorage<number>("cartStepId", 1);
    }
  }, [error]);

  useEffect(() => {
    if (data && data?.data.length < 1) {
      setSessionStorage<number>("cartStepId", 1);
      navigate("/");
    }
  }, [data]);

  if (isLoading || isPending) {
    return <CartDetailSkeleton />;
  }

  if (isError) {
    if (error.response?.data.code === 404)
      return (
        <AlertBox variant="danger">{"چنین سبد خریدی وجود ندارد."}</AlertBox>
      );

    return (
      <AlertBox variant="danger">
        {error.response?.data.message || "خطایی رخ داده است."}
      </AlertBox>
    );
  }

  if (data && data.data.length > 0) {
    return <CartDetailSteps />;
  }

  return <></>;
}

function CartDetailSkeleton() {
  return (
    <div className="space-y-10">
      <Skeleton className="h-8 w-48" />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-9">
        <div className="col-span-1 overflow-x-auto lg:col-span-6">
          <div className="w-full border-separate border-spacing-y-5">
            <div className="flex justify-between px-4 pb-4">
              <Skeleton className="h-5 w-20" />
              <Skeleton className="h-5 w-20" />
              <Skeleton className="h-5 w-16" />
              <Skeleton className="h-5 w-20" />
            </div>

            <div className="space-y-5">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-12px flex items-center justify-between bg-white p-4"
                >
                  <div className="flex items-center gap-6">
                    <Skeleton className="size-[60px] rounded-sm lg:size-[90px]" />
                    <Skeleton className="h-5 w-32" />
                  </div>

                  <Skeleton className="h-5 w-24" />

                  <Skeleton className="h-5 w-10" />

                  <Skeleton className="h-5 w-24" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-3">
          <div className="rounded-12px w-full space-y-6 bg-white p-5 lg:mt-16">
            <div className="flex justify-center">
              <Skeleton className="h-6 w-32" />
            </div>

            <div className="space-y-5 border-t border-gray-100 pt-5">
              <div className="flex justify-between">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-24" />
              </div>
              <div className="flex justify-between border-t border-gray-100 pt-5">
                <Skeleton className="h-4 w-12" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>

            <Skeleton className="h-10 w-full rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartDetail;
