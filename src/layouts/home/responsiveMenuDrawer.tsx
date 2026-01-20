import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { MenuIcon } from "lucide-react";

export default function ResponsiveMenuDrawer() {
  return (
    <Drawer>
      <DrawerTrigger>
        <MenuIcon className="relative top-[3px]" />
      </DrawerTrigger>
      <DrawerContent>64</DrawerContent>
    </Drawer>
  );
}
