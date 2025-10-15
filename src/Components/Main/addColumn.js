import {
  Box,
  Button,
  Checkbox,
  ClickAwayListener,
  colors,
  Stack,
} from "@mui/material";
import { useState } from "react";
import CheckBoxes from "./CheckBoxes";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { MuiColorInput } from "mui-color-input";
import { useFormik } from "formik";
import { InputValidationSchema } from "../../Schema/Validation";
import StatusForm from "./statusForm";
import Increment from "./Counter";
import { Co2Sharp } from "@mui/icons-material";

const AddColumn = (props) => {
  const { addColumn, newColumn, setNewColumn } = props;
  const [addTask, setAddTask] = useState(false);

  const handleAddTask = () => {
    setAddTask(true);
  };
  const handleClickAway = () => {
    setAddTask(false);
  };

  const createStatus = (data) => {
    addColumn((prev) => [...prev, { ...data, isNew: true, label: data.title }]);
    handleClickAway();
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box
        sx={{
          backgroundColor: "#1B2635",
          border: "2px dashed #ffffff33",
          width: "250px",
          minWidth: "250px",
          height: "100%",
          p: 2,
          boxSizing: "border-box",
          // marginBottom: "10px",
          // paddingBottom: "10px",
          borderRadius: "16px",
          cursor: "pointer",
          "&:hover": {
            borderColor: "#1d4ed8",
            // backgroundColor: "#1b263599",
            // boxShadow: "0 15px 35px #0000004d",
            transform: "translateZ(4px)",
            boxShadow: `0 15px 50px rgba(0, 0, 0, 0.4),
                    0 0 0 1px #255ae21a`,
          },
        }}
      >
        <Increment />
        {!addTask ? (
          <Box
            onClick={handleAddTask}
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                height: "50px",
                width: "50px",
                borderRadius: "100%",
                fontSize: "50px",
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              +
            </Box>
          </Box>
        ) : (
          <StatusForm createStatus={createStatus} />
        )}
      </Box>
    </ClickAwayListener>
  );
};
export default AddColumn;
