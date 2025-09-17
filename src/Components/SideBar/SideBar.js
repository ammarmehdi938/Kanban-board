import Title from "./Title";
import StartDate from "./StartDate";
import EndDate from "./EndDate";
import Status from "./Status";
import Priority from "./Priority";
import Assignee from "./Assignee";
import { useState } from "react";
import { Button, Drawer, Box } from "@mui/material";
import { Slide } from "@mui/material";

// task = {
//   title: "task 1",
//   status: "In progress",
//   priority: "High",
//   startDate: "1st aug, 2025",
//   endDate: "31st aug, 2025",
//   assignee: "ammar",
// };
const SideBAR = (props) => {
  const { data, updateTodo, open, setOpen } = props;
  const [task, setTask] = useState({});

  const handleSave = () => {
    const newData = [...data, task];
    updateTodo(newData);
  };
  return open ? (
    <Drawer
      open={open}
      anchor="left"
      onClose={() => {
        console.log("closing");
        setOpen(false);
      }}
      variant="temporary"
      TransitionComponent={Slide}
      transitionDuration={3000}
      SlideProps={{
        timeout: 2000,
        direction: "left",
      }}
      ModalProps={{
        BackdropProps: {
          sx: {
            backdropFilter: "none",
            backgroundColor: "transparent",
          },
        },
      }}
      PaperProps={{
        sx: {
          width: "320px",
          backgroundColor: "#233044",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "320px",
          backgroundColor: "#1B2635",
          height: "100vh",
        }}
      >
        <Title
          task={task}
          setTask={setTask}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
        <StartDate task={task} setTask={setTask} />
        <EndDate task={task} setTask={setTask} />
        <Status task={task} setTask={setTask} />
        <Priority task={task} setTask={setTask} />
        <Assignee task={task} setTask={setTask} />
        <Button
          onClick={handleSave}
          sx={{
            color: "white",
            backgroundColor: "#233044",
            mt: "20px",
            borderRadius: "20px",
            width: "250px",
            // height:'56px',
            "&:hover": {
              border: "2px solid #19bb84",
              color: "#19bb84",
              boxShadow: "0 0 14px -4px #19bb84",
            },
          }}
        >
          Create Task
        </Button>
      </Box>
    </Drawer>
  ) : null;
};

export default SideBAR;
