import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { In_Slider } from "@/types/slider";
import { Navigation } from "swiper/modules";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

function Slider({ data }: { data: In_Slider }) {
  if (data.slides.length > 0)
    return (
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation]}
        className="size-full"
      >
        {data.slides.map((item) => {
          return (
            <SwiperSlide className="w-full" key={item.id}>
              <Avatar className="!rounded-16px h-full w-full object-cover">
                <AvatarImage className="object-cover" src={item.media_url} />
              </Avatar>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );

  return <></>;
}

export default Slider;
