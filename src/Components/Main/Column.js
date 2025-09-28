import { Box, Button, Checkbox, Stack } from "@mui/material";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import { MuiColorInput } from "mui-color-input";
import CheckBox from "./CheckBox";

const Column = (props) => {
  const { handleCreateTask, color, setColor, taskTitle, setTaskTitle } = props;
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
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        justifyContent: "center",
        width: "260px",
        minWidth: "260px",
        padding: 2,
        // borderRadius: 2,
        flex: 0,
      }}
    >
      <Box>
        {/* sx={{ color: "#ffffff", fontSize: "200px" }} */}
        <span
          onClick={handleAddTask}
          style={
            {
              //  width: 48px;
              // height: 48px;
              // border-radius: 50%;
              // background: linear-gradient(45deg, #3b82f6, #1d4ed8);
              // display: flex;
              // align-items: center;
              // justify-content: center;
              // color: #ffffff;
              // font-size: 24px;
              // font-weight: 300;
              // margin-bottom: 0.5rem;
              // box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3);
            }
          }
        >
          +
        </span>
      </Box>
      {addTask ? (
        <Box>
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
              width: "226px",

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

          <Checkbox />

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
