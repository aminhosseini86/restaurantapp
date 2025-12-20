import noOrder from "@/assets/image/no_order.svg";
import Button from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CartNoFood() {
  return (
    <div className="mx-auto flex w-max flex-col content-center items-center select-none">
      <img
        src={noOrder}
        className="size-[220px] md:size-[270px] lg:size-[318px]"
        alt="no-item-in-cart"
      />

      <h3 className="text-p-red text-base font-black">
        هنوز غذایی اضافه نکردی !
      </h3>

      <Link className="mt-5 w-full" to="/#menu">
        <Button className="w-full">بازگشت به منو</Button>
      </Link>
    </div>
  );
}
