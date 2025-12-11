import image from "@/assets/image/logo.png";
import clsx from "clsx";
import { Home, ListCheck } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import LoginDialog from "./loginDialog";
import Profile from "./profile";

export default function NavBar() {
  const jwtValue = localStorage.getItem("jwt");

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
        "my-10 flex h-24 w-full content-center items-center justify-between rounded-2xl bg-white p-2.5 px-5 select-none",
      )}
    >
      <Link to="/" className="hidden md:block">
        <img src={image} alt="logo" className="size-14" />
      </Link>

      <div className="flex grow-1 content-center items-center gap-3 md:grow-0">
        {menuItems.map((items) => {
          const Icon = items.icon;
          return (
            <NavLink
              key={items.id}
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
      </div>

      {jwtValue ? <Profile /> : <LoginDialog />}
    </nav>
  );
}
