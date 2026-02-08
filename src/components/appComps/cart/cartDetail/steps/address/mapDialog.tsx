import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { X } from "lucide-react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function MapDialog({
  open,
  setOpen,
  mapLatLng,
}: {
  mapLatLng: [number, number];
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const markerIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[min(95vw,600px)]" showCloseButton={false}>
        <DialogHeader className="flex flex-row content-center items-center justify-between">
          <DialogTitle>آدرس کاربر : </DialogTitle>

          <DialogClose>
            <X />
          </DialogClose>
        </DialogHeader>
        <DialogDescription></DialogDescription>

        <div className="h-[550px] w-full overflow-hidden rounded-xl">
          <MapContainer
            center={mapLatLng}
            zoom={17}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={mapLatLng} icon={markerIcon}>
              <Popup>موقعیت انتخاب‌شده</Popup>
            </Marker>
          </MapContainer>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default MapDialog;
