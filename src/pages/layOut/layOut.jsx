import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import N_TaskSideBar from "./N-TaskComponents/N_TaskSideBar";
import SignIn from "./signIn/SignIn";
import SignUp from "./signUp/SignUp";
import ForgotPassword from "./forgotPassword/ForgotPassword";
import ResetPassword from "./resetPassword/ResetPassword";
import Kanban from "./kanban/Kanban";

export default function Layout() {
  const location = useLocation();

  // Axios interceptor
  useEffect(() => {
    axios.interceptors.request.use((request) => {
      console.log("Starting Request", request);
      return request;
    });
  }, []);

  // Routes where sidebar should NOT appear
  const hideSidebarRoutes = [
    "/",
    "/signup",
    "/signin",
    "/forgotpassword",
    "/resetpassword",
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
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />

          {/* Sidebar routes */}
          <Route path="/kanban" element={<Kanban />} />
        </Routes>
      </div>
    </div>
  );
}
F;
