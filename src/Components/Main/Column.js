import { Box, Button, Checkbox, Stack } from "@mui/material";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import { MuiColorInput } from "mui-color-input";
import CheckBoxes from "./CheckBoxes";

const AddColumn = (props) => {
  const { addColumn, newColumn, setNewColumn } = props;
  const [addTask, setAddTask] = useState(false);

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

  const handleUpdateColumn = (key, value) => {
    setNewColumn({ ...newColumn, [key]: value });
  };

  // Function to handle the creation of a new task
  const handleCreateTask = () => {
    addColumn((prev) => [...prev, newColumn]);
  };
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
      <Box onClick={handleAddTask} sx={{}}>
        {/* sx={{ color: "#ffffff", fontSize: "200px" }} */}
        <Box
          sx={{
            background: "linear-gradient(45deg, #3b82f6, #1d4ed8)",
            height: "50px",
            width: "50px",
            borderRadius: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "50px",
          }}
        >
          +
        </Box>
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
            autoFocus
            value={newColumn.label ?? ""}
            onChange={(e) => handleUpdateColumn("label", e.target.value)}
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
            value={newColumn.color ?? ""}
            format="hex"
            onChange={(color) => handleUpdateColumn("color", color)}
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
          <CheckBoxes newColumn={newColumn} setNewColumn={setNewColumn} />
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
export default AddColumn;
