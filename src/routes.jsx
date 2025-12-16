import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import VerifyEmail from "./pages/verifyEmail/verifyEmail";
import SideBar from "./pages/sideBar/sideBar";
import SignIn from "./pages/signIn/SignIn";
// import SignUp from "./pages/signup/SignUp";
import SignUp from "./pages/signUp/SignUp";

import ResetPassword from "./pages/resetPassword.jsx/resetPassword";
import ConfirmPassword from "./pages/confirmPassword.jsx/confirmPassword";
import ResetToken from "./pages/resetToken/resetToken";
import Kanban from "./pages/kanban/kanban";
import Layout from "./pages/layOut/layOut";
import ProtectedRoute from "./pages/utils/protectedRoute";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/reset-password" element={<ConfirmPassword />} />
      <Route path="/resettoken" element={<ResetToken />} />
      <Route path="/verified" element={<VerifyEmail />}></Route>
      <Route path="/sidebar" element={<SideBar />}></Route>
      <Route path="/boards" element={<Kanban />} />

      <Route path="/sidebar" element={<SideBar />}></Route>
      <Route path="/boards" element={<Kanban />} />
      <Route path="/sidebar" element={<SideBar />}></Route>
      <Route path="/boards" element={<Kanban />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/layout" element={<Layout />}></Route>
      </Route>
    </Routes>
  );
};
export default AppRoutes;
