import { Box, Button, Stack } from "@mui/material";
import { useState } from "react";
import Title from "./Title";
import AddIcon from "@mui/icons-material/Add";
import { MuiColorInput } from "mui-color-input";

const Column = (props) => {
  const { handleCreateTask } = props;
  const [addTask, setAddTask] = useState(false);
  const [color, setColor] = useState("#000000");

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

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
          alignItems: "center",
          width: "260px",
          overflowX: "auto",
        }}
      >
        <AddIcon
          onClick={handleAddTask}
          sx={{ color: "#000000", fontSize: "100px" }}
        />
        {addTask ? (
          <Box>
            <Title sx={{ height: "40px" }} />

            <Stack>
              <MuiColorInput
                value={color}
                onChange={handleColorChange}
                sx={{
                  backgroundColor: "#233044",
                  borderRadius: "20px",
                  width: "226px",
                  height: "40px",
                }}
              />
            </Stack>
            <Stack>
              <Button
                onClick={handleCreateTask}
                sx={{
                  backgroundColor: "#233044",
                  borderRadius: "20px",
                  width: "226px",
                  height: "40px",
                }}
              >
                Create Task
              </Button>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
export default Column;
