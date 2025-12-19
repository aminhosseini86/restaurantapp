import noOrder from "@/assets/image/no_order.svg";

export function CartNoFood() {
  return (
    <div className="flex w-full flex-col content-center items-center select-none">
      <img
        src={noOrder}
        className="size-[220px] md:size-[270px] lg:size-[318px]"
        alt="no-item-in-cart"
      />

      <h3 className="text-p-red text-base font-black">
        هنوز غذایی اضافه نکردی !
      </h3>
    </div>
  );
}
