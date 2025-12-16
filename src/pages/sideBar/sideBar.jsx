import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Avatar,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/ShowChart";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import TableChartIcon from "@mui/icons-material/TableChart";
import TaskIcon from "@mui/icons-material/Checklist";
import HandshakeIcon from "@mui/icons-material/Handshake";
import TimerIcon from "@mui/icons-material/Timer";
import BugReportIcon from "@mui/icons-material/BugReport";
import SettingsIcon from "@mui/icons-material/Tune";
import PhoneIcon from "@mui/icons-material/Phone";

function SideBar() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "260px",
        bgcolor: "#15202c",
        color: "#c6c9cb",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid #1f2b36",
        fontFamily: "Poppins, sans-serif",
        p: 1,
      }}
    >
      {/* Logo */}
      <Box sx={{ textAlign: "center", mb: 1 }}>
        <img
          src="nTask Logo Full-512.png"
          alt="logo"
          style={{ height: 26, width: 92 }}
        />
      </Box>

      <Divider sx={{ bgcolor: "#1b2f3d" }} />

      {/* Organization Section */}
      <Box sx={{ px: 2, mt: 1 }}>
        {/* Organization */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            bgcolor: "#2d3742",
            p: 1,
            borderRadius: 1,
            mb: 1,
          }}
        >
          <Avatar sx={{ bgcolor: "#f89615", color: "#fff" }}>A</Avatar>
          <Box sx={{ flexGrow: 1, ml: 2 }}>
            <Typography sx={{ fontSize: 12, color: "#8ea2b1" }}>
              Organization
            </Typography>
            <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
              Acme Corporation
            </Typography>
          </Box>
          <Typography>{">"}</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            bgcolor: "#2d3742",
            p: 1,
            borderRadius: 1,
          }}
        >
          <Avatar sx={{ bgcolor: "#f0ca2d", color: "#000" }}>B</Avatar>
          <Box sx={{ flexGrow: 1, ml: 2 }}>
            <Typography sx={{ fontSize: 12, color: "#8ea2b1" }}>
              Workspace
            </Typography>
            <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
              Business Development
            </Typography>
          </Box>
          <Typography>{">"}</Typography>
        </Box>
      </Box>

      <List sx={{ mt: 1 }}>
        <ListItemButton>
          <ListItemIcon sx={{ color: "#90959b" }}>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Reporting" />
        </ListItemButton>

        <ListItemButton component={Link} to="/Resource Workload">
          <ListItemIcon sx={{ color: "#90959b" }}>
            <PeopleAltIcon />
          </ListItemIcon>
          <ListItemText primary="Resource Workload" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ color: "#90959b" }}>
            <FlashOnIcon />
          </ListItemIcon>
          <ListItemText primary="Quick Access" />
        </ListItemButton>

        <Divider sx={{ bgcolor: "#1b2f3d", my: 1 }} />

        <ListItemButton>
          <ListItemIcon sx={{ color: "#90959b" }}>
            <PeopleAltIcon />
          </ListItemIcon>
          <ListItemText primary="Project" />
        </ListItemButton>

        <ListItemButton component={Link} to="/boards">
          <ListItemIcon sx={{ color: "#90959b" }}>
            <TableChartIcon />
          </ListItemIcon>
          <ListItemText primary="Boards" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ color: "#90959b" }}>
            <TaskIcon />
          </ListItemIcon>
          <ListItemText primary="Tasks" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ color: "#90959b" }}>
            <HandshakeIcon />
          </ListItemIcon>
          <ListItemText primary="Meetings" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ color: "#90959b" }}>
            <TimerIcon />
          </ListItemIcon>
          <ListItemText primary="Timesheets" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ color: "#90959b" }}>
            <BugReportIcon />
          </ListItemIcon>
          <ListItemText primary="Issues" />
        </ListItemButton>

        <Divider sx={{ bgcolor: "#1b2f3d", my: 1 }} />

        <ListItemButton component={Link} to="/SignUp">
          <ListItemIcon sx={{ color: "#90959b" }}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Sign Up" />
        </ListItemButton>
      </List>

      <Button
        variant="contained"
        sx={{
          bgcolor: "#f0ca2d",
          color: "#000",
          fontWeight: 600,
          alignSelf: "center",
          px: 6,
          py: 1,
          mt: "auto",
          mb: 1,
          "&:hover": { bgcolor: "#e2ba22" },
        }}
        startIcon={<PhoneIcon />}
      >
        Talk to Sales
      </Button>

      {/* Footer Profile */}
      <Box sx={{ display: "flex", alignItems: "center", px: 2, mb: 1 }}>
        <Avatar sx={{ bgcolor: "#20cc90", color: "#fff" }}>FL</Avatar>
        <Box sx={{ ml: 2 }}>
          <Typography sx={{ fontSize: 14 }}>Frank Lewis</Typography>
          <Typography sx={{ fontSize: 12, color: "#8ea2b1" }}>
            Team Owner
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default SideBar;
