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
      <Box sx={{marginLeft:'-30px'}}>
      <FormControl variant="standard" sx={{ m: 1 }}></FormControl>
      <FormControl
        variant="filled"
        sx={{
          ml: "65px",
          mt: "20px",
          minWidth: 120,
          "&:hover .MuiInputLabel-root": {
            color: "blue",
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
              color: "blue",
            },
            "&.MuiInputLabel-root.Mui-focused": {
              color: "blue",
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
            width: "200%",
            borderRadius: "20px",
            backgroundColor: "#233044",
            "&:hover": {
              backgroundColor: '#233044',
              borderColor: "#4782da",
              boxShadow: "0 0 14px -4px #4381da",
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
