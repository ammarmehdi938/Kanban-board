import { Navigate, Outlet } from "react-router-dom";
import { Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const AuthGuard = ({ WrappedComponent }) => {
  const ProtectedRoute = () => {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("accessToken");

    return isLoggedIn ? <Outlet /> : navigate("/signin");
  };

  return (props) => {
    <Route element={<ProtectedRoute />}>
      <WrappedComponent {...props} />
    </Route>;
  };
};
