import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { PRIORITY } from "./Utils";
import { Box } from "@mui/material";

const Priority = (props) => {
  const { task, setTask } = props;
  const { priority } = task;
  const handleChange = (e) => {
    setTask({ ...task, priority: e.target.value });
  };

  return (
    <div>
      <Box>
        <FormControl variant="standard"></FormControl>
        <FormControl
          variant="filled"
          sx={{
            mt: "20px",
            width: "250px",
            "&:hover .MuiInputLabel-root": {
              color: "#19ab57",
            },
          }}
        >
          <InputLabel
            id="demo-simple-select-filled-label"
            sx={{
              "&.MuiInputLabel-root": {
                color: "#ffffff",
              },
              "&.MuiInputLabel-root.Mui-hover": {
                color: "#19ab57",
              },
              "&.MuiInputLabel-root.Mui-focused": {
                color: "#19ab57",
              },
            }}
          >
            Priority
          </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            inputProps={{ "aria-label": "Without underline" }}
            disableUnderline
            value={priority}
            onChange={handleChange}
            sx={{
              border: "2px solid #233044 ",
              borderRadius: "20px",
              backgroundColor: "#233044",
              "&:hover": {
                backgroundColor: "#233044",
                borderColor: "#19ab57",
                boxShadow: "0 0 14px -4px #19bb84",
              },
            }}
          >
            {PRIORITY.map((item) => {
              return (
                <MenuItem value={item.key} sx={{ backgroundColor: item.color }}>
                  {item.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default Priority;
