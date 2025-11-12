import { Box, Stack, Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import { HorizontalRule } from "@mui/icons-material";
const TaskCard = (props) => {
  const { item, color } = props;
  const { title, Start_Date, End_Date, priority, assignee } = item || {};

  const formatDate = (dateString) => {
    if (!dateString) return "Missing";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short", // "Nov"
      day: "numeric", // "27"
      year: "numeric", // "2025"
    }).format(date);
  };

  return (
    <Box
      sx={{
        margin: "20px",
        backgroundColor: "#FFFFFF0D",

        borderRadius: "12px",
        padding: "8px",
        boxShadow: "0 2px 8px #00000033",
        border: "#FFFFFF1A",
        cursor: "pointer",
        "&:hover": {
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
          backgroundColor: "#ffffff14",
          borderColor: "#ffffff26",
        },
        "&:hover .Open_Icon": {
          visibility: "visible",
          opacity: 0.4,
        },
      }}
    >
      <Typography sx={{ marginTop: "10px" }}>{title || "Missing"}</Typography>

      <Box sx={{ marginTop: "10px" }}>
        <Typography
          sx={{
            fontSize: "12px",
            backgroundColor: `${color}`,
            display: "inline",
            padding: "2px 2px",
            borderRadius: "20px",
            textTransform: "uppercase",
            padding: "4px",
            marginTop: "20px",
          }}
        >
          {priority || "Missing"}
        </Typography>
        <br />
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Stack>

        <Stack sx={{ ml: "-18px", marginTop: "15px" }}>
          {assignee ? (
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Avatar sx={{ bgcolor: "#2563EB" }}>
                {assignee ? assignee : "null"}
              </Avatar>
              <Typography sx={{ fontWeight: "lighter", mt: "8px" }}>
                Assigned by {assignee}
              </Typography>
            </Box>
          ) : null}
        </Stack>
        <Stack direction="row" spacing={1} sx={{ marginTop: "10px" }}>
          {Start_Date || Start_Date ? (
            <Stack
              sx={{ color: "#ffff", marginLeft: "10px", fontSize: "12px" }}
            >
              <Box>
                {/* <HorizontalRule sx={{}}/> */}
                {Start_Date && (
                  <Box sx={{ display: "flex" }}>
                    <CalendarTodayOutlinedIcon sx={{ fontSize: "large" }} />
                    start:
                    {formatDate(Start_Date)}
                  </Box>
                )}
              </Box>

              {End_Date && (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <CalendarTodayOutlinedIcon sx={{ fontSize: "large" }} />
                  Due:{formatDate(End_Date)}
                </Box>
              )}
            </Stack>
          ) : null}

          <br />
          {/* </h2> */}

          {/* <Typography
          style={{
            marginTop: "30px",
            color: "#ffffff ",
            fontSize: "medium",
          }}
        >
          {" "}
          #reminder
        </Typography> */}

          {/* <Button>
          <DeleteIcon onClick={() => handleDelete(item.id)}></DeleteIcon>
        </Button> */}
        </Stack>
      </Box>
    </Box>
  );
};

export default TaskCard;
