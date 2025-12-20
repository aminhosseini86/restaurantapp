function PoloApp() {
  return (
    <div className="my-10 flex h-[500px] content-center items-center justify-center">
      <div className="rounded-16px bg-p-red text-wh relative h-[250px] w-full p-20 text-white">
        <img
          src="vds"
          className="w- absolute top-1/2 left-10 h-[470px] w-[230px] -translate-y-1/2 rounded-2xl bg-amber-200"
          alt="vsd"
        />
        <div className="flex h-full flex-col justify-center gap-4">
          <h2 className="flex content-center items-center gap-2 text-2xl">
            دانلود اپلیکیشن اندورید
            <span className="text-3xl font-black">پلــــــــــــو</span>
          </h2>
          <p className="text-muted">
            با نصب اپلیکیشن پلو راحت تر سفارشتو ثبت کن و از غذات لذت ببر.
          </p>
        </div>
      </div>
    </div>
  );
}

export { PoloApp };
