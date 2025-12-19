import React from "react";
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Divider,
  Grid,
} from "@mui/material";
import {
  KeyboardArrowDown,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";

function MainSideBar() {
  const developers = [
    {
      avatar: "Fl",
      name: "Developer Name",
      role: "Role",
      capacity: "118h / 80h",
    },
    {
      avatar: "Fl",
      name: "Developer Name",
      role: "Role",
      capacity: "118h / 80h",
    },
    {
      avatar: "Fl",
      name: "Developer Name",
      role: "Role",
      capacity: "118h / 80h",
    },
    {
      avatar: "Fl",
      name: "Developer Name",
      role: "Role",
      capacity: "118h / 80h",
    },
    {
      avatar: "Fl",
      name: "Developer Name",
      role: "Role",
      capacity: "118h / 80h",
    },
  ];

  return (
    <Box
      sx={{
        width: 300,
        height: "100%",
        mt: 2,
        borderRight: "1px solid #e9e9e9",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <Grid
        container
        alignItems="center"
        sx={{
          height: 60,
          px: 1,
          borderBottom: "1px solid #e9e9e9",
          fontWeight: 600,
        }}
      >
        <Grid item xs="auto">
          <KeyboardArrowDown />
        </Grid>
        <Grid item xs>
          <Typography variant="subtitle1">Resources (4)</Typography>
        </Grid>
        <Grid item xs="auto">
          <KeyboardArrowDown />
        </Grid>
        <Grid item xs="auto">
          <IconButton
            sx={{
              height: 28,
              width: 28,
              border: "1px solid #dcdcdc",
            }}
          >
            <KeyboardArrowLeft fontSize="small" />
          </IconButton>
        </Grid>
      </Grid>

      {/* Developers */}
      {developers.map((dev, index) => (
        <Grid
          container
          key={index}
          alignItems="center"
          sx={{ px: 1, height: 90, borderBottom: "1px solid #e9e9e9", gap: 1 }}
        >
          <Grid item xs="auto">
            <KeyboardArrowRight />
          </Grid>
          <Grid item xs="auto">
            <Avatar
              sx={{
                bgcolor: "#ffcc00",
                width: 38,
                height: 38,
                fontWeight: 700,
              }}
            >
              {dev.avatar}
            </Avatar>
          </Grid>
          <Grid item xs>
            <Typography variant="body2" fontWeight={600}>
              {dev.name}
            </Typography>
            <Typography variant="caption" display="block">
              {dev.role}
            </Typography>
            <Typography variant="caption" display="block">
              Capacity: {dev.capacity}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
}

export default MainSideBar;
