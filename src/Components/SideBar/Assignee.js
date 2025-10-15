import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";
import { ASSIGNEE } from "./Utils";

const Assignee = (props) => {
  const { formik } = props;
  // const { assignee } = task;

  // const handleChange = (e) => {
  //   setTask({ ...task, assignee: e.target.value });
  // };

  return (
    <div>
      <Box sx={{}}>
        <FormControl variant="standard"></FormControl>
        <FormControl
          variant="filled"
          sx={{
            mt: "20px",
            width: "250px",
            "&:hover .MuiInputLabel-root": {
              color: "#19bb84",
            },
          }}
        >
          <InputLabel
            id="demo-simple-select-filled-label"
            sx={{
              "&.MuiInputLabel-root": {
                color: "#ffffff",
                "&:hover": {
                  color: "#19bb84",
                },
              },

              "&.MuiInputLabel-root.Mui-focused": {
                color: "#19bb84",
              },
            }}
          >
            Assignee
          </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            inputProps={{ "aria-label": "Without underline" }}
            disableUnderline
            name="assignee"
            value={formik.value}
            onChange={formik.handleChange}
            MenuProps={{
              sx: {
                "&& .Mui-selected": {
                  background: "#ffffff",
                },
              },
            }}
            sx={{
              border: "2px solid #233044 ",
              // width: "200%",
              borderRadius: "20px",
              backgroundColor: "#233044",
              color: "#ffffff",
              "&:hover": {
                backgroundColor: "#233044",
                borderColor: "#19bb84",
                boxShadow: "0 0 14px -4px #19bb84",
              },
            }}
          >
            {ASSIGNEE.map((item) => {
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

export default Assignee;
