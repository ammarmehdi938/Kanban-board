import { Box, Typography } from "@mui/material";
import MainContainerStyle from "./styles";
import { styled, createTheme, ThemeProvider, margin } from "@mui/system";
import { useSelector } from "react-redux";
const MainHeader = () => {
  const count = useSelector((state) => state.count);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "-40px",
      }}
    >
      <Typography sx={{ color: "#ffffff", fontSize: "15px", opacity: "0.6 " }}>
        Feb 4
      </Typography>
      <h1>Counter: {count}</h1>
      <Typography
        style={{ color: "#ffffff", fontSize: "40px", fontWeight: "bolder" }}
      >
        Good Afternoon
      </Typography>
      <Typography
        sx={{
          color: "#ffffff",
          fontSize: "20px",
          opacity: "0.6",
        }}
      >
        What's your plan for today?
      </Typography>
    </Box>
  );
};

export default MainHeader;
