import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import {
  CalendarToday,
  FilterList,
  Settings,
  AccessTime,
  ZoomIn,
  ExpandMore,
} from "@mui/icons-material";

const days = [
  "Mon 6",
  "Tue 7",
  "Wed 8",
  "Thu 9",
  "Fri 10",
  "Sat 11",
  "Sun 12",
  "Mon 13",
  "Tue 14",
  "Wed 15",
  "Thu 16",
  "Fri 17",
  "Sat 18",
  "Sun 19",
];

const rows = [1, 2, 3, 4, 5];

function MainGrid() {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        minWidth: 900,
      }}
    >
      {/* Top Controls */}
      <Box
        sx={{
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          borderBottom: "1px solid #e9e9e9",
          backgroundColor: "#fff",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          Resource Workload
        </Typography>

        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Typography variant="body2" sx={{ cursor: "pointer" }}>
            <ZoomIn fontSize="small" /> 2 Weeks
          </Typography>

          <Typography variant="body2" sx={{ cursor: "pointer" }}>
            <CalendarToday fontSize="small" /> Today
          </Typography>

          <Typography variant="body2" sx={{ cursor: "pointer" }}>
            <FilterList fontSize="small" /> Filters
          </Typography>

          <Typography variant="body2" sx={{ cursor: "pointer" }}>
            <AccessTime fontSize="small" /> Hours{" "}
            <ExpandMore fontSize="small" />
          </Typography>

          <Typography variant="body2">Unschedule</Typography>

          <IconButton size="small">
            <Settings fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* Month Row */}
      <Box
        sx={{
          px: 2,
          py: 1,
          borderBottom: "1px solid #e9e9e9",
          backgroundColor: "#fafafa",
        }}
      >
        <Typography variant="subtitle2" fontWeight={600}>
          June 2022
        </Typography>
      </Box>

      {/* Days Header */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: `repeat(${days.length}, 1fr)`,
          borderBottom: "1px solid #e9e9e9",
          backgroundColor: "#fff",
          position: "sticky",
          top: 56,
          zIndex: 9,
        }}
      >
        {days.map((day) => (
          <Box
            key={day}
            sx={{
              py: 1,
              textAlign: "center",
              fontSize: 12,
              fontWeight: 600,
              borderRight: "1px solid #f0f0f0",
            }}
          >
            {day}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default MainGrid;
