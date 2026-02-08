import Button from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { showSuccess } from "@/components/ui/toast";
import { useCreateNewAddress } from "@/hooks/address";
import { In_NewAddressSchema } from "@/types/address";
import { IconMapPin } from "@tabler/icons-react";
import { useQueryClient } from "@tanstack/react-query";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from "react-leaflet";

function LocationPicker({
  lat,
  lng,
  onChange,
  icon,
}: {
  lat: number;
  lng: number;
  onChange: (lat: number, lng: number) => void;
  icon: L.Icon;
}) {
  useMapEvents({
    click(e) {
      onChange(e.latlng.lat, e.latlng.lng);
    },
  });

  if (lat == null || lng == null) return null;

  return (
    <Marker position={[lat, lng]} icon={icon}>
      <Popup>موقعیت انتخاب‌شده</Popup>
    </Marker>
  );
}

function AddNewAddressDialog() {
  const queryClient = useQueryClient();
  const [open, setOpen] = useState<boolean>(false);

  const create = useCreateNewAddress();

  const form = useForm<In_NewAddressSchema>({
    defaultValues: {
      shipping_province_id: 13,
      shipping_city_id: 206,
      lat: 36.683,
      lan: 48.5087,
    },
  });

  const lat = form.watch("lat");
  const lan = form.watch("lan");

  const markerIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  const onSubmit = (e: In_NewAddressSchema) => {
    const formData = new FormData();
    Object.entries(e).forEach(([key, value]) => {
      formData.append(key, value);
    });

    create.mutate(formData, {
      onSuccess(data) {
        showSuccess(data.message);
        queryClient.invalidateQueries({
          queryKey: ["user-address"],
        });
      },

      onSettled() {
        setOpen(false);
      },
    });
  };

  useEffect(() => {
    if (open) {
      form.reset({
        shipping_province_id: 13,
        shipping_city_id: 206,
        lat: 36.683,
        lan: 48.5087,
      });
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex w-full content-center items-center justify-center gap-2 md:w-max"
          color="neutral"
        >
          <IconMapPin size={22} />
          اضافه کردن آدرس جدید
        </Button>
      </DialogTrigger>

      <DialogContent className="w-[min(95vw,600px)]" showCloseButton={false}>
        <DialogHeader className="flex flex-row content-center items-center justify-between">
          <DialogTitle className="text-sm md:text-base">
            ثبت آدرس جدید
          </DialogTitle>
          <DialogClose>
            <X className="size-4 md:size-5" />
          </DialogClose>
        </DialogHeader>

        <DialogDescription className="sr-only">
          DialogDescription
        </DialogDescription>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <Controller
            name="shipping_name"
            control={form.control}
            rules={{
              required: {
                value: true,
                message: "پر کردن این فیلد الزامی است.",
              },
            }}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor={field.name}
                  className="text-sm md:text-base"
                >
                  آدرس به نام{" "}
                </FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  className="border-[1px] border-solid border-gray-300 text-xs md:text-sm"
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                  placeholder="مثال : محمد قاسمی"
                />

                {fieldState.invalid && (
                  <FieldError
                    errors={[fieldState.error]}
                    className="text-xs md:text-sm"
                  />
                )}
              </Field>
            )}
          />

          <Controller
            name="shipping_address"
            control={form.control}
            rules={{
              required: {
                value: true,
                message: "پر کردن این فیلد الزامی است.",
              },
            }}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel
                  htmlFor={field.name}
                  className="text-sm md:text-base"
                >
                  جزئیات آدرس
                </FieldLabel>
                <Textarea
                  {...field}
                  id={field.name}
                  className="resize-none border-[1px] border-solid border-gray-300 text-xs md:text-sm"
                  rows={4}
                  aria-invalid={fieldState.invalid}
                  autoComplete="off"
                  placeholder="مثال : بلوار، خیابان  ،و...."
                />

                {fieldState.invalid && (
                  <FieldError
                    errors={[fieldState.error]}
                    className="text-xs md:text-sm"
                  />
                )}
              </Field>
            )}
          />

          <div className="space-y-2">
            <FieldLabel> انتخاب روی نقشه</FieldLabel>
            <div className="h-[300px] w-full overflow-hidden rounded-xl">
              <MapContainer
                center={[lat, lan]}
                zoom={13}
                style={{ height: "100%", width: "100%" }}
              >
                <TileLayer
                  attribution="&copy; OpenStreetMap contributors"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <LocationPicker
                  lat={lat}
                  lng={lan}
                  icon={markerIcon}
                  onChange={(lat, lng) => {
                    form.setValue("lat", lat, { shouldDirty: true });
                    form.setValue("lan", lng, { shouldDirty: true });
                  }}
                />
              </MapContainer>
            </div>
          </div>

          <Button className="w-full" disabled={create.isPending}>
            {create.isPending ? "درحال ثبت آدرس جدید..." : " ثبت آدرس جدید"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddNewAddressDialog;
