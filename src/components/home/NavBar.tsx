import image from "@/assets/image/logo.png";
import clsx from "clsx";
import { Home, ListCheck } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  const menuItems = [
    {
      id: 1,
      path: "/",
      icon: Home,
      title: "خانه",
    },
    {
      id: 2,
      path: "/orders",
      icon: ListCheck,
      title: "سفارشات",
    },
  ];

  return (
    <nav
      className={clsx(
        "my-8 flex h-24 w-full content-center items-center justify-between rounded-2xl bg-white p-2.5 px-5 select-none",
        // "border-2 border-solid border-gray-200/70",
      )}
    >
      <div className="flex content-center items-center gap-4">
        <Link to="/">
          <img src={image} alt="logo" className="size-14" />
        </Link>

        <>
          {menuItems.map((items) => {
            const Icon = items.icon;
            return (
              <NavLink
                to={items.path}
                className={({ isActive }) =>
                  `flex content-center items-center gap-1.5 text-center ${isActive ? "text-p-red !font-bold" : "text-gray-500"}`
                }
              >
                <Icon className="mx-auto size-5" />
                <p>{items.title}</p>
              </NavLink>
            );
          })}
        </>
      </div>

      <div>3</div>
    </nav>
  );
}
