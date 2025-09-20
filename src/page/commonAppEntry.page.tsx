import { Outlet } from "react-router-dom";

function CommonAppEntryPage() {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
}

export { CommonAppEntryPage };
