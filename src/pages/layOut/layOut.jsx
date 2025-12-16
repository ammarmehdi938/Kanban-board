import { Outlet, useLocation } from "react-router-dom";
import SideBar from "../sideBar/sideBar";

export default function Layout() {
  const location = useLocation();

  const hideSidebarRoutes = [
    "/",
    "/signup",
    "/signin",
    "/resetpassword",
    "/confirmpassword",
    "/resettoken",
    "/reset-password",
    "/verifyemail",
  ];

  const hideSidebar = hideSidebarRoutes.includes(
    location.pathname.toLowerCase()
  );

  return (
    <div>
      {!hideSidebar && <SideBar />}
      <Outlet />
    </div>
  );
}
