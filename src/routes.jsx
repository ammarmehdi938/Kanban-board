import { Routes, Route, useLocation } from "react-router-dom";
import VerifyEmail from "./pages/verifyEmail/verifyEmail";
import SideBar from "./Components/sideBar";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import MainSideBar from "./Components/mainSide";
import ChangePassword from "./pages/changePassword/changePassword";
import ResetPassword from "./pages/resetPassword.jsx/resetPassword";
import ConfirmPassword from "./pages/confirmPassword.jsx/confirmPassword";
import ResetToken from "./pages/resetToken/resetToken";
import Kanban from "./pages/kanban/kanban";
import Workload from "./pages/Workload/Workload";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/reset-password" element={<ConfirmPassword />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/resettoken" element={<ResetToken />} />
      <Route path="/verified" element={<VerifyEmail />}></Route>
      <Route path="/workload" element={<Workload />}></Route>
      <Route path="/boards" element={<Kanban />} />
    </Routes>
  );
};
export default AppRoutes;
