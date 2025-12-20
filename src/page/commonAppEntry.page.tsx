import { Outlet } from "react-router-dom";

function CommonAppEntryPage() {
  // useRegister();

  return (
    <div className="container">
      <Outlet />
    </div>
  );
}

export { CommonAppEntryPage };
