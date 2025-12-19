import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import SideBar from "./sideBar";
import { Typography } from "@mui/material";

import { Box } from "@mui/material";

const Layout = ({ children }) => {
  // const isLoggedIn = sessionStorage.getItem("accessToken");

  // if (!isLoggedIn) {
  //   return <Navigate to="/signin" />;
  // }

  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <SideBar />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignContent: "space-around",
          alignItems: "center",
        }}
      >
        <Typography variant="h3">Header</Typography>
        <main>
          {children}
          <Typography variant="h1">Main Content</Typography>
        </main>
      </Box>
    </Box>
  );
};
export default Layout;
