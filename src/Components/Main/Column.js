import { Box, Button, Checkbox, Stack } from "@mui/material";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import { MuiColorInput } from "mui-color-input";
import CheckBoxes from "./CheckBoxes";

const Column = (props) => {
  const {
    handleCreateTask,
    color,
    setColor,
    taskTitle,
    setTaskTitle,
    selected,
    setSelected,
    handleCheckBox,
  } = props;
  const [addTask, setAddTask] = useState(false);

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const handleAddTask = () => {
    setAddTask(true);
  };
  const CustomTextField = styled(TextField)(({ theme }) => ({
    input: {
      color: "white",
    },
    backgroundColor: "#233044",
    border: "2px solid #233044",
    borderRadius: "20px",
    textDecoration: "none",

    "&:hover": {
      borderColor: "#19bb84",
      boxShadow: "0 0 14px -4px #19bb84",
      InputLabelProps: { color: "" },
    },
    "&:hover label": {
      color: "#19bb84",
    },
  }));
  const CustomColorInput = styled(MuiColorInput)(({ theme }) => ({
    input: {
      color: "white",
    },
    backgroundColor: "#233044",
    border: "2px solid #233044",
    borderRadius: "20px",
    textDecoration: "none",

    "&:hover": {
      borderColor: "#19bb84",
      boxShadow: "0 0 14px -4px #19bb84",
    },
    "& label": {
      color: "#ffffff",
    },
    "&:hover label": {
      color: "#19bb84",
    },

    "& .MuiInputBase-root": {
      color: "white",
    },
  }));
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: addTask ? "start" : "center",
        padding: 2,
        boxSizing: "border-box",
      }}
    >
      <Box>
        {/* sx={{ color: "#ffffff", fontSize: "200px" }} */}
        <span onClick={handleAddTask} style={{}}>
          +
        </span>
      </Box>
      {addTask ? (
        <Box
          sx={{
            fontSize: "32px",
            color: "#19bb84",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          <CustomTextField
            label="Title"
            id="filled-basic"
            // autoFocus
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            InputLabelProps={{
              sx: {
                color: "#ffffff",
                "&.Mui-focused": {
                  color: "#19bb84",
                  "&:hover": { color: "#19bb84" },
                },
              },
            }}
            variant="filled"
            InputProps={{
              disableUnderline: "true",
            }}
            sx={{ width: "100%" }}
          ></CustomTextField>

          <CustomColorInput
            value={color}
            format="hex"
            onChange={handleColorChange}
            label="Color"
            variant="filled"
            InputProps={{ disableUnderline: true }}
            sx={{
              mt: 2,
              width: "100%",

              "& .MuiFilledInput-root": {
                backgroundColor: "#233044",
                border: "2px solid #233044",
                borderRadius: "20px",
                color: "#ffffff",
                overflow: "hidden",
              },

              "& .MuiFilledInput-root:before": {
                borderBottom: "none",
              },
              "& .MuiFilledInput-root:after": {
                borderBottom: "none",
              },

              "& .MuiFilledInput-root:hover": {
                borderColor: "#19bb84",
                boxShadow: "0 0 14px -4px #19bb84",
              },

              "& .MuiInputLabel-root": {
                color: "#ffffff",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#19bb84",
              },
            }}
          />
          <CheckBoxes
            selected={selected}
            setSelected={setSelected}
            handleCheckBox={handleCheckBox}
          />
          <Button
            onClick={handleCreateTask}
            sx={{
              backgroundColor: "#233044",
              borderRadius: "20px",
              height: "40px",
              width: "226px",
              mt: 2,
              color: "#ffffff",

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
      ) : null}
    </Box>
  );
};
export default Column;
