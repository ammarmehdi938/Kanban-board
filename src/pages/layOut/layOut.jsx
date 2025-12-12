import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import N_TaskSideBar from "../sideBar/sideBar";
import SignIn from "../signIn/SignIn";
import SignUp from "../signUp/SignUp";
import ResetPassword from "../resetPassword.jsx/resetPassword";
import ConfirmPassword from "../confirmPassword.jsx/confirmPassword";
import ResetToken from "../resetToken/resetToken";
import Kanban from "../kanban/kanban";
import ProtectedRoute from "../utils/protectedRoute";

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
  ];

  const hideSidebar = hideSidebarRoutes.includes(
    location.pathname.toLowerCase()
  );

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: hideSidebar ? "1fr" : "260px 1fr",
        height: "100vh",
      }}
    >
      {!hideSidebar && <N_TaskSideBar />}

      <div style={{ overflow: "auto" }}>
        <Routes>
          {/* Auth routes */}
          <Route path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/reset-password" element={<ConfirmPassword />} />
          <Route path="/resettoken" element={<ResetToken />} />

          {/* Sidebar routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/kanban" element={<Kanban />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
