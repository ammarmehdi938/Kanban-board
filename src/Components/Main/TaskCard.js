import { Checkbox, Box, IconButton, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Assignee from "../SideBar/Assignee";
import { Avatar } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const TaskCard = (props) => {
  const { data, item, updateTodo } = props;
  const { isEditing, setIsEditing } = props;
  const { title, startDate, endDate, status, priority, assignee } = item || {};


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
    <div
      style={{
        color: "#ffffff",
        width: "25%",
        marginLeft: "20px"
      }}
    >
      <Stack style={{ fontSize: "larger" }}>{status || "missing"}</Stack>
      <Box
        sx={{
          backgroundColor: "#1B2635",
        }}
      >
        {/* //   <Box sx={{ marginTop: '20px' }}> */}
        <Stack
          sx={{
            paddingLeft: "5px",
            paddingRight: "5px",
            marginTop: "10px",
            marginLeft: "10px",
            display: "inline-block",
            borderRadius: "10px",
            backgroundColor: "blue",
          }}
        >
          {priority || "High"}
        </Stack>
        {/* </Box> */}

        <Stack sx={{ marginTop: "10px", marginLeft: "10px" }}>
          {title || "create overFlow"}
        </Stack>{" "}
        <br />
        <Stack sx={{ marginLeft: "10px" }}>
          {assignee ? <Avatar sx={{ bgcolor: "blue" }}>{assignee ? assignee : 'null'}</Avatar>
            : null}
        </Stack>

        {/* <Checkbox
        type="radio" 
        checked={item.isDone}
        icon={<RadioButtonUncheckedIcon />}
        style={{ marginLeft: "-15px" }}
        onChange={(e) => handleUpdate(e)}
      ></Checkbox> */}
        <Stack direction="row" spacing={1} sx={{ marginTop: "10px", marginLeft: '10px' }}>
          <Stack sx={{ color: "white", marginLeft: "10px", fontSize: '12px' }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box sx={{ display: "flex" }}>
                <CalendarMonthIcon sx={{ fontSize: 'large' }} />
                &nbsp;
                {startDate || "missing"}
              </Box>
              &nbsp; -
              <Box sx={{ display: "flex", alignItems: 'center' }}>
                <CalendarMonthIcon sx={{ fontSize: 'large' }} />
                &nbsp;
                {endDate || "missing"}
              </Box>
            </Box>
          </Stack>

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
    </div>
  );
};

export default TaskCard;
