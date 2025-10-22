import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";
import { STATUS } from "../../pages/pages/utils/utils";

const Status = (props) => {
  const { formik } = props;
  // const { status } = task;
  // const handleChange = (e) => {
  //   console.log(e.target.value);
  //   setTask({ ...task, status: e.target.value });
  // };

  return (
    <div>
      <Box>
        <FormControl variant="standard"></FormControl>
        <FormControl
          variant="filled"
          sx={{
            width: "250px",
            mt: "20px",
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
              "&.MuiInputLabel-root.Mui-focused": {
                color: "#19ab57  ", // Label color when focused
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
            name="status"
            value={formik.value}
            onChange={formik.handleChange}
            sx={{
              border: "2px solid #233044 ",
              textAlign: "center",
              borderRadius: "20px",
              backgroundColor: "#233044",
              color: "#ffffff",
              "&:hover": {
                backgroundColor: "#233044",
                borderColor: "#19ab57",
                boxShadow: "0 0 14px -4px #19bb84",
              },
            }}
          >
            {/* {STATUS.map((item) => {
              return (
                <MenuItem value={item.key} sx={{ background: item.color }}>
                  {item.label}
                </MenuItem> */}
            {/* ); })} */}
            {Object.values(STATUS).map((status) => {
              return (
                <MenuItem
                  key={status.id}
                  value={status.key}
                  sx={{ background: status.color }}
                >
                  {status.label}
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
