import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { Footer } from "./footer";

export default function HomeLayout() {
  return (
    <>
      <NavBar />

      <div className="my-10">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
