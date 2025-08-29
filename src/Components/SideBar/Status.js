import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { BorderColor } from "@mui/icons-material";
import { Box } from "@mui/material";
import { STATUS } from "./Utils";
const Status = (props) => {
  const { task, setTask } = props;
  const { status } = task;
  const handleChange = (e) => {
    setTask({ ...task, status: e.target.value });
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
          // "&:hover":{background}
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
            "&.MuiInputLabel-root.Mui-focused": {
              color: "blue  ", // Label color when focused
            },
          }}
        >
          Status
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          inputProps={{ "aria-label": "Without underline" }}
          disableUnderline
          value={status}
          onChange={handleChange}
          sx={{
            border: "2px solid #233044 ",
            textAlign: "center",
            borderRadius: "20px",
            backgroundColor: "#233044",
            width: "200%",
            "&:hover": {
              backgroundColor:'#233044',
              borderColor: "#4782da",
              boxShadow: "0 0 14px -4px #4381da",
            },
          }}
        >
          {STATUS.map((item) => {
            return (
              <MenuItem value={item.key} sx={{ background: item.color }}>
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

export default Status;
