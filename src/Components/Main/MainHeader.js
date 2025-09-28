import { Box, Typography } from "@mui/material";

import MainContainerStyle from "./styles";
import { styled, createTheme, ThemeProvider, margin } from "@mui/system";
const MainHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "-20px",
      }}
    >
      <Typography sx={{ color: "#1B2635", fontSize: "20px" }}>Feb 4</Typography>
      <Typography style={{ color: "#ffffff", fontSize: "50px" }}>
        Good Morning
      </Typography>
      <Typography
        sx={{
          color: "#1B2635",
          fontSize: "20px",
        }}
      >
        What's your plan for today?
      </Typography>
    </Box>
  );
};

export default MainHeader;
