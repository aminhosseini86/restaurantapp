import clsx from "clsx";

export default function Header() {
  return (
    <header
      className={clsx(
        "bg-p-red/30 my-10 w-full rounded-t-3xl",
        "h-[150px] sm:h-[180px] md:h-[280px] lg:h-[360px] xl:h-[440px] 2xl:h-[480px]",
      )}
      style={{ clipPath: "ellipse(100% 100% at 50% 0%)" }}
    ></header>
  );
}
