import { AlertBox } from "@/components/ui/alertBox";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetSlider } from "@/hooks/useGetSlider";
import clsx from "clsx";
import Slider from "./slider";

export default function Header() {
  const { data, isPending, isLoading } = useGetSlider();

  if (data && data.code >= 400 && data.code <= 499) {
    return (
      <AlertBox variant="danger">
        {data.message || "خطایی رخ داده است."}
      </AlertBox>
    );
  }

  if (isLoading || isPending) {
    return (
      <Skeleton
        className={clsx(
          "my-10 w-full rounded-3xl",
          "h-[150px] sm:h-[180px] md:h-[280px] lg:h-[360px] xl:h-[440px] 2xl:h-[480px]",
        )}
      />
    );
  }

  if (data && data.code >= 200 && data.code <= 299)
    return (
      <header
        className={clsx(
          "my-10 w-full overflow-hidden rounded-3xl",
          "h-[150px] sm:h-[180px] md:h-[280px] lg:h-[360px] xl:h-[440px] 2xl:h-[480px]",
        )}
        style={{ clipPath: "ellipse(100% 100% at 50% 0%)" }}
      >
        <Slider data={data.data.slider} />
      </header>
    );

  return <></>;
}
