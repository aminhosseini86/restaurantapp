import { In_FoodsSliderProps } from "@/types/allfoods";
import { X } from "lucide-react";
import "swiper/css";
import "swiper/css/grid";
import { Autoplay, Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function FoodsSlider({ foods }: In_FoodsSliderProps) {
  //   const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);

  //   useEffect(() => {
  //     const handleResize = () => {
  //       setWindowHeight(window.innerHeight);
  //     };

  //     window.addEventListener("resize", handleResize);
  //     return () => window.removeEventListener("resize", handleResize);
  //   }, []);

  //   const getResponsiveConfig = () => {
  //     const height = windowHeight;

  //     if (height <= 600) {
  //       return {
  //         slidesPerView: 2,
  //         gridRows: 3,
  //         slideHeight: "calc((100% - 20px) / 3)",
  //       };
  //     } else if (height <= 768) {
  //       return {
  //         slidesPerView: 3,
  //         gridRows: 3,
  //         slideHeight: "calc((100% - 30px) / 3)",
  //       };
  //     } else if (height <= 1024) {
  //       return {
  //         slidesPerView: 3,
  //         gridRows: 3,
  //         slideHeight: "calc((100% - 40px) / 3)",
  //       };
  //     } else {
  //       return {
  //         slidesPerView: 4,
  //         gridRows: 4,
  //         slideHeight: "calc((100% - 50px) / 4)",
  //       };
  //     }
  //   };

  //   const responsiveConfig = getResponsiveConfig();

  return (
    <>
      <div
        className={`w-full`}
        style={{
          height: "calc(100vh - 110px)",
        }}
      >
        {foods.length > 0 ? (
          <Swiper
            // slidesPerView={responsiveConfig.slidesPerView}
            // grid={{
            //   rows: responsiveConfig.gridRows,
            // }}
            slidesPerView={3}
            grid={{
              rows: 3,
            }}
            loop={true}
            spaceBetween={20}
            speed={1500}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            modules={[Grid, Autoplay]}
            className="mx-auto size-full"
          >
            {foods.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    key={item.key}
                    className="rounded-8px flex flex-wrap gap-4 bg-white px-5 py-4"
                  >
                    <img src={item.image} className="rounded-8px size-20" />
                    <div className="space-y-4">
                      <h3 className="font-bold">{item.title}</h3>
                      <p>{item.description}</p>
                    </div>

                    <div className="h-0.5 w-full bg-gray-200"></div>
                    <div className="flex w-full content-center items-center justify-between">
                      <div>
                        {item.quantity > 0 ? (
                          <p className="flex content-center items-center gap-1.5">
                            <span className="text-sm">موجودی : </span>
                            <span className="text- font-bold">
                              {item.quantity}
                            </span>
                          </p>
                        ) : (
                          <div className="text-p-red rounded-8px border-p-red bg-p-red/10 flex content-center items-center gap-2 border-2 border-solid px-2 py-1">
                            <X className="size-4" />
                            <span className="text-sm font-bold">ناموجود</span>
                          </div>
                        )}
                      </div>

                      <p>
                        {item.price === 0 ? (
                          "قیمت نامشخص"
                        ) : (
                          <>
                            <span className="text-[17px] font-bold">
                              {item.price.toLocaleString()}{" "}
                            </span>{" "}
                            <span>تومان</span>
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default FoodsSlider;
