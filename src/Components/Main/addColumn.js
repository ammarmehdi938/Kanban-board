import { Box, Button, Checkbox, Stack } from "@mui/material";
import { useState } from "react";
import CheckBoxes from "./CheckBoxes";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { MuiColorInput } from "mui-color-input";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Title } from "@mui/icons-material";

const AddColumn = (props) => {
  const { addColumn, newColumn, setNewColumn } = props;
  const [addTask, setAddTask] = useState(false);

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

  const handleAddTask = () => {
    setAddTask(true);
  };
  const handleClickAway = () => {
    setAddTask(false);
  };

  const handleUpdateColumn = (key, value) => {
    setNewColumn({ ...newColumn, [key]: value, isNew: true });
  };

  // Function to handle the creation of a new task
  const handleCreateTask = () => {
    {
      newColumn.label
        ? addColumn((prev) => [...prev, newColumn])
        : alert("Please enter a title");
    }
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box
        sx={{
          width: "100%",
          minWidth: "250px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: addTask ? "start" : "center",
          padding: 2,
          boxSizing: "border-box",
        }}
      >
        {!addTask ? (
          <Box onClick={handleAddTask}>
            {/* sx={{ color: "#ffffff", fontSize: "200px" }} */}
            <Box
              sx={{
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
        ) : null}

        {addTask ? (
          <Box
            sx={{
              fontSize: "32px",
              color: "#19bb84",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            {" "}
            <CustomTextField
              label="Title"
              id="filled-basic"
              // onChange={(e) => handleTitle(e)}
              value={newColumn.label ?? ""}
              onChange={(e) => handleUpdateColumn("label", e.target.value)}
              autoFocus
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
            />
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
    </ClickAwayListener>
  );
};
export default AddColumn;
