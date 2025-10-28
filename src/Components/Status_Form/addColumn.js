import { Box, Button, Checkbox, ClickAwayListener } from "@mui/material";
import { useState } from "react";

import StatusForm from "./statusForm";
import Increment from "./Counter";

const AddColumn = () => {
  const [addTask, setAddTask] = useState(false);

  const handleAddTask = () => {
    setAddTask(true);
  };
  const handleClickAway = () => {
    setAddTask(false);
  };

  const createStatus = (data) => {
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
