import eNamad1 from "@/assets/image/e-namad1.png";
import eNamad2 from "@/assets/image/e-namad2.png";
import logo from "@/assets/image/logo.png";
import { Clock, Copyright, MailOpen, MapPin, Phone } from "lucide-react";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import { useGetSlider } from "@/hooks/useGetSlider";
import { AlertBox } from "@/components/ui/alertBox";
import { Skeleton } from "@/components/ui/skeleton";
import { faToEnDigits } from "@/utils/faToEnDigits";
import { formatPhone } from "@/utils/formatPhone";

function Footer() {
  const { data, isLoading, isPending, isError, error } = useGetSlider();

  if (isPending || isLoading) return <FooterSkeleton />;

  if ((data && data.code >= 400 && data.code <= 499) || isError) {
    return (
      <AlertBox variant="danger">
        {data?.message || error?.response?.data.message || "خطایی رخ داده است."}
      </AlertBox>
    );
  }
  {
    /* <a href="whatsapp://send?abid=phonenumber&text=Hello%2C%20World!">Send Message</a> */
  }

  if (data && data.code >= 200 && data.code <= 299) {
    return (
      <>
        <footer className="rounded-16px mb-5 w-full space-y-8 bg-white p-5 pb-8">
          <div className="flex w-full content-center items-center justify-between">
            <div className="flex content-center items-center gap-3">
              <img src={logo} className="size-14" alt="logo" />
              <p className="text-p-red text-2xl font-black">پلـــو</p>
            </div>

            <p className="hidden md:block">
              <span>تماس با پلو</span> <span> | </span>
              <a
                href="tel:02433462666"
                className="font-bold hover:text-blue-700 hover:underline"
                dir="ltr"
              >
                024 3346 2666
              </a>
            </p>
          </div>

          <div className="grid w-full grid-cols-2 gap-8 lg:grid-cols-12">
            <div className="col-span-2 space-y-4 lg:col-span-4">
              <p className="text-lg font-extrabold"> درباره پلــو </p>

              <p className="text-justify text-black/65">
                به رستوران ما خوش آمدید! ما با محیط دلنشین، غذاهای خوشمزه و
                خدمات عالی، تجربه‌ای لذت‌بخش برای شما فراهم می‌کنیم. همیشه
                خوشحال می‌شویم که شما را در میان مهمانانمان دیدار کنیم. با فضایی
                آرامش بخش و غذاهایی متنوع و لذیذ، رستوران ما مناسبترین انتخاب
                برای تمام لحظات شاد و لذت بخش شماست.
              </p>

              <div className="flex content-center items-center justify-center gap-10 md:mt-10">
                <img
                  src={eNamad1}
                  className="w-[75px] lg:w-[130px]"
                  alt="eNamad1"
                />
                <img
                  src={eNamad2}
                  className="w-[75px] lg:w-[130px]"
                  alt="eNamad2"
                />
              </div>
            </div>

            <div className="col-span-2 space-y-4 md:col-span-1 lg:col-span-2">
              <p className="text-lg font-extrabold">لینک های مفید</p>

              <ul className="space-y-2 text-black/65 *:hover:cursor-pointer">
                <li>یه چیز الکی الکی</li>
                <li>یه چیز الکی الکی</li>
                <li>یه چیز الکی الکی</li>
                <li>یه چیز الکی الکی</li>
                <li>یه چیز الکی الکی</li>
              </ul>
            </div>

            <div className="col-span-2 space-y-4 md:col-span-1 lg:col-span-2">
              <p className="text-lg font-extrabold">لینک های مفید</p>

              <ul className="space-y-2 text-black/65 *:hover:cursor-pointer">
                <li>یه چیز الکی الکی</li>
                <li>یه چیز الکی الکی</li>
                <li>یه چیز الکی الکی</li>
                <li>یه چیز الکی الکی</li>
                <li>یه چیز الکی الکی</li>
              </ul>
            </div>

            <div className="col-span-2 space-y-4 lg:col-span-4">
              <p className="text-lg font-extrabold">اطلاعات تماس با ترنج</p>

              <ul className="space-y-4 text-black/65">
                <li className="flex content-center items-center gap-2">
                  <MapPin />
                  <p className="text-[15px]">
                    زنجان اتوبان ۲۲ بهمن جنب پل قائم رستوران پلو
                  </p>
                </li>

                <li className="flex content-center items-center gap-2">
                  <Phone />
                  <p className="text-[15px]">
                    <a
                      href={`tel:${faToEnDigits(data.data.global_info.phone)}`}
                      dir="ltr"
                    >
                      {formatPhone(data.data.global_info.phone)}
                    </a>
                  </p>
                </li>

                <li className="flex content-center items-center gap-2">
                  <Clock />
                  <p className="text-[15px]">{data.data.global_info.twitter}</p>
                </li>

                <li className="flex content-center items-center gap-2">
                  <MailOpen />
                  <a
                    href={`tel:${data.data.global_info.email}`}
                    target="_blank"
                    dir="ltr"
                  >
                    {data.data.global_info.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>

        <div className="rounded-16px mb-5 flex w-full content-center items-center justify-between bg-white p-5">
          <p className="flex content-center items-center gap-2 text-black/65">
            تمامی حقوق برای رستوران پلو محفوظ می باشد.
            <Copyright className="size-5" />
          </p>

          <div className="flex content-center items-center gap-1 text-[40px] text-black/65">
            <a href="#">
              <IconBrandInstagram size={29} className="hover:text-rose-500" />
            </a>
            <a href="#">
              <IconBrandLinkedin size={29} className="hover:text-blue-600" />
            </a>
            <a href="#">
              <IconBrandWhatsapp size={29} className="hover:text-green-500" />
            </a>
            <a href="#">
              <IconBrandTelegram size={29} className="hover:text-blue-600" />
            </a>
          </div>
        </div>
      </>
    );
  }

  return <></>;
}

function FooterSkeleton() {
  return (
    <>
      <footer className="mb-5 w-full space-y-8 rounded-2xl bg-white p-5 pb-8">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="h-9 w-9 rounded-full" />
            <Skeleton className="h-6 w-28" />
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-4" />
          </div>
        </div>

        <div className="grid w-full grid-cols-2 gap-8 lg:grid-cols-12">
          <div className="col-span-2 space-y-4 lg:col-span-4">
            <Skeleton className="h-6 w-40" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[90%]" />
              <Skeleton className="h-4 w-[80%]" />
            </div>

            <div className="flex items-center justify-center gap-6 md:mt-4">
              <Skeleton className="h-[38px] w-[75px]" />
              <Skeleton className="h-[38px] w-[75px]" />
            </div>
          </div>

          <div className="col-span-2 space-y-4 md:col-span-1 lg:col-span-2">
            <Skeleton className="h-6 w-28" />
            <ul className="space-y-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <li key={i}>
                  <Skeleton className="h-4 w-[70%]" />
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 space-y-4 md:col-span-1 lg:col-span-2">
            <Skeleton className="h-6 w-28" />
            <ul className="space-y-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <li key={i}>
                  <Skeleton className="h-4 w-[70%]" />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="col-span-2 space-y-4 lg:col-span-4">
            <Skeleton className="h-6 w-40" />

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Skeleton className="h-5 w-5 rounded-full" />
                <Skeleton className="h-4 w-[70%]" />
              </li>

              <li className="flex items-center gap-2">
                <Skeleton className="h-5 w-5 rounded-full" />
                <Skeleton className="h-4 w-[50%]" />
              </li>

              <li className="flex items-center gap-2">
                <Skeleton className="h-5 w-5 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[80%]" />
                  <Skeleton className="h-4 w-[70%]" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="mb-5 flex w-full items-center justify-between rounded-2xl bg-white p-5">
        <div className="flex items-center gap-2 text-black/65">
          <Skeleton className="h-4 w-[280px]" />
        </div>

        <div className="flex items-center gap-3 text-[28px]">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-7 w-7 rounded-full" />
          ))}
        </div>
      </div>
    </>
  );
}

export { Footer };
