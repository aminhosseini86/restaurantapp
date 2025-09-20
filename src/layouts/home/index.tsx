import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function HomeLayout() {
  return (
    <>
      <NavBar />
      <div className="mt-10">
        <Outlet />
      </div>
    </>
  );
}
