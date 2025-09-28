import { Checkbox, Box, IconButton, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Assignee from "../SideBar/Assignee";
import { Avatar } from "@mui/material";
import Divider from "@mui/material/Divider";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Badge from "@mui/material/Badge";

const TaskCard = (props) => {
  const { data, item, updateTodo } = props;
  const { isEditing, setIsEditing } = props;
  const { title, startDate, endDate, priority, assignee } = item || {};

  // const handleDelete = (id) => {
  //   const filteredData = data.filter((i) => i.id !== id);
  //   updateTodo(filteredData);
  // };

  // const handleUpdate = (e) => {
  //   const isChecked = e.target.checked;
  //   // const updatedItem = { ...item, isDone: isChecked };

  //   const newArray = data.map((i) => {
  //     if (i.id === item.id) {
  //       return { ...item, isDone: isChecked };
  //     } else return i;
  //   });

  //   updateTodo(newArray);
  // };

  // const handleDelete = (id) => {
  //   const filteredData = item.filter((i) => i.id !== id);
  //   updateTodo(filteredData);
  // };
  // const handleDelete = (id) => {
  //   const filteredData = data.filter((i) => i.id !== id);
  //   updateTodo(filteredData);
  // };

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
          // transform: "translateY(-1px);",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
          backgroundColor: "#ffffff14",
          borderColor: "#ffffff26",
        },
      }}
    >
      <Typography sx={{ marginTop: "10px" }}>{title || "Missing"}</Typography>
      {/* <Typography sx={{ fontSize: "16x" }}>{status || "missing"}</Typography> */}
      <Box>
        <Typography
          sx={{
            fontSize: "12px",
            backgroundColor: "red",
            display: "inline",
            padding: "2px 2px",
            borderRadius: "20px",
            textTransform: "uppercase",
          }}
        >
          {priority || "High"}
        </Typography>
        {/* </Box> */}
        <br />
        <Stack sx={{}}>
          {assignee ? (
            <Avatar sx={{ bgcolor: "blue" }}>
              {assignee ? assignee : "null"}
            </Avatar>
          ) : null}
        </Stack>
        {/* <Checkbox
        type="radio" 
        checked={item.isDone}
        icon={<RadioButtonUncheckedIcon />}
        style={{ marginLeft: "-15px" }}
        onChange={(e) => handleUpdate(e)}
      ></Checkbox> */}
        <Stack direction="row" spacing={1} sx={{ marginTop: "10px" }}>
          {startDate || endDate ? (
            <Stack
              sx={{ color: "#ffff", marginLeft: "10px", fontSize: "12px" }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {startDate && (
                  <Box sx={{ display: "flex" }}>
                    <CalendarMonthIcon sx={{ fontSize: "large" }} />
                    {startDate}
                  </Box>
                )}

                {endDate && (
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CalendarMonthIcon sx={{ fontSize: "large" }} />
                    {endDate || "missing"}
                  </Box>
                )}
              </Box>
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
