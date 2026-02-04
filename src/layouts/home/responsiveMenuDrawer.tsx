import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { menuItems } from "./NavBar";

export default function ResponsiveMenuDrawer() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Drawer direction="top" open={open} onOpenChange={setOpen}>
      <DrawerTrigger>
        <MenuIcon className="relative top-[3px]" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex flex-row content-center items-center justify-between">
          <DrawerTitle className="text-start">منو</DrawerTitle>
          <DrawerClose>
            <X className="size-4 cursor-pointer opacity-50" />
          </DrawerClose>
        </DrawerHeader>

        <div className="space-y-4 px-4 pb-6">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `flex content-center items-center gap-2 ${isActive ? "text-p-red !font-bold" : "text-gray-500"}`
                }
                onClick={() => {
                  setOpen(false);
                }}
              >
                <Icon className="size-4" />
                <p className="text-sm">{item.title}</p>
              </NavLink>
            );
          })}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
