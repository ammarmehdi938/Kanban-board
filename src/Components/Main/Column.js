import { Box, Button, Stack } from "@mui/material";
import { useState } from "react";
import Title from "./Title";
import AddIcon from "@mui/icons-material/Add";
import { MuiColorInput } from "mui-color-input";
import DynamicTask from "./DynamicTask";

const Column = (props) => {
  const { createTask, setCreateTask } = props;
  const [addTask, setAddTask] = useState(false);

  const handleAddTask = () => {
    setAddTask(true);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
          width: "260px",
        }}
      >
        <AddIcon
          onClick={handleAddTask}
          sx={{ color: "#000000", fontSize: "100px" }}
        />
        {addTask ? (
          <Stack>
            <Title />
            <MuiColorInput
              sx={{ backgroundColor: "#233044", borderRadius: "20px" }}
            />
            <Button
              sx={{
                backgroundColor: "#233044",
                borderRadius: "20px",
                width: "226px",
              }}
            >
              Create Task
            </Button>
          </Stack>
        ) : null}
      </Box>

      {/* <Box
        sx={{
          width: "260px",
          padding: 2,
          borderRadius: "20px",
          backgroundColor: "#f0f0f0",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      > */}
        {/* <DynamicTask /> */}
      {/* </Box> */}
    </>
  );
};
export default Column;
