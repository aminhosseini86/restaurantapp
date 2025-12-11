import useRegister from "@/hooks/useRegister";
import { Outlet } from "react-router-dom";

function CommonAppEntryPage() {
  const { error, data } = useRegister();
  console.log("error : ", error);

  console.log("data : ", data);

  return (
    <div className="container">
      <Outlet />
    </div>
  );
}

export { CommonAppEntryPage };
