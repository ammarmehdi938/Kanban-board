import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";

const MainHeader = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setTime(`${hours}:${minutes}`);
    };
  });
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = currentTime.toLocaleDateString("en-US", options);
  const now = new Date();
  const hour = now.getHours();
  console.log(hour);

  let greeting;

  if (hour >= 5 && hour <= 12) {
    greeting = "Good Morinng";
  } else if (hour > 12 && hour <= 16) {
    greeting = "Good AfterNoon";
  } else if (hour > 16 && hour <= 16) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }

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
        {/* <p>{currentDate}</p> */}
        {formattedDate}
      </Typography>

      <Typography
        style={{ color: "#ffffff", fontSize: "40px", fontWeight: "bolder" }}
      >
        {" "}
        {greeting}
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
