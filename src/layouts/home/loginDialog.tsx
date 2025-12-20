import Button from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { showSuccess } from "@/components/ui/toast";
import { useLoginSendOtp } from "@/hooks/useLoginSendOtp";
import useVerifyOtp from "@/hooks/useVerifyOtp";
import { X } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function LoginDialog() {
  const [open, setOpen] = useState<boolean>(false);
  const [status, setStatus] = useState<number>(1);

  useEffect(() => {
    setStatus(1);
  }, [open]);

  const handleSettingStatus = (id: number) => {
    setStatus(id);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>ثبت نام | ورود</Button>
      </DialogTrigger>

      <DialogContent
        className="w-[min(95vw,600px)] space-y-4"
        aria-describedby={undefined}
        showCloseButton={false}
        onEscapeKeyDown={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        {status === 1 ? (
          <SendOTP handleSettingStatus={handleSettingStatus} />
        ) : (
          <ConfirmOtp setOpen={setOpen} />
        )}
      </DialogContent>
    </Dialog>
  );
}

function SendOTP({
  handleSettingStatus,
}: {
  handleSettingStatus: (id: number) => void;
}) {
  const [phone, setPhone] = useState<string>("");
  const [_, setSearchParams] = useSearchParams();

  const sendOtp = useLoginSendOtp();

  const handleSendOtp = () => {
    const p = phone.split("-").join("");

    sendOtp.mutate(p, {
      onSuccess() {
        showSuccess("پیام با موفقیت ارسال شد.");
        setSearchParams({
          phone: p,
        });
        setTimeout(() => {
          handleSettingStatus(2);
        }, 200);
      },

      onError() {
        showSuccess("خطایی رخ داده است.");
      },
    });
  };

  return (
    <>
      <DialogHeader className="flex flex-row content-center items-center justify-between">
        <DialogTitle> ورود</DialogTitle>
        <DialogClose asChild>
          <X className="size-4 cursor-pointer" />
        </DialogClose>
      </DialogHeader>
      <div className="w-full">
        <Field>
          <FieldLabel
            htmlFor="phone_number"
            className="text-[15px] font-semibold"
          >
            شماره همراه
          </FieldLabel>
          <Input
            id="phone_number"
            placeholder="0903-136-1470"
            required
            value={phone}
            onChange={(e) => {
              let v = e.target.value.replace(/[^0-9]/g, "").slice(0, 11);
              if (v.length > 7)
                v = v.replace(/^(\d{4})(\d{3})(\d{0,4}).*$/, "$1-$2-$3");
              else if (v.length > 4)
                v = v.replace(/^(\d{4})(\d{0,3})/, "$1-$2");
              setPhone(v);
            }}
            className={`${phone.length > 0 ? "text-left" : "text-start"} border-2 border-solid text-[17px]`}
            inputMode="numeric"
            maxLength={13}
          />
        </Field>
      </div>
      <div>
        <Button
          className="w-full"
          onClick={handleSendOtp}
          disabled={sendOtp.isPending}
        >
          ارسال کد فعال سازی
        </Button>
      </div>
    </>
  );
}

function ConfirmOtp({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [counter, setCounter] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const [otpNumber, setOtpNumber] = useState<string>("");

  const sendOtp = useLoginSendOtp();
  const p = searchParams.get("phone");

  const handleResendOtp = () => {
    sendOtp.mutate(p!, {
      onSuccess() {
        showSuccess("پیام با موفقیت ارسال شد.");
        setCounter(180);
        setSearchParams({
          phone: p!,
        });
      },

      onError(error) {
        console.log(error);
      },
    });
  };

  const verify = useVerifyOtp();

  const handleVerifyOtp = () => {
    verify.mutate(
      {
        code: Number(otpNumber),
        phone: p!,
      },
      {
        onSuccess(data) {
          showSuccess("ورود شما با موفقیت بود.");

          if (data.token) {
            localStorage.setItem("jwt", data.data.api_token);
          }

          setTimeout(() => {
            setOpen(false);
            searchParams.delete("phone");
            setSearchParams({});
          }, 300);
        },
        onError() {
          showSuccess("خطایی رخ داده اصت.");
        },
      },
    );
  };

  useEffect(() => {
    setCounter(180);
  }, []);

  useEffect(() => {
    if (counter === 0) return;
    const timer = setTimeout(() => {
      setCounter((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [counter]);

  return (
    <>
      <DialogHeader className="flex flex-row content-center items-center justify-between">
        <DialogTitle> کد فعالسازی</DialogTitle>
        <DialogClose asChild>
          <X className="size-4 cursor-pointer" />
        </DialogClose>
      </DialogHeader>

      <div className="w-full">
        <Field>
          <FieldLabel
            htmlFor="otp"
            className="flex content-center items-center justify-between"
          >
            <span className="text-[15px]">
              کد فعالسازی ارسال شده را وارد کنید.
            </span>

            <span>
              {String(Math.floor(counter / 60)).padStart(2, "0")}:
              {String(counter % 60).padStart(2, "0")}
            </span>
          </FieldLabel>
          <Input
            id="otp"
            placeholder="****"
            required
            value={otpNumber}
            onChange={(e) => {
              setOtpNumber(e.target.value);
            }}
            className={`border-2 border-solid !py-1.5 text-center text-[20px]`}
            inputMode="numeric"
            maxLength={4}
          />
        </Field>
        {counter === 0 && (
          <p
            className="mt-3 cursor-pointer text-sm hover:underline"
            onClick={handleResendOtp}
          >
            ارسال مجدد
          </p>
        )}
      </div>
      <div>
        <Button
          className="w-full"
          onClick={handleVerifyOtp}
          disabled={verify.isPending}
        >
          تایید کد فعالسازی
        </Button>
      </div>
    </>
  );
}

export default LoginDialog;
